/* @ds-bundle: {"format":3,"namespace":"EliceDesignSystem_b21f2c","components":[{"name":"EliceLogo","sourcePath":"assets/brand/EliceLogo.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Fab","sourcePath":"components/actions/Fab.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Divider","sourcePath":"components/data-display/Divider.jsx"},{"name":"List","sourcePath":"components/data-display/List.jsx"},{"name":"ListItem","sourcePath":"components/data-display/List.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Tooltip","sourcePath":"components/data-display/Tooltip.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"LinearProgress","sourcePath":"components/feedback/Progress.jsx"},{"name":"CircularProgress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Snackbar","sourcePath":"components/feedback/Snackbar.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Slider","sourcePath":"components/forms/Slider.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Menu","sourcePath":"components/navigation/Menu.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"CourseCard","sourcePath":"components/products/CourseCard.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardMedia","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardHeader","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardContent","sourcePath":"components/surfaces/Card.jsx"},{"name":"CardActions","sourcePath":"components/surfaces/Card.jsx"},{"name":"Paper","sourcePath":"components/surfaces/Paper.jsx"}],"sourceHashes":{"assets/brand/EliceLogo.jsx":"5c3828f02a2f","components/actions/Button.jsx":"1f556d653e88","components/actions/Fab.jsx":"3c60ef514726","components/actions/IconButton.jsx":"cc59270464b4","components/data-display/Avatar.jsx":"cc44078fa663","components/data-display/Badge.jsx":"63aafa3b39b3","components/data-display/Chip.jsx":"2e0ee4f12869","components/data-display/Divider.jsx":"1866fb53d1bf","components/data-display/List.jsx":"90ab1f158000","components/data-display/Tag.jsx":"1f4608421a00","components/data-display/Tooltip.jsx":"c8c7952774c8","components/feedback/Alert.jsx":"0b329ad61ebb","components/feedback/Dialog.jsx":"4be2d292e40e","components/feedback/Progress.jsx":"3ae6529aa6b1","components/feedback/Skeleton.jsx":"0eb540c7ab85","components/feedback/Snackbar.jsx":"64eca4ba9a22","components/forms/Checkbox.jsx":"8cb014f2f5b7","components/forms/Radio.jsx":"629ba2c109c2","components/forms/Select.jsx":"3de3e12ec273","components/forms/Slider.jsx":"9503c6c13a5d","components/forms/Switch.jsx":"9a891173733b","components/forms/TextField.jsx":"912c9ebe9cdc","components/navigation/Accordion.jsx":"0fa3a0d8014c","components/navigation/Breadcrumbs.jsx":"a9341d0cc701","components/navigation/Menu.jsx":"ba9e5de1f65a","components/navigation/Pagination.jsx":"0e14bac611b8","components/navigation/Stepper.jsx":"513c2c8fd988","components/navigation/Tabs.jsx":"74827d3d5f6a","components/products/CourseCard.jsx":"56076ca1da31","components/surfaces/Card.jsx":"59e98cd66ca4","components/surfaces/Paper.jsx":"ed218be1f291","ui_kits/academy/CatalogPage.jsx":"0a9c652aad1a","ui_kits/academy/CourseDetailPage.jsx":"a1bb928c661a","ui_kits/academy/Dashboard.jsx":"518bb31b241a","ui_kits/academy/Header.jsx":"22b86c0b2814"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EliceDesignSystem_b21f2c = window.EliceDesignSystem_b21f2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/brand/EliceLogo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * EliceLogo — the Elice brand wordmark + sparkle mark.
 * Self-contained SVG (paths lifted from the Figma "Service Logo" component).
 * `service` switches the brand color set; `variant` toggles full lockup vs mark only.
 */
function EliceLogo({
  service = 'academy',
  variant = 'full',
  height = 24,
  color,
  style = {},
  ...rest
}) {
  const PALETTE = {
    academy: {
      mark: 'rgb(103,0,230)',
      word: 'rgb(17,17,17)',
      accent: 'rgb(103,0,230)'
    },
    works: {
      mark: 'rgb(47,56,251)',
      word: 'rgb(17,17,17)',
      accent: 'rgb(47,56,251)'
    },
    mono: {
      mark: 'currentColor',
      word: 'currentColor',
      accent: 'currentColor'
    }
  };
  const c = PALETTE[service] || PALETTE.academy;
  const wordColor = color || c.word;
  const accent = color || c.accent;
  const markColor = color || c.mark;
  const scale = height / 24;

  // Sparkle mark: rounded-square blob + 6-point star
  const Mark = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 24 * scale,
      height: 24 * scale,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.6 * scale,
    height: 24 * scale,
    viewBox: "0 0 24.597 24.001",
    fill: "none",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      color: markColor
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.559 1.505 C 10.611 -1.26 18.119 -0.198 22.285 4.547 C 26.192 8.998 24.999 16.22 19.82 20.785 C 14.267 25.678 7.945 25.012 3.054 18.617 C -0.956 13.376 -1.858 5.564 5.559 1.505 Z",
    fill: "currentColor"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 15.671 * scale,
    height: 14.927 * scale,
    viewBox: "0 0 15.671 14.927",
    fill: "none",
    style: {
      position: 'absolute',
      left: 4.664 * scale,
      top: 4.08 * scale,
      color: 'rgb(255,255,255)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.671 6.683 L 14.836 4.111 L 8.933 6.298 L 9.186 0 L 6.485 0 L 6.739 6.298 L 0.836 4.111 L 0 6.683 L 6.059 8.389 L 2.159 13.337 L 4.343 14.927 L 7.836 9.683 L 11.328 14.927 L 13.512 13.337 L 9.613 8.389 L 15.671 6.683 Z",
    fill: "currentColor"
  })));
  if (variant === 'mark') {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: 'inline-flex',
        ...style
      }
    }, rest), Mark);
  }

  // "elice" wordmark — each glyph positioned absolutely; accent glyphs use brand color
  const word = /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block',
      width: 121.241 * scale,
      height: 17.578 * scale,
      flexShrink: 0
    }
  }, [{
    w: 10.653,
    h: 16.107,
    l: 0,
    t: 1.205,
    col: wordColor,
    d: "M 10.653 16.107 L 0 16.107 L 0 0 L 10.653 0 L 10.653 2.879 L 3.365 2.879 L 3.365 6.641 L 10.239 6.641 L 10.239 9.308 L 3.365 9.308 L 3.365 13.226 L 10.653 13.226 L 10.653 16.105 L 10.653 16.107 Z"
  }, {
    w: 3.244,
    h: 17.011,
    l: 13.3,
    t: 0.301,
    col: wordColor,
    d: "M 0 0 L 3.244 0 L 3.244 17.011 L 0 17.011 L 0 0 Z"
  }, {
    w: 3.83,
    h: 17.309,
    l: 19.642,
    t: 0,
    col: wordColor,
    d: "M 1.915 3.281 C 1.624 3.281 1.361 3.239 1.124 3.158 C 0.887 3.076 0.683 2.963 0.518 2.817 C 0.35 2.671 0.222 2.499 0.133 2.299 C 0.044 2.099 0 1.879 0 1.639 C 0 1.4 0.044 1.17 0.133 0.97 C 0.222 0.77 0.35 0.597 0.518 0.452 C 0.685 0.306 0.887 0.195 1.124 0.116 C 1.361 0.037 1.624 0 1.915 0 C 2.206 0 2.467 0.04 2.701 0.116 C 2.936 0.193 3.135 0.306 3.303 0.452 C 3.47 0.597 3.601 0.77 3.692 0.97 C 3.786 1.17 3.83 1.395 3.83 1.639 C 3.83 1.884 3.784 2.096 3.692 2.299 C 3.599 2.499 3.47 2.671 3.303 2.817 C 3.135 2.963 2.936 3.076 2.701 3.158 C 2.467 3.239 2.206 3.281 1.915 3.281 Z M 0.288 4.999 L 3.532 4.999 L 3.532 17.309 L 0.288 17.309 L 0.288 4.999 L 0.288 4.999 Z"
  }, {
    w: 11.476,
    h: 12.846,
    l: 25.735,
    t: 4.73,
    col: wordColor,
    d: "M 8.445 4.612 C 8.334 4.024 8.072 3.553 7.666 3.2 C 7.256 2.847 6.704 2.669 6.004 2.669 C 5.127 2.669 4.454 2.985 3.981 3.617 C 3.51 4.249 3.273 5.175 3.273 6.397 C 3.273 7.619 3.51 8.572 3.981 9.214 C 4.452 9.858 5.127 10.179 6.004 10.179 C 6.672 10.179 7.215 10.021 7.631 9.705 C 8.048 9.389 8.319 8.925 8.445 8.315 L 11.476 8.315 C 11.41 9.006 11.237 9.631 10.959 10.189 C 10.68 10.747 10.308 11.224 9.84 11.619 C 9.371 12.014 8.817 12.317 8.173 12.527 C 7.53 12.739 6.808 12.846 6.007 12.846 C 5.048 12.846 4.195 12.702 3.448 12.416 C 2.701 12.13 2.073 11.712 1.565 11.167 C 1.057 10.619 0.668 9.947 0.402 9.147 C 0.136 8.347 0 7.431 0 6.397 C 0 5.362 0.131 4.469 0.394 3.674 C 0.658 2.879 1.045 2.207 1.558 1.664 C 2.07 1.121 2.699 0.709 3.446 0.425 C 4.193 0.141 5.046 0 6.004 0 C 6.813 0 7.545 0.109 8.193 0.323 C 8.844 0.541 9.398 0.847 9.859 1.249 C 10.32 1.652 10.688 2.136 10.964 2.706 C 11.237 3.276 11.41 3.911 11.476 4.609 L 8.445 4.609 L 8.445 4.612 Z"
  }, {
    w: 11.666,
    h: 12.846,
    l: 38.797,
    t: 4.73,
    col: wordColor,
    d: "M 11.565 9.076 C 11.439 9.656 11.218 10.179 10.902 10.643 C 10.587 11.107 10.187 11.505 9.704 11.831 C 9.221 12.159 8.661 12.409 8.028 12.584 C 7.392 12.759 6.699 12.846 5.95 12.846 C 5.013 12.846 4.178 12.702 3.443 12.416 C 2.709 12.13 2.083 11.712 1.573 11.167 C 1.06 10.619 0.67 9.952 0.402 9.162 C 0.136 8.374 0 7.481 0 6.483 C 0 5.486 0.136 4.577 0.407 3.777 C 0.678 2.977 1.07 2.299 1.582 1.741 C 2.095 1.183 2.716 0.753 3.443 0.452 C 4.171 0.151 4.991 0 5.906 0 C 6.82 0 7.621 0.141 8.334 0.425 C 9.046 0.709 9.65 1.116 10.145 1.647 C 10.638 2.18 11.015 2.829 11.277 3.6 C 11.535 4.37 11.666 5.241 11.666 6.217 L 11.666 7.209 L 3.231 7.209 L 3.231 7.377 C 3.239 7.839 3.31 8.251 3.448 8.616 C 3.586 8.982 3.776 9.29 4.018 9.547 C 4.259 9.804 4.55 10.001 4.893 10.14 C 5.235 10.278 5.617 10.347 6.041 10.347 C 6.687 10.347 7.224 10.238 7.651 10.019 C 8.077 9.799 8.378 9.485 8.548 9.076 L 11.568 9.076 L 11.565 9.076 Z M 5.916 2.491 C 5.536 2.491 5.191 2.555 4.88 2.681 C 4.567 2.807 4.296 2.987 4.062 3.217 C 3.828 3.447 3.641 3.726 3.5 4.049 C 3.36 4.372 3.273 4.735 3.244 5.138 L 8.482 5.138 C 8.445 4.321 8.198 3.674 7.747 3.202 C 7.293 2.731 6.685 2.494 5.921 2.494 L 5.916 2.491 Z"
  }].map((g, i) => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: g.w * scale,
    height: g.h * scale,
    viewBox: `0 0 ${g.w} ${g.h}`,
    fill: "none",
    style: {
      position: 'absolute',
      left: g.l * scale,
      top: g.t * scale,
      color: g.col
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: g.d,
    fill: "currentColor"
  }))));
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      gap: 5 * scale,
      alignItems: 'center',
      ...style
    }
  }, rest), Mark, word);
}
Object.assign(__ds_scope, { EliceLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/brand/EliceLogo.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Elice's primary action control (Material-based).
 * Variants: contained | outlined | text. Colors map to the token palette.
 */
function Button({
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  startIcon,
  endIcon,
  style = {},
  ...rest
}) {
  const main = `var(--${color}-main)`;
  const contrast = `var(--${color}-contrast)`;
  const dark = `var(--${color}-dark)`;
  const hover = `var(--${color}-opac-01-hovered)`;
  const sizes = {
    small: {
      fs: 13,
      pad: '4px 10px',
      h: 30,
      gap: 6,
      icon: 18
    },
    medium: {
      fs: 14,
      pad: '6px 16px',
      h: 36,
      gap: 8,
      icon: 20
    },
    large: {
      fs: 15,
      pad: '8px 22px',
      h: 42,
      gap: 8,
      icon: 22
    }
  };
  const s = sizes[size] || sizes.medium;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.h,
    padding: s.pad,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontSize: s.fs,
    fontWeight: 'var(--fw-bold)',
    lineHeight: 1.75,
    letterSpacing: '0.4px',
    borderRadius: 'var(--radius-md)',
    border: '1px solid transparent',
    cursor: disabled ? 'default' : 'pointer',
    transition: 'background var(--duration-short) var(--ease-standard), box-shadow var(--duration-short) var(--ease-standard), border-color var(--duration-short) var(--ease-standard)',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    boxSizing: 'border-box'
  };
  const variants = {
    contained: {
      background: disabled ? 'var(--action-disabled-background)' : main,
      color: disabled ? 'var(--action-disabled)' : contrast,
      boxShadow: disabled ? 'none' : 'var(--elevation-2)'
    },
    outlined: {
      background: 'transparent',
      color: disabled ? 'var(--action-disabled)' : main,
      borderColor: disabled ? 'var(--action-disabled-background)' : `var(--${color}-action-outlined)`
    },
    text: {
      background: 'transparent',
      color: disabled ? 'var(--action-disabled)' : main
    }
  };
  const [hovered, setHovered] = React.useState(false);
  const hoverStyle = !disabled && hovered ? variant === 'contained' ? {
    background: dark,
    boxShadow: 'var(--elevation-4)'
  } : {
    background: hover,
    ...(variant === 'outlined' ? {
      borderColor: main
    } : {})
  } : {};
  const iconWrap = node => node && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: s.icon,
      fontVariationSettings: "'FILL' 1, 'wght' 500, 'opsz' " + s.icon
    }
  }, node);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), typeof startIcon === 'string' ? iconWrap(startIcon) : startIcon, children, typeof endIcon === 'string' ? iconWrap(endIcon) : endIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/Fab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Fab — floating action button. */
function Fab({
  icon,
  children,
  color = 'primary',
  size = 'large',
  variant = 'circular',
  extendedLabel,
  style = {},
  ...rest
}) {
  const sizes = {
    small: 40,
    medium: 48,
    large: 56
  };
  const box = sizes[size] || 56;
  const [hovered, setHovered] = React.useState(false);
  const isExtended = variant === 'extended' || !!extendedLabel;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: box,
      width: isExtended ? 'auto' : box,
      padding: isExtended ? '0 20px' : 0,
      borderRadius: isExtended ? 'var(--radius-xl)' : 'var(--radius-circle)',
      border: 'none',
      cursor: 'pointer',
      background: color === 'default' ? 'var(--background-paper)' : `var(--${color}-main)`,
      color: color === 'default' ? 'var(--text-primary)' : `var(--${color}-contrast)`,
      boxShadow: hovered ? 'var(--elevation-8)' : 'var(--elevation-6)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--fw-bold)',
      letterSpacing: '0.4px',
      transition: 'box-shadow var(--duration-short) var(--ease-standard), background var(--duration-short) var(--ease-standard)',
      ...(hovered && color !== 'default' ? {
        background: `var(--${color}-dark)`
      } : {}),
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: size === 'small' ? 20 : 24
    }
  }, icon), isExtended && (extendedLabel || children));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Fab.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — a circular/rounded button containing a single Material Symbols icon.
 */
function IconButton({
  icon,
  children,
  color = 'default',
  size = 'medium',
  variant = 'standard',
  filled = false,
  disabled = false,
  edge,
  style = {},
  ...rest
}) {
  const sizes = {
    small: {
      box: 30,
      icon: 18
    },
    medium: {
      box: 40,
      icon: 22
    },
    large: {
      box: 48,
      icon: 26
    }
  };
  const s = sizes[size] || sizes.medium;
  const colorVar = color === 'default' ? 'var(--action-active)' : `var(--${color}-main)`;
  const hoverBg = color === 'default' ? 'var(--action-hover)' : `var(--${color}-opac-01-hovered)`;
  const [hovered, setHovered] = React.useState(false);
  const variantStyle = {
    standard: {
      background: 'transparent',
      border: 'none'
    },
    outlined: {
      background: 'transparent',
      border: `1px solid var(--outline-border)`
    },
    contained: {
      background: color === 'default' ? 'var(--action-selected)' : `var(--${color}-main)`,
      border: 'none'
    }
  }[variant];
  const isContained = variant === 'contained';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: s.box,
      height: s.box,
      padding: 0,
      borderRadius: 'var(--radius-circle)',
      cursor: disabled ? 'default' : 'pointer',
      color: disabled ? 'var(--action-disabled)' : isContained && color !== 'default' ? `var(--${color}-contrast)` : colorVar,
      transition: 'background var(--duration-short) var(--ease-standard)',
      ...variantStyle,
      ...(hovered && !disabled ? {
        background: isContained ? `var(--${color}-dark)` : hoverBg
      } : {}),
      ...(edge === 'start' ? {
        marginLeft: -8
      } : edge === 'end' ? {
        marginRight: -8
      } : {}),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: `ms${filled ? ' ms--filled' : ''}`,
    style: {
      fontSize: s.icon,
      fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'opsz' ${s.icon}`
    }
  }, icon || children));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — user image / initials / icon. Circular or rounded. */
function Avatar({
  src,
  alt,
  initials,
  icon,
  size = 40,
  variant = 'circular',
  color,
  style = {},
  children,
  ...rest
}) {
  const px = typeof size === 'number' ? size : {
    small: 24,
    medium: 32,
    large: 40,
    xlarge: 56
  }[size] || 40;
  const radius = variant === 'rounded' ? 'var(--radius-md)' : variant === 'square' ? 0 : '50%';
  const bg = color || 'var(--blue-gray-400)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: px,
      height: px,
      borderRadius: radius,
      overflow: 'hidden',
      flexShrink: 0,
      background: src ? 'transparent' : bg,
      color: 'var(--white)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: px * 0.42,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: px * 0.55
    }
  }, icon) : initials || children);
}

/** AvatarGroup — overlapping stack with optional +N surplus. */
function AvatarGroup({
  children,
  max = 4,
  size = 32,
  spacing = 8,
  style = {}
}) {
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      ...style
    }
  }, shown.map((child, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -spacing,
      border: '2px solid var(--background-paper)',
      borderRadius: '50%',
      display: 'inline-flex'
    }
  }, React.isValidElement(child) ? React.cloneElement(child, {
    size
  }) : child)), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -spacing,
      border: '2px solid var(--background-paper)',
      borderRadius: '50%',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    size: size,
    color: "var(--blue-gray-200)",
    style: {
      color: 'var(--text-secondary)',
      fontSize: size * 0.38
    }
  }, "+", extra)));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
/** Badge — small count/dot overlaid on a child element. */
function Badge({
  children,
  badgeContent,
  color = 'error',
  variant = 'standard',
  max = 99,
  showZero = false,
  dot = false,
  anchor = 'top-right',
  style = {}
}) {
  const isDot = dot || variant === 'dot';
  let content = badgeContent;
  if (typeof content === 'number' && content > max) content = `${max}+`;
  const hide = !isDot && (content === undefined || content === null || content === 0 && !showZero);
  const [v, h] = anchor.split('-');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      verticalAlign: 'middle',
      ...style
    }
  }, children, !hide && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      [v === 'top' ? 'top' : 'bottom']: 0,
      [h === 'right' ? 'right' : 'left']: 0,
      transform: `translate(${h === 'right' ? '50%' : '-50%'}, ${v === 'top' ? '-50%' : '50%'})`,
      minWidth: isDot ? 8 : 20,
      height: isDot ? 8 : 20,
      padding: isDot ? 0 : '0 6px',
      borderRadius: 'var(--radius-pill)',
      background: `var(--${color}-main)`,
      color: `var(--${color}-contrast)`,
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 'var(--fw-bold)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      border: '2px solid var(--background-paper)',
      lineHeight: 1
    }
  }, !isDot && content));
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Chip — interactive, optionally deletable label. Filled or outlined. */
function Chip({
  label,
  children,
  color = 'default',
  variant = 'filled',
  size = 'medium',
  icon,
  avatar,
  onDelete,
  onClick,
  disabled = false,
  style = {},
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const small = size === 'small';
  const filled = variant === 'filled';
  const isDefault = color === 'default';
  const main = isDefault ? 'var(--blue-gray-200)' : `var(--${color}-main)`;
  const fg = filled ? isDefault ? 'var(--text-primary)' : `var(--${color}-contrast)` : isDefault ? 'var(--text-primary)' : `var(--${color}-main)`;
  const bg = filled ? main : 'transparent';
  const border = filled ? 'none' : `1px solid ${isDefault ? 'var(--outline-border)' : `var(--${color}-action-outlined)`}`;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 4 : 6,
      height: small ? 24 : 32,
      padding: small ? '0 8px' : '0 12px',
      paddingLeft: avatar ? 4 : small ? 8 : 12,
      borderRadius: 'var(--radius-pill)',
      background: bg,
      border,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 12 : 13,
      fontWeight: 'var(--fw-medium)',
      cursor: onClick && !disabled ? 'pointer' : 'default',
      opacity: disabled ? 0.5 : 1,
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      userSelect: 'none',
      transition: 'background var(--duration-short) var(--ease-standard), filter var(--duration-short)',
      filter: hovered && (onClick || onDelete) && !disabled ? 'brightness(0.94)' : 'none',
      ...style
    }
  }, rest), avatar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: small ? 18 : 24,
      height: small ? 18 : 24,
      borderRadius: '50%',
      overflow: 'hidden',
      flexShrink: 0,
      display: 'inline-flex'
    }
  }, avatar), icon && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: small ? 16 : 18
    }
  }, icon), label || children, onDelete && /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    onClick: e => {
      e.stopPropagation();
      if (!disabled) onDelete(e);
    },
    style: {
      fontSize: small ? 16 : 18,
      cursor: 'pointer',
      opacity: 0.6,
      marginRight: -2
    }
  }, "cancel"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Divider.jsx
try { (() => {
/** Divider — horizontal or vertical rule, optionally with centered text. */
function Divider({
  orientation = 'horizontal',
  children,
  textAlign = 'center',
  inset = false,
  style = {}
}) {
  if (orientation === 'vertical') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 1,
        alignSelf: 'stretch',
        background: 'var(--divider)',
        margin: '0 8px',
        ...style
      }
    });
  }
  if (children) {
    const before = textAlign === 'left' ? '0 0 0 auto' : 1;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        margin: '8px 0',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: textAlign === 'left' ? '0 0 16px' : 1,
        height: 1,
        background: 'var(--divider)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--text-tertiary)',
        whiteSpace: 'nowrap'
      }
    }, children), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: textAlign === 'right' ? '0 0 16px' : 1,
        height: 1,
        background: 'var(--divider)'
      }
    }));
  }
  return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 'none',
      height: 1,
      background: 'var(--divider)',
      margin: '8px 0',
      marginLeft: inset ? 56 : 0,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/data-display/List.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** List + ListItem — vertical menu/content list with icons & secondary action. */
function List({
  children,
  dense = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "list",
    style: {
      display: 'flex',
      flexDirection: 'column',
      padding: dense ? '4px 0' : '8px 0',
      ...style
    }
  }, children);
}
function ListItem({
  icon,
  avatar,
  primary,
  secondary,
  action,
  selected = false,
  disabled = false,
  onClick,
  dense = false,
  style = {},
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  const clickable = !!onClick && !disabled;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "listitem",
    onClick: clickable ? onClick : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: dense ? '6px 16px' : '10px 16px',
      cursor: clickable ? 'pointer' : 'default',
      opacity: disabled ? 0.5 : 1,
      background: selected ? 'var(--primary-action-selected)' : hovered && clickable ? 'var(--action-hover)' : 'transparent',
      borderRadius: 'var(--radius-sm)',
      transition: 'background var(--duration-short) var(--ease-standard)',
      ...style
    }
  }, rest), avatar, icon && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 22,
      color: selected ? 'var(--primary-main)' : 'var(--text-tertiary)',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: selected ? 'var(--fw-semibold)' : 'var(--fw-medium)',
      color: selected ? 'var(--primary-main)' : 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, primary), secondary && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-tertiary)',
      marginTop: 2,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, secondary)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action));
}
Object.assign(__ds_scope, { List, ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/List.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small, non-interactive status label with a muted tinted background.
 * Elice-specific: light tint + strong-tone text. 7 colors, 2 sizes.
 */
const TAG_COLORS = {
  default: {
    bg: 'var(--common-8p)',
    fg: 'var(--text-primary)'
  },
  primary: {
    bg: 'var(--primary-muted-background)',
    fg: 'var(--primary-dark)'
  },
  secondary: {
    bg: 'var(--secondary-muted-background)',
    fg: 'var(--secondary-dark)'
  },
  error: {
    bg: 'var(--error-muted-background)',
    fg: 'var(--error-dark)'
  },
  warning: {
    bg: 'var(--warning-muted-background)',
    fg: 'var(--warning-dark)'
  },
  info: {
    bg: 'var(--info-muted-background)',
    fg: 'var(--info-dark)'
  },
  success: {
    bg: 'var(--success-muted-background)',
    fg: 'var(--success-dark)'
  }
};
function Tag({
  children,
  color = 'default',
  size = 'medium',
  icon,
  variant = 'muted',
  style = {},
  ...rest
}) {
  const c = TAG_COLORS[color] || TAG_COLORS.default;
  const small = size === 'small';
  const outlined = variant === 'outlined';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: small ? 2 : 4,
      padding: small ? '2px 6px' : '3px 8px',
      borderRadius: small ? 5 : 6,
      background: outlined ? 'transparent' : c.bg,
      border: outlined ? `1px solid ${c.fg}` : 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: small ? 11 : 12,
      fontWeight: 'var(--fw-bold)',
      lineHeight: 1.4,
      color: c.fg,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: small ? 12 : 14
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tooltip.jsx
try { (() => {
/** Tooltip — dark hover bubble positioned around its child. */
function Tooltip({
  title,
  children,
  placement = 'top',
  arrow = true,
  style = {}
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      mb: 8
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      mt: 8
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      mr: 8
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%)',
      ml: 8
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && title && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      zIndex: 50,
      bottom: pos.bottom,
      top: pos.top,
      left: pos.left,
      right: pos.right,
      transform: pos.transform,
      marginBottom: pos.mb,
      marginTop: pos.mt,
      marginLeft: pos.ml,
      marginRight: pos.mr,
      background: 'var(--blue-gray-900)',
      color: 'var(--white)',
      padding: '5px 10px',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      boxShadow: 'var(--elevation-2)',
      ...style
    }
  }, title));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
const SEV = {
  error: {
    icon: 'error',
    bg: 'var(--error-alert-background)',
    fg: 'var(--error-alert-content)',
    main: 'var(--error-main)'
  },
  warning: {
    icon: 'warning',
    bg: 'var(--warning-alert-background)',
    fg: 'var(--warning-alert-content)',
    main: 'var(--warning-main)'
  },
  info: {
    icon: 'info',
    bg: 'var(--info-alert-background)',
    fg: 'var(--info-alert-content)',
    main: 'var(--info-main)'
  },
  success: {
    icon: 'check_circle',
    bg: 'var(--success-alert-background)',
    fg: 'var(--success-alert-content)',
    main: 'var(--success-main)'
  }
};

/** Alert — inline status message. */
function Alert({
  severity = 'info',
  variant = 'standard',
  title,
  children,
  onClose,
  action,
  icon,
  style = {}
}) {
  const s = SEV[severity] || SEV.info;
  const filled = variant === 'filled';
  const outlined = variant === 'outlined';
  const bg = filled ? s.main : outlined ? 'transparent' : s.bg;
  const fg = filled ? 'var(--white)' : s.fg;
  const iconColor = filled ? 'var(--white)' : s.main;
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '10px 16px',
      borderRadius: 'var(--radius-md)',
      background: bg,
      border: outlined ? `1px solid ${s.main}` : 'none',
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.5,
      ...style
    }
  }, icon !== false && /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: 22,
      color: iconColor,
      marginTop: 1,
      flexShrink: 0
    }
  }, icon || s.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--fw-bold)',
      marginBottom: 2
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: filled ? 0.95 : 1
    }
  }, children)), action, onClose && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    onClick: onClose,
    style: {
      fontSize: 20,
      cursor: 'pointer',
      color: fg,
      opacity: 0.7,
      flexShrink: 0
    }
  }, "close"));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Dialog — modal overlay with title / content / actions. */
function Dialog({
  open = true,
  onClose,
  title,
  children,
  actions,
  maxWidth = 440,
  dividers = false,
  style = {}
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--other-backdrop)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth,
      background: 'var(--background-paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--elevation-24)',
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '90vh',
      overflow: 'hidden',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '20px 24px 16px',
      borderBottom: dividers ? '1px solid var(--divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--fw-extrabold) 20px/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    onClick: onClose,
    style: {
      fontSize: 22,
      cursor: 'pointer',
      color: 'var(--text-tertiary)'
    }
  }, "close")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: title ? '16px 24px' : 24,
      overflowY: 'auto',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8,
      padding: '12px 24px 20px',
      borderTop: dividers ? '1px solid var(--divider)' : 'none'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
/** LinearProgress — determinate or indeterminate bar. */
function LinearProgress({
  value,
  color = 'primary',
  variant = 'indeterminate',
  height = 4,
  style = {}
}) {
  const determinate = variant === 'determinate' && value !== undefined;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      height,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--primary-action-selected)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: `var(--${color}-main)`,
      width: determinate ? `${Math.max(0, Math.min(100, value))}%` : '40%',
      transition: determinate ? 'width var(--duration-medium) var(--ease-standard)' : 'none',
      animation: determinate ? 'none' : 'elice-progress 1.4s var(--ease-standard) infinite'
    }
  }), /*#__PURE__*/React.createElement("style", null, `@keyframes elice-progress{0%{left:-40%}100%{left:100%}}`));
}

/** CircularProgress — determinate or spinning ring. */
function CircularProgress({
  value,
  size = 40,
  thickness = 3.6,
  color = 'primary',
  variant = 'indeterminate',
  style = {}
}) {
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  const determinate = variant === 'determinate' && value !== undefined;
  const offset = determinate ? circ - value / 100 * circ : circ * 0.25;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: `0 0 ${size} ${size}`,
    style: {
      animation: determinate ? 'none' : 'elice-spin 1.2s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--primary-action-selected)",
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: `var(--${color}-main)`,
    strokeWidth: thickness,
    strokelinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: offset,
    transform: `rotate(-90 ${size / 2} ${size / 2})`
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes elice-spin{100%{transform:rotate(360deg)}}`));
}

/** Alias — `Progress` resolves to the linear bar. */
const Progress = LinearProgress;
Object.assign(__ds_scope, { LinearProgress, CircularProgress, Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/** Skeleton — loading placeholder. */
function Skeleton({
  variant = 'text',
  width,
  height,
  animation = 'pulse',
  style = {}
}) {
  const dims = {
    text: {
      width: width || '100%',
      height: height || '1em',
      borderRadius: 'var(--radius-xs)'
    },
    circular: {
      width: width || 40,
      height: height || 40,
      borderRadius: '50%'
    },
    rounded: {
      width: width || '100%',
      height: height || 80,
      borderRadius: 'var(--radius-md)'
    },
    rectangular: {
      width: width || '100%',
      height: height || 80,
      borderRadius: 0
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      background: 'var(--fill-normal)',
      animation: animation === 'wave' ? 'elice-sk-wave 1.6s linear infinite' : animation === 'pulse' ? 'elice-sk-pulse 1.5s var(--ease-standard) infinite' : 'none',
      ...dims,
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes elice-sk-pulse{0%,100%{opacity:1}50%{opacity:0.5}}@keyframes elice-sk-wave{0%{opacity:0.6}50%{opacity:1}100%{opacity:0.6}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Snackbar.jsx
try { (() => {
/** Snackbar — transient bottom toast. */
function Snackbar({
  open = true,
  message,
  action,
  severity,
  onClose,
  style = {}
}) {
  if (!open) return null;
  const tinted = severity && {
    error: 'var(--error-main)',
    warning: 'var(--warning-main)',
    info: 'var(--info-main)',
    success: 'var(--success-main)'
  }[severity];
  const icon = severity && {
    error: 'error',
    warning: 'warning',
    info: 'info',
    success: 'check_circle'
  }[severity];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 280,
      maxWidth: 480,
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      background: tinted || 'var(--background-snackbar)',
      color: 'var(--white)',
      boxShadow: 'var(--elevation-6)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: 20
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), action, onClose && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    onClick: onClose,
    style: {
      fontSize: 18,
      cursor: 'pointer',
      opacity: 0.8
    }
  }, "close"));
}
Object.assign(__ds_scope, { Snackbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Snackbar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — Material checkbox with optional label. */
function Checkbox({
  checked,
  defaultChecked,
  indeterminate = false,
  label,
  color = 'primary',
  size = 'medium',
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const box = size === 'small' ? 18 : 22;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const active = on || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: box,
      height: box,
      flexShrink: 0,
      borderRadius: 'var(--radius-xs)',
      border: active ? 'none' : `2px solid var(--util-checkbox)`,
      background: active ? `var(--${color}-main)` : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--duration-short) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest)), active && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: box - 2,
      color: `var(--${color}-contrast)`,
      fontVariationSettings: "'wght' 600"
    }
  }, indeterminate ? 'remove' : 'check')), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio + RadioGroup. */
function Radio({
  checked,
  value,
  name,
  label,
  color = 'primary',
  size = 'medium',
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  const box = size === 'small' ? 18 : 22;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: box,
      height: box,
      flexShrink: 0,
      borderRadius: '50%',
      border: `2px solid ${checked ? `var(--${color}-main)` : 'var(--util-checkbox)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--duration-short) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    value: value,
    name: name,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit'
    }
  }, rest)), checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: box / 2,
      height: box / 2,
      borderRadius: '50%',
      background: `var(--${color}-main)`
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label));
}

/** RadioGroup — manages selection across options. */
function RadioGroup({
  options = [],
  value,
  defaultValue,
  name,
  row = false,
  color = 'primary',
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const cur = isControlled ? value : internal;
  const handle = v => e => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v, e);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      gap: row ? 20 : 10,
      ...style
    }
  }, options.map(opt => {
    const o = typeof opt === 'string' ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement(Radio, {
      key: o.value,
      name: name,
      value: o.value,
      label: o.label,
      color: color,
      checked: cur === o.value,
      disabled: o.disabled,
      onChange: handle(o.value)
    });
  }));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/** Select — dropdown built on a native trigger + popover list. */
function Select({
  options = [],
  value,
  defaultValue,
  placeholder = '선택하세요',
  label,
  size = 'medium',
  color = 'primary',
  disabled = false,
  fullWidth = false,
  onChange,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [internal, setInternal] = React.useState(defaultValue);
  const ref = React.useRef(null);
  const isControlled = value !== undefined;
  const cur = isControlled ? value : internal;
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const selected = norm.find(o => o.value === cur);
  React.useEffect(() => {
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);
  const pick = o => {
    if (!isControlled) setInternal(o.value);
    onChange && onChange(o.value);
    setOpen(false);
  };
  const pad = size === 'small' ? '8px 12px' : '12px 14px';
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      width: fullWidth ? '100%' : 240,
      position: 'relative',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(v => !v),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: pad,
      border: `${open ? 2 : 1}px solid ${open ? `var(--${color}-main)` : 'var(--outline-border)'}`,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--action-hover)' : 'var(--background-input)',
      cursor: disabled ? 'default' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: size === 'small' ? 14 : 16,
      color: selected ? 'var(--text-primary)' : 'var(--text-tertiary)',
      opacity: disabled ? 0.6 : 1,
      padding: open ? `calc(${pad.split(' ')[0]} - 1px) calc(${pad.split(' ')[1]} - 1px)` : pad
    }
  }, /*#__PURE__*/React.createElement("span", null, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 22,
      color: 'var(--text-tertiary)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-short)'
    }
  }, "expand_more")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 4px)',
      left: 0,
      right: 0,
      zIndex: 20,
      background: 'var(--background-paper)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-popover)',
      padding: 6,
      maxHeight: 280,
      overflowY: 'auto'
    }
  }, norm.map(o => /*#__PURE__*/React.createElement("div", {
    key: o.value,
    onClick: () => pick(o),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)',
      background: o.value === cur ? 'var(--primary-action-selected)' : 'transparent'
    },
    onMouseEnter: e => {
      if (o.value !== cur) e.currentTarget.style.background = 'var(--action-hover)';
    },
    onMouseLeave: e => {
      if (o.value !== cur) e.currentTarget.style.background = 'transparent';
    }
  }, o.label, o.value === cur && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 18,
      color: `var(--${color}-main)`
    }
  }, "check")))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Slider.jsx
try { (() => {
/** Slider — single-value Material slider. */
function Slider({
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  color = 'primary',
  disabled = false,
  showValue = false,
  marks = false,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue);
  const isControlled = value !== undefined;
  const cur = isControlled ? value : internal;
  const pct = (cur - min) / (max - min) * 100;
  const handle = e => {
    const v = Number(e.target.value);
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      width: 240,
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--primary-action-selected)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      borderRadius: 'var(--radius-pill)',
      background: `var(--${color}-main)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 9px)`,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: `var(--${color}-main)`,
      boxShadow: 'var(--elevation-2)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: cur,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      margin: 0,
      opacity: 0,
      cursor: disabled ? 'default' : 'pointer'
    }
  })), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-secondary)',
      minWidth: 28,
      textAlign: 'right'
    }
  }, cur));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Slider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — Material toggle. */
function Switch({
  checked,
  defaultChecked,
  label,
  color = 'primary',
  size = 'medium',
  disabled = false,
  onChange,
  style = {},
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;
  const handle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const trackW = size === 'small' ? 34 : 42;
  const trackH = size === 'small' ? 14 : 16;
  const knob = size === 'small' ? 18 : 22;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: trackW,
      height: trackH,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: handle,
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      cursor: 'inherit',
      zIndex: 1
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: 'var(--radius-pill)',
      background: on ? `var(--${color}-main)` : 'var(--util-switch-slide)',
      opacity: on ? 0.5 : 0.5,
      transition: 'background var(--duration-short) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '50%',
      left: on ? trackW - knob + 2 : -2,
      transform: 'translateY(-50%)',
      width: knob,
      height: knob,
      borderRadius: '50%',
      background: on ? `var(--${color}-main)` : 'var(--white)',
      boxShadow: 'var(--elevation-2)',
      transition: 'left var(--duration-short) var(--ease-standard), background var(--duration-short) var(--ease-standard)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--text-primary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** TextField — text input with label, helper text, error & adornments. */
function TextField({
  label,
  value,
  defaultValue,
  placeholder,
  helperText,
  variant = 'outlined',
  size = 'medium',
  color = 'primary',
  error = false,
  disabled = false,
  required = false,
  fullWidth = false,
  startAdornment,
  endAdornment,
  multiline = false,
  rows = 3,
  type = 'text',
  onChange,
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const accent = error ? 'var(--error-main)' : focused ? `var(--${color}-main)` : 'var(--text-tertiary)';
  const labelColor = error ? 'var(--error-main)' : focused ? `var(--${color}-main)` : 'var(--text-tertiary)';
  const pad = size === 'small' ? '8px 12px' : '12px 14px';
  const fs = size === 'small' ? 14 : 16;
  const fieldChrome = {
    outlined: {
      border: `1px solid ${error ? 'var(--error-main)' : focused ? `var(--${color}-main)` : 'var(--outline-border)'}`,
      borderWidth: focused || error ? 2 : 1,
      borderRadius: 'var(--radius-md)',
      background: disabled ? 'var(--action-hover)' : 'var(--background-input)',
      padding: focused || error ? `calc(${pad.split(' ')[0]} - 1px) calc(${pad.split(' ')[1]} - 1px)` : pad
    },
    filled: {
      border: 'none',
      borderBottom: `2px solid ${accent}`,
      borderRadius: 'var(--radius-sm) var(--radius-sm) 0 0',
      background: 'var(--fill-normal)',
      padding: pad
    },
    standard: {
      border: 'none',
      borderBottom: `${focused || error ? 2 : 1}px solid ${accent}`,
      borderRadius: 0,
      background: 'transparent',
      padding: `8px 0`
    }
  }[variant];
  const InputTag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: 6,
      width: fullWidth ? '100%' : 240,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 'var(--fw-semibold)',
      color: labelColor,
      letterSpacing: '0.15px'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--error-main)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 8,
      opacity: disabled ? 0.6 : 1,
      transition: 'border-color var(--duration-short) var(--ease-standard)',
      ...fieldChrome
    }
  }, startAdornment && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20,
      color: 'var(--text-tertiary)'
    }
  }, startAdornment), /*#__PURE__*/React.createElement(InputTag, _extends({
    type: multiline ? undefined : type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    rows: multiline ? rows : undefined,
    onChange: onChange,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: fs,
      color: 'var(--text-primary)',
      resize: multiline ? 'vertical' : undefined,
      padding: 0,
      lineHeight: 1.5
    }
  }, rest)), endAdornment && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20,
      color: 'var(--text-tertiary)'
    }
  }, endAdornment)), helperText && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      letterSpacing: '0.4px',
      color: error ? 'var(--error-main)' : 'var(--text-tertiary)'
    }
  }, helperText));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
/** Accordion — collapsible panel. */
function Accordion({
  summary,
  children,
  defaultExpanded = false,
  expanded,
  onChange,
  icon,
  disabled = false,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultExpanded);
  const isControlled = expanded !== undefined;
  const open = isControlled ? expanded : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(v => !v);
    onChange && onChange(!open);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: '1px solid var(--divider)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--background-paper)',
      opacity: disabled ? 0.6 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      padding: '14px 16px',
      border: 'none',
      background: open ? 'var(--background-accordion)' : 'transparent',
      cursor: disabled ? 'default' : 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20,
      color: 'var(--text-tertiary)'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, summary), /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 24,
      color: 'var(--text-tertiary)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--duration-short) var(--ease-standard)'
    }
  }, "expand_more")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: open ? '1fr' : '0fr',
      transition: 'grid-template-rows var(--duration-medium) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '4px 16px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--divider)'
    }
  }, children))));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
/** Breadcrumbs — navigation trail with separators. */
function Breadcrumbs({
  items = [],
  separator = 'chevron_right',
  maxItems,
  style = {}
}) {
  let list = items;
  if (maxItems && items.length > maxItems) {
    list = [items[0], {
      label: '…'
    }, ...items.slice(-(maxItems - 2))];
  }
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 4,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      ...style
    }
  }, list.map((it, i) => {
    const last = i === list.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || undefined,
      onClick: it.onClick,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        textDecoration: 'none',
        color: last ? 'var(--text-primary)' : 'var(--text-tertiary)',
        fontWeight: last ? 'var(--fw-semibold)' : 'var(--fw-medium)',
        cursor: last || !(it.href || it.onClick) ? 'default' : 'pointer',
        pointerEvents: last ? 'none' : 'auto'
      }
    }, it.icon && /*#__PURE__*/React.createElement("span", {
      className: "ms",
      style: {
        fontSize: 18
      }
    }, it.icon), it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "ms",
      style: {
        fontSize: 18,
        color: 'var(--text-disabled)'
      }
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Menu.jsx
try { (() => {
/** Menu — popover list anchored to a trigger. Controlled by `open`. */
function Menu({
  open = false,
  onClose,
  items = [],
  anchorOrigin = 'bottom-left',
  width = 200,
  children,
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const close = e => {
      if (ref.current && !ref.current.contains(e.target)) onClose && onClose();
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [open, onClose]);
  if (!open) return null;
  const [v, h] = anchorOrigin.split('-');
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    role: "menu",
    style: {
      position: 'absolute',
      zIndex: 60,
      [v === 'bottom' ? 'top' : 'bottom']: 'calc(100% + 6px)',
      [h === 'right' ? 'right' : 'left']: 0,
      minWidth: width,
      background: 'var(--background-paper)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-popover)',
      padding: 6,
      ...style
    }
  }, children || items.map((it, i) => it.divider ? /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 1,
      background: 'var(--divider)',
      margin: '6px 0'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    key: i,
    role: "menuitem",
    onClick: () => {
      if (it.disabled) return;
      it.onClick && it.onClick();
      onClose && onClose();
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '8px 12px',
      borderRadius: 'var(--radius-sm)',
      cursor: it.disabled ? 'default' : 'pointer',
      opacity: it.disabled ? 0.5 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: it.danger ? 'var(--error-main)' : 'var(--text-primary)'
    },
    onMouseEnter: e => {
      if (!it.disabled) e.currentTarget.style.background = 'var(--action-hover)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'transparent';
    }
  }, it.icon && /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20,
      color: it.danger ? 'var(--error-main)' : 'var(--text-tertiary)'
    }
  }, it.icon), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-disabled)'
    }
  }, it.shortcut))));
}
Object.assign(__ds_scope, { Menu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Menu.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/** Pagination — page number controls. */
function Pagination({
  count = 1,
  page,
  defaultPage = 1,
  onChange,
  color = 'primary',
  siblingCount = 1,
  shape = 'rounded',
  size = 'medium',
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultPage);
  const isControlled = page !== undefined;
  const cur = isControlled ? page : internal;
  const go = p => {
    if (p < 1 || p > count) return;
    if (!isControlled) setInternal(p);
    onChange && onChange(p);
  };
  const range = (a, b) => Array.from({
    length: b - a + 1
  }, (_, i) => a + i);
  let pages = [];
  const startPages = range(1, Math.min(1, count));
  const endPages = range(Math.max(count, 1), count);
  const siblingsStart = Math.max(Math.min(cur - siblingCount, count - 1 - siblingCount * 2 - 1), 2);
  const siblingsEnd = Math.min(Math.max(cur + siblingCount, siblingCount * 2 + 3), count - 1);
  pages = [...startPages, ...(siblingsStart > 2 ? ['…'] : count > 1 ? [2] : []), ...range(Math.max(siblingsStart, 2), Math.min(siblingsEnd, count - 1)), ...(siblingsEnd < count - 1 ? ['…'] : count > 1 ? [count - 1] : []), ...endPages].filter((v, i, a) => a.indexOf(v) === i && v >= 1);
  const box = size === 'small' ? 30 : size === 'large' ? 42 : 36;
  const item = (content, key, opts = {}) => {
    const active = opts.active;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      disabled: opts.disabled,
      onClick: opts.onClick,
      style: {
        minWidth: box,
        height: box,
        padding: '0 6px',
        border: 'none',
        cursor: opts.disabled ? 'default' : 'pointer',
        borderRadius: shape === 'circular' ? '50%' : 'var(--radius-md)',
        background: active ? `var(--${color}-main)` : 'transparent',
        color: active ? `var(--${color}-contrast)` : opts.disabled ? 'var(--text-disabled)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background var(--duration-short)'
      },
      onMouseEnter: e => {
        if (!active && !opts.disabled) e.currentTarget.style.background = 'var(--action-hover)';
      },
      onMouseLeave: e => {
        if (!active) e.currentTarget.style.background = 'transparent';
      }
    }, content);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, item(/*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20
    }
  }, "chevron_left"), 'prev', {
    disabled: cur <= 1,
    onClick: () => go(cur - 1)
  }), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      minWidth: box,
      textAlign: 'center',
      color: 'var(--text-disabled)'
    }
  }, "\u2026") : item(p, p, {
    active: p === cur,
    onClick: () => go(p)
  })), item(/*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20
    }
  }, "chevron_right"), 'next', {
    disabled: cur >= count,
    onClick: () => go(cur + 1)
  }));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
/** Stepper — horizontal/vertical progress through ordered steps. */
function Stepper({
  steps = [],
  activeStep = 0,
  orientation = 'horizontal',
  color = 'primary',
  style = {}
}) {
  const vertical = orientation === 'vertical';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: vertical ? 'column' : 'row',
      alignItems: vertical ? 'stretch' : 'center',
      gap: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const label = typeof s === 'string' ? s : s.label;
    const done = i < activeStep;
    const active = i === activeStep;
    const circleBg = done || active ? `var(--${color}-main)` : 'var(--action-disabled-background)';
    const circleFg = done || active ? `var(--${color}-contrast)` : 'var(--text-disabled)';
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: vertical ? 'row' : 'column',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        background: circleBg,
        color: circleFg,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 'var(--fw-bold)',
        flexShrink: 0
      }
    }, done ? /*#__PURE__*/React.createElement("span", {
      className: "ms",
      style: {
        fontSize: 18
      }
    }, "check") : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: active ? 'var(--text-primary)' : 'var(--text-tertiary)',
        whiteSpace: 'nowrap'
      }
    }, label)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        background: i < activeStep ? `var(--${color}-main)` : 'var(--divider)',
        ...(vertical ? {
          width: 2,
          height: 24,
          marginLeft: 13
        } : {
          flex: 1,
          height: 2,
          margin: '0 12px',
          minWidth: 24
        })
      }
    }));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Tabs — underline or contained tab strip. */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  color = 'primary',
  fullWidth = false,
  style = {}
}) {
  const norm = tabs.map((t, i) => typeof t === 'string' ? {
    value: i,
    label: t
  } : {
    value: t.value ?? i,
    ...t
  });
  const [internal, setInternal] = React.useState(defaultValue ?? norm[0]?.value);
  const isControlled = value !== undefined;
  const cur = isControlled ? value : internal;
  const pick = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
  };
  const contained = variant === 'contained';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: contained ? 4 : 0,
      borderBottom: contained ? 'none' : '1px solid var(--divider)',
      background: contained ? 'var(--fill-normal)' : 'transparent',
      borderRadius: contained ? 'var(--radius-md)' : 0,
      padding: contained ? 4 : 0,
      ...style
    }
  }, norm.map(t => {
    const active = t.value === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      type: "button",
      onClick: () => pick(t.value),
      disabled: t.disabled,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        flex: fullWidth ? 1 : 'none',
        padding: contained ? '8px 16px' : '12px 16px',
        border: 'none',
        cursor: t.disabled ? 'default' : 'pointer',
        background: 'transparent',
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: active ? `var(--${color}-main)` : 'var(--text-tertiary)',
        opacity: t.disabled ? 0.4 : 1,
        position: 'relative',
        whiteSpace: 'nowrap',
        borderRadius: contained ? 'var(--radius-sm)' : 0,
        boxShadow: contained && active ? 'var(--elevation-1)' : 'none',
        ...(contained && active ? {
          background: 'var(--background-paper)'
        } : {}),
        transition: 'color var(--duration-short) var(--ease-standard)'
      }
    }, t.icon && /*#__PURE__*/React.createElement("span", {
      className: "ms",
      style: {
        fontSize: 18
      }
    }, t.icon), t.label, !contained && active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2.5,
        borderRadius: '2px 2px 0 0',
        background: `var(--${color}-main)`
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/products/CourseCard.jsx
try { (() => {
/**
 * CourseCard — Elice's signature course tile (LMS / Academy catalog).
 * Thumbnail, category, title, instructor, rating + meta row.
 */
function CourseCard({
  thumbnail,
  thumbnailColor = 'var(--blue-gray-800)',
  category,
  categoryColor = 'var(--info-main)',
  title,
  instructor,
  rating,
  ratingCount,
  price,
  originalPrice,
  level,
  duration,
  tags = [],
  bookmarked = false,
  onClick,
  style = {}
}) {
  const [hovered, setHovered] = React.useState(false);
  const [saved, setSaved] = React.useState(bookmarked);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      width: 280,
      background: 'var(--background-paper)',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: hovered ? 'var(--elevation-6)' : 'inset 0 0 0 1px rgba(0,0,0,0.06)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'box-shadow var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard)',
      transform: hovered ? 'translateY(-2px)' : 'none',
      fontFamily: 'var(--font-sans)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 158,
      background: thumbnail ? `center/cover no-repeat url(${thumbnail})` : thumbnailColor
    }
  }, category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      padding: '4px 10px',
      borderRadius: 99,
      background: categoryColor,
      color: 'var(--white)',
      fontSize: 12,
      fontWeight: 'var(--fw-bold)'
    }
  }, category), /*#__PURE__*/React.createElement("span", {
    className: `ms${saved ? ' ms--filled' : ''}`,
    onClick: e => {
      e.stopPropagation();
      setSaved(v => !v);
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.92)',
      color: saved ? 'var(--primary-main)' : 'var(--blue-gray-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 18,
      cursor: 'pointer'
    }
  }, "bookmark")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      padding: '2px 6px',
      borderRadius: 5,
      background: 'var(--common-8p)',
      color: 'var(--text-secondary)',
      fontSize: 11,
      fontWeight: 'var(--fw-bold)'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-primary)',
      lineHeight: 1.4,
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, title), instructor && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-tertiary)'
    }
  }, instructor), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 12,
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, rating != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: 15,
      color: 'var(--other-rating)'
    }
  }, "star"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-bold)'
    }
  }, rating), ratingCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-disabled)'
    }
  }, "(", ratingCount, ")")), level && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 15
    }
  }, "signal_cellular_alt"), level), duration && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 15
    }
  }, "schedule"), duration)), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-primary)'
    }
  }, price), originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-disabled)',
      textDecoration: 'line-through'
    }
  }, originalPrice))));
}
Object.assign(__ds_scope, { CourseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/products/CourseCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Card — surface container. Outlined (hairline) or elevated. */
function Card({
  children,
  variant = 'outlined',
  interactive = false,
  style = {},
  ...rest
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      background: 'var(--background-paper)',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: variant === 'outlined' ? 'inset 0 0 0 1px rgba(0,0,0,0.06)' : 'var(--shadow-card)',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--duration-medium) var(--ease-standard), transform var(--duration-medium) var(--ease-standard)',
      ...(interactive && hovered ? {
        boxShadow: 'var(--elevation-6)',
        transform: 'translateY(-2px)'
      } : {}),
      ...style
    }
  }, rest), children);
}
function CardMedia({
  src,
  height = 160,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: src ? `center/cover no-repeat url(${src})` : 'var(--blue-gray-800)',
      position: 'relative',
      ...style
    }
  }, children);
}
function CardHeader({
  avatar,
  title,
  subheader,
  action,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: 16,
      ...style
    }
  }, avatar, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-bold) 16px/1.4 var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, title), subheader && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--fw-medium) 13px/1.4 var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginTop: 2
    }
  }, subheader)), action);
}
function CardContent({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-secondary)',
      ...style
    }
  }, children);
}
function CardActions({
  children,
  align = 'left',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      padding: 12,
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, CardMedia, CardHeader, CardContent, CardActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Paper.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Paper — flat surface with configurable elevation. */
function Paper({
  children,
  elevation = 1,
  variant = 'elevation',
  radius = 'md',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--background-paper)',
      borderRadius: `var(--radius-${radius})`,
      boxShadow: variant === 'outlined' ? 'none' : `var(--elevation-${elevation})`,
      border: variant === 'outlined' ? '1px solid var(--divider)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Paper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Paper.jsx", error: String((e && e.message) || e) }); }

// ui_kits/academy/CatalogPage.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Elice Academy — course catalog (home) page
const {
  CourseCard,
  Chip,
  Tag
} = window.EliceDesignSystem_b21f2c;
const ACADEMY_COURSES = [{
  id: 1,
  category: '프로그래밍',
  categoryColor: 'var(--primary-main)',
  thumbnailColor: 'var(--blue-gray-800)',
  title: '모두를 위한 파이썬: 데이터 분석 입문',
  instructor: '김엘리스',
  rating: 4.9,
  ratingCount: 1280,
  level: '입문',
  duration: '8주',
  price: '₩99,000',
  originalPrice: '₩149,000',
  tags: ['Python', '데이터분석']
}, {
  id: 2,
  category: 'AI',
  categoryColor: 'var(--info-main)',
  thumbnailColor: 'var(--primary-dark)',
  title: '딥러닝 기초부터 실전 프로젝트까지',
  instructor: '이튜터',
  rating: 4.8,
  ratingCount: 642,
  level: '중급',
  duration: '12주',
  price: '₩129,000',
  tags: ['PyTorch', 'CNN']
}, {
  id: 3,
  category: '웹 개발',
  categoryColor: 'var(--success-main)',
  thumbnailColor: 'var(--green-800)',
  title: 'React로 시작하는 프론트엔드 개발',
  instructor: '박개발',
  rating: 4.7,
  ratingCount: 980,
  level: '입문',
  duration: '10주',
  price: '무료',
  tags: ['React', 'JavaScript']
}, {
  id: 4,
  category: '데이터',
  categoryColor: 'var(--warning-main)',
  thumbnailColor: 'var(--blue-gray-700)',
  title: 'SQL과 데이터베이스 완전 정복',
  instructor: '최데이터',
  rating: 4.9,
  ratingCount: 421,
  level: '입문',
  duration: '6주',
  price: '₩79,000',
  tags: ['SQL', 'DB']
}, {
  id: 5,
  category: '클라우드',
  categoryColor: 'var(--info-main)',
  thumbnailColor: 'var(--cyan-800)',
  title: 'AWS 클라우드 아키텍처 실무',
  instructor: '정클라우드',
  rating: 4.6,
  ratingCount: 310,
  level: '고급',
  duration: '8주',
  price: '₩159,000',
  tags: ['AWS', 'DevOps']
}, {
  id: 6,
  category: '프로그래밍',
  categoryColor: 'var(--primary-main)',
  thumbnailColor: 'var(--purple-800)',
  title: '알고리즘 코딩 테스트 마스터',
  instructor: '한알고',
  rating: 4.8,
  ratingCount: 1520,
  level: '중급',
  duration: '12주',
  price: '₩119,000',
  originalPrice: '₩159,000',
  tags: ['Algorithm', 'C++']
}];
function CatalogPage({
  onOpenCourse
}) {
  const cats = ['전체', '프로그래밍', 'AI', '웹 개발', '데이터', '클라우드', '커리어'];
  const [cat, setCat] = React.useState('전체');
  const list = cat === '전체' ? ACADEMY_COURSES : ACADEMY_COURSES.filter(c => c.category === cat);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(120deg, var(--elice-purple-900), var(--elice-purple-700))',
      color: '#fff',
      padding: '64px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "primary",
    style: {
      background: 'rgba(255,255,255,0.16)',
      color: '#fff'
    }
  }, "NEW \xB7 2026 \uBD04\uD559\uAE30"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 44px/1.2 var(--font-sans)',
      letterSpacing: '-1px',
      margin: '16px 0 12px',
      maxWidth: 620
    }
  }, "\uC2E4\uBB34\uB85C \uC774\uC5B4\uC9C0\uB294 \uD559\uC2B5,", /*#__PURE__*/React.createElement("br", null), "\uC5D8\uB9AC\uC2A4\uC5D0\uC11C \uC2DC\uC791\uD558\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 18px/1.6 var(--font-sans)',
      opacity: 0.9,
      maxWidth: 520,
      margin: 0
    }
  }, "AI \uAE30\uBC18 \uCF54\uB529 \uD559\uC2B5 \uD50C\uB7AB\uD3FC. 1,200\uAC1C \uC774\uC0C1\uC758 \uCF54\uC2A4\uC640 \uC2E4\uC804 \uD504\uB85C\uC81D\uD2B8\uB85C \uC131\uC7A5\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 32
    }
  }, [['1,280+', '온라인 코스'], ['320K+', '수강생'], ['98%', '수료 만족도']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 28px var(--font-sans)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      opacity: 0.85
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '40px 28px 80px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 26px var(--font-sans)',
      color: 'var(--text-primary)',
      margin: '0 0 20px'
    }
  }, "\uC778\uAE30 \uCF54\uC2A4"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 28
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    label: c,
    color: c === cat ? 'primary' : 'default',
    variant: c === cat ? 'filled' : 'outlined',
    onClick: () => setCat(c)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(252px, 1fr))',
      gap: 22
    }
  }, list.map(c => /*#__PURE__*/React.createElement(CourseCard, _extends({
    key: c.id
  }, c, {
    style: {
      width: '100%'
    },
    onClick: () => onOpenCourse(c)
  }))))));
}
window.CatalogPage = CatalogPage;
window.ACADEMY_COURSES = ACADEMY_COURSES;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/academy/CatalogPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/academy/CourseDetailPage.jsx
try { (() => {
// Elice Academy — course detail page
const {
  Button,
  Tag,
  Tabs,
  Accordion,
  Avatar,
  Breadcrumbs,
  Divider,
  Paper
} = window.EliceDesignSystem_b21f2c;
function CourseDetailPage({
  course,
  onBack,
  onEnroll
}) {
  const c = course || {};
  const [tab, setTab] = React.useState(0);
  const curriculum = [{
    t: '1주차 · 개발 환경 설정과 기초 문법',
    n: 6
  }, {
    t: '2주차 · 변수, 자료형, 연산자',
    n: 8
  }, {
    t: '3주차 · 조건문과 반복문',
    n: 7
  }, {
    t: '4주차 · 함수와 모듈',
    n: 9
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--blue-gray-900)',
      color: '#fff',
      padding: '28px 28px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumbs, {
    style: {
      marginBottom: 18
    },
    items: [{
      label: '홈',
      onClick: onBack
    }, {
      label: '코스',
      onClick: onBack
    }, {
      label: c.category || '프로그래밍'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: "primary"
  }, c.category || '프로그래밍'), (c.tags || []).map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    color: "info",
    variant: "outlined"
  }, t))), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 34px/1.3 var(--font-sans)',
      margin: '0 0 14px',
      maxWidth: 720
    }
  }, c.title || '코스 제목'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      font: '500 14px var(--font-sans)',
      opacity: 0.9
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: 18,
      color: 'var(--other-rating)'
    }
  }, "star"), /*#__PURE__*/React.createElement("strong", null, c.rating || 4.9), " (", c.ratingCount || 0, " \uB9AC\uBDF0)"), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.instructor || '엘리스 강사'), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, c.level || '입문', " \xB7 ", c.duration || '8주')))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1100,
      margin: '0 auto',
      padding: '32px 28px 80px',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ['커리큘럼', '소개', '강사', '리뷰'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, tab === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, curriculum.map((w, i) => /*#__PURE__*/React.createElement(Accordion, {
    key: i,
    summary: w.t,
    defaultExpanded: i === 0,
    icon: "play_lesson"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, Array.from({
    length: 3
  }).map((_, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 18,
      color: 'var(--text-tertiary)'
    }
  }, "play_circle"), "\uB808\uC2A8 ", j + 1, ". \uD575\uC2EC \uAC1C\uB150 \uD559\uC2B5 ", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 12,
      color: 'var(--text-disabled)'
    }
  }, "12:30"))))))), tab === 1 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 15px/1.7 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "\uC774 \uCF54\uC2A4\uB294 \uD504\uB85C\uADF8\uB798\uBC0D\uC774 \uCC98\uC74C\uC778 \uBD84\uB4E4\uB3C4 \uB530\uB77C\uC62C \uC218 \uC788\uB3C4\uB85D \uC124\uACC4\uB418\uC5C8\uC2B5\uB2C8\uB2E4. \uC2E4\uC2B5 \uC911\uC2EC\uC758 \uCEE4\uB9AC\uD058\uB7FC\uACFC AI \uCF54\uB4DC \uD53C\uB4DC\uBC31\uC73C\uB85C \uBE60\uB974\uAC8C \uC131\uC7A5\uD558\uC138\uC694."), tab === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: (c.instructor || 'EL')[0],
    size: 56,
    color: "var(--primary-main)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 16px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, c.instructor || '엘리스 강사'), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, "10\uB144\uCC28 \uC2DC\uB2C8\uC5B4 \uAC1C\uBC1C\uC790 \xB7 \uB204\uC801 \uC218\uAC15\uC0DD 12\uB9CC\uBA85"))), tab === 3 && /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 15px/1.7 var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, "\"\uC2E4\uBB34\uC5D0 \uBC14\uB85C \uC801\uC6A9\uD560 \uC218 \uC788\uC5B4 \uB9CC\uC871\uC2A4\uB7EC\uC6E0\uC5B4\uC694.\" \u2014 \uC218\uAC15\uC0DD \uB9AC\uBDF0 ", c.ratingCount || 0, "\uAC1C"))), /*#__PURE__*/React.createElement(Paper, {
    variant: "outlined",
    radius: "xl",
    style: {
      position: 'sticky',
      top: 88,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '800 28px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, c.price || '₩99,000'), c.originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 15px var(--font-sans)',
      color: 'var(--text-disabled)',
      textDecoration: 'line-through'
    }
  }, c.originalPrice)), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px var(--font-sans)',
      color: 'var(--error-main)',
      marginBottom: 18
    }
  }, "\uD83D\uDD25 \uC870\uAE30 \uB9C8\uAC10 \uC784\uBC15 \xB7 12\uBA85 \uC2E0\uCCAD \uC911"), /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "large",
    fullWidth: true,
    onClick: onEnroll
  }, "\uC218\uAC15 \uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "secondary",
    size: "large",
    fullWidth: true,
    style: {
      marginTop: 10
    },
    startIcon: "bookmark_border"
  }, "\uAD00\uC2EC \uCF54\uC2A4 \uB2F4\uAE30"), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: '20px 0'
    }
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, [['schedule', `${c.duration || '8주'} 과정`], ['signal_cellular_alt', `${c.level || '입문'} 난이도`], ['workspace_premium', '수료증 발급'], ['all_inclusive', '평생 수강']].map(([ic, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      font: '500 14px var(--font-sans)',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms",
    style: {
      fontSize: 20,
      color: 'var(--primary-main)'
    }
  }, ic), t))))));
}
window.CourseDetailPage = CourseDetailPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/academy/CourseDetailPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/academy/Dashboard.jsx
try { (() => {
// Elice Academy — learner dashboard
const {
  Card,
  CardContent,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  IconButton,
  Tag,
  Button,
  CircularProgress
} = window.EliceDesignSystem_b21f2c;
function Dashboard({
  user,
  onNav
}) {
  const inProgress = [{
    title: '모두를 위한 파이썬: 데이터 분석 입문',
    pct: 68,
    next: '4주차 · 함수와 모듈',
    color: 'var(--blue-gray-800)'
  }, {
    title: 'React로 시작하는 프론트엔드 개발',
    pct: 32,
    next: '2주차 · 컴포넌트와 props',
    color: 'var(--green-800)'
  }, {
    title: '알고리즘 코딩 테스트 마스터',
    pct: 15,
    next: '1주차 · 시간 복잡도',
    color: 'var(--purple-800)'
  }];
  const side = [{
    icon: 'space_dashboard',
    label: '대시보드',
    sel: true
  }, {
    icon: 'school',
    label: '내 코스'
  }, {
    icon: 'assignment',
    label: '과제'
  }, {
    icon: 'emoji_events',
    label: '학습 순위'
  }, {
    icon: 'workspace_premium',
    label: '수료증'
  }, {
    icon: 'settings',
    label: '설정'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      minHeight: 'calc(100vh - 64px)',
      background: 'var(--background-gray)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--background-paper)',
      borderRight: '1px solid var(--divider)',
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(List, null, side.map(s => /*#__PURE__*/React.createElement(ListItem, {
    key: s.label,
    icon: s.icon,
    primary: s.label,
    selected: s.sel,
    onClick: () => {}
  })))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: 32,
      maxWidth: 920
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: '800 26px var(--font-sans)',
      color: 'var(--text-primary)',
      margin: '0 0 4px'
    }
  }, "\uC548\uB155\uD558\uC138\uC694, ", user?.name || '학습자', "\uB2D8 \uD83D\uDC4B"), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 15px var(--font-sans)',
      color: 'var(--text-tertiary)',
      margin: '0 0 28px'
    }
  }, "\uC624\uB298\uB3C4 \uD559\uC2B5\uC744 \uC774\uC5B4\uAC00 \uBCFC\uAE4C\uC694?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginBottom: 28
    }
  }, [['수강 중', '3', 'menu_book', 'var(--primary-main)'], ['연속 학습', '12일', 'local_fire_department', 'var(--warning-main)'], ['획득 수료증', '5', 'workspace_premium', 'var(--success-main)']].map(([l, n, ic, col]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    variant: "outlined"
  }, /*#__PURE__*/React.createElement(CardContent, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      fontSize: 30,
      color: col
    }
  }, ic), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '800 24px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 13px var(--font-sans)',
      color: 'var(--text-tertiary)'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '800 18px var(--font-sans)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\uC774\uC5B4\uC11C \uD559\uC2B5\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "text",
    size: "small",
    endIcon: "chevron_right",
    onClick: () => onNav('catalog')
  }, "\uC804\uCCB4 \uCF54\uC2A4")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, inProgress.map((c, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "outlined",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-md)',
      background: c.color,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms ms--filled",
    style: {
      color: '#fff',
      fontSize: 26
    }
  }, "play_arrow")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '700 15px var(--font-sans)',
      color: 'var(--text-primary)',
      marginBottom: 4,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      font: '500 12px var(--font-sans)',
      color: 'var(--text-tertiary)',
      marginBottom: 8
    }
  }, "\uB2E4\uC74C: ", c.next), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(LinearProgress, {
    variant: "determinate",
    value: c.pct,
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 12px var(--font-sans)',
      color: 'var(--primary-main)',
      minWidth: 34
    }
  }, c.pct, "%"))), /*#__PURE__*/React.createElement(Button, {
    size: "small",
    color: "primary"
  }, "\uC774\uC5B4\uBCF4\uAE30")))))));
}
window.Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/academy/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/academy/Header.jsx
try { (() => {
// Elice Academy — global navigation bar (GNB)
const {
  EliceLogo,
  IconButton,
  Button,
  Avatar,
  Badge,
  Menu
} = window.EliceDesignSystem_b21f2c;
function AcademyHeader({
  user,
  onLogin,
  onLogout,
  onNav,
  current = 'catalog'
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const nav = [{
    key: 'catalog',
    label: '코스'
  }, {
    key: 'test',
    label: '테스트'
  }, {
    key: 'project',
    label: '프로젝트'
  }, {
    key: 'community',
    label: '커뮤니티'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 64,
      background: 'var(--background-paper)',
      borderBottom: '1px solid var(--divider)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 28px',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => onNav('catalog'),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(EliceLogo, {
    service: "academy",
    height: 26
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, nav.map(n => {
    const active = current === n.key;
    return /*#__PURE__*/React.createElement("button", {
      key: n.key,
      onClick: () => onNav(n.key),
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: '8px 14px',
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        fontWeight: active ? 'var(--fw-bold)' : 'var(--fw-medium)',
        color: active ? 'var(--text-primary)' : 'var(--text-tertiary)'
      }
    }, n.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "search"
  }), user ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Badge, {
    variant: "dot",
    color: "error"
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "notifications"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "outlined",
    color: "secondary",
    size: "small",
    onClick: () => onNav('dashboard')
  }, "\uB0B4 \uD559\uC2B5"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenuOpen(v => !v),
    style: {
      cursor: 'pointer',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    initials: user.initials,
    size: 36,
    color: "var(--primary-main)"
  })), /*#__PURE__*/React.createElement(Menu, {
    open: menuOpen,
    onClose: () => setMenuOpen(false),
    anchorOrigin: "bottom-right",
    width: 200,
    items: [{
      label: user.name,
      icon: 'account_circle'
    }, {
      label: '내 대시보드',
      icon: 'space_dashboard',
      onClick: () => onNav('dashboard')
    }, {
      label: '마이페이지',
      icon: 'person'
    }, {
      divider: true
    }, {
      label: '로그아웃',
      icon: 'logout',
      onClick: onLogout,
      danger: true
    }]
  }))) : /*#__PURE__*/React.createElement(Button, {
    color: "primary",
    size: "medium",
    onClick: onLogin
  }, "\uB85C\uADF8\uC778 / \uD68C\uC6D0\uAC00\uC785"));
}
window.AcademyHeader = AcademyHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/academy/Header.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EliceLogo = __ds_scope.EliceLogo;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.LinearProgress = __ds_scope.LinearProgress;

__ds_ns.CircularProgress = __ds_scope.CircularProgress;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Snackbar = __ds_scope.Snackbar;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Menu = __ds_scope.Menu;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.CourseCard = __ds_scope.CourseCard;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardMedia = __ds_scope.CardMedia;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardActions = __ds_scope.CardActions;

__ds_ns.Paper = __ds_scope.Paper;

})();
