-- ============================================================
-- JYS 컴퍼니 챗봇 Supabase 스키마
-- Supabase SQL Editor에서 순서대로 실행하세요
-- ============================================================

-- 1. pgvector 확장 활성화
create extension if not exists vector;

-- 2. RAG 문서 테이블
create table if not exists public.documents (
  id          bigserial primary key,
  source      text    not null,          -- 파일명 (e.g. JYS_Company_Profile.md)
  chunk_index integer not null,          -- 해당 파일 내 청크 번호
  content     text    not null,          -- 청크 텍스트
  embedding   vector(1536),              -- text-embedding-3-small 벡터
  created_at  timestamptz default now()
);

-- 코사인 유사도 HNSW 인덱스 (빠른 검색)
create index if not exists documents_embedding_idx
  on public.documents
  using hnsw (embedding vector_cosine_ops);

-- 3. 리드(상담 신청) 테이블
create table if not exists public.leads (
  id         bigserial primary key,
  name       text,
  phone      text,
  package    text,
  message    text,
  created_at timestamptz default now()
);

-- 4. 대화 로그 테이블
create table if not exists public.chat_logs (
  id         bigserial primary key,
  session_id text,
  role       text not null check (role in ('user', 'assistant')),
  content    text not null,
  created_at timestamptz default now()
);

-- 5. 벡터 유사도 검색 함수
create or replace function public.match_documents(
  query_embedding vector(1536),
  match_count     int   default 5,
  match_threshold float default 0.3
)
returns table (
  id         bigint,
  source     text,
  content    text,
  similarity float
)
language sql stable
as $$
  select
    id,
    source,
    content,
    1 - (embedding <=> query_embedding) as similarity
  from public.documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by embedding <=> query_embedding
  limit match_count;
$$;

-- 6. RLS 활성화 (service_role 키는 자동으로 우회)
alter table public.documents  enable row level security;
alter table public.leads       enable row level security;
alter table public.chat_logs   enable row level security;
