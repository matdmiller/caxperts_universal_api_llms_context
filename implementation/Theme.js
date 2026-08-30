"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const Application_1 = require("./Application");
/**
 * The original hardcoded theme, kept as a fallback for when the UI variables
 * cannot be read (e.g. older viewer, API not connected, empty response).
 */
const FALLBACK_THEME = {
    palette: {
        mode: "dark",
        type: "dark",
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#f50127",
        },
        background: {
            default: "#4d4d4d",
            paper: "#1c1c1c",
        },
    },
    shape: {
        borderRadius: 0,
    },
    typography: {
        fontFamily: "Noto Sans,Roboto",
    },
};
/** Split a #RRGGBB(AA) / #RGB(A) token into numeric rgba components. */
function parseColor(value) {
    let h = value.trim().replace(/^#/, "");
    // Expand shorthand (#rgb / #rgba) to full length.
    if (h.length === 3 || h.length === 4) {
        h = h
            .split("")
            .map((c) => c + c)
            .join("");
    }
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    const a = h.length >= 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1;
    return { r, g, b, a };
}
/**
 * UPV colours are encoded as #RRGGBBAA (alpha last). Convert to a CSS colour
 * MUI's colour utilities accept: opaque -> #RRGGBB, translucent -> rgba().
 */
function normalizeColor(value) {
    if (!value)
        return undefined;
    const v = value.trim();
    if (!v.startsWith("#"))
        return v; // already rgb()/hsl()/named
    const { r, g, b, a } = parseColor(v);
    if ([r, g, b].some((n) => Number.isNaN(n)))
        return undefined;
    if (a >= 1) {
        const hex = (n) => n.toString(16).padStart(2, "0");
        return `#${hex(r)}${hex(g)}${hex(b)}`;
    }
    return `rgba(${r}, ${g}, ${b}, ${Math.round(a * 1000) / 1000})`;
}
/** WCAG relative luminance (0..1) of a colour, ignoring alpha. */
function luminance(value) {
    const { r, g, b } = parseColor(value);
    const channel = (c) => {
        const x = c / 255;
        return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}
/** First present token in `keys`, normalized to a CSS colour. */
function pick(vars, ...keys) {
    for (const k of keys) {
        if (vars[k])
            return normalizeColor(vars[k]);
    }
    return undefined;
}
/** Parse an "8px" style variable into a pixel number. */
function pxToNumber(value) {
    if (!value)
        return undefined;
    const n = parseFloat(value);
    return Number.isNaN(n) ? undefined : n;
}
/**
 * Build a MUI-compatible theme object from UPV's UiVariables map.
 *
 * UiVariables is a superset of UiColors (all colour tokens) plus non-colour
 * variables such as corner radius, so a single map supplies palette + shape.
 * UPV token names follow WinUI/Fluent conventions:
 *   - `*-fill-*`    : surface / control fills
 *   - `*-stroke-*`  : borders
 *   - `text-fill-*` : text colours
 *   - `system-*`    : OS / brand accents
 */
function buildThemeFromVariables(vars) {
    var _a, _b;
    // Window background drives light/dark detection.
    const background = (_a = pick(vars, "solid-background-fill-color-base-brush", "system-color-button-face-color")) !== null && _a !== void 0 ? _a : "#121212";
    const mode = luminance(background) > 0.5 ? "light" : "dark";
    // Surfaces (cards, popups, menus) sit slightly above the window background.
    const paper = (_b = pick(vars, "card-background-fill-color-default-brush", "solid-background-fill-color-secondary-brush", "pop-up-background")) !== null && _b !== void 0 ? _b : background;
    // The OS/brand accent is the most consistent "primary" across all themes.
    const primary = pick(vars, "system-accent-color", "accent-fill-color-default-brush");
    const secondary = pick(vars, "accent-fill-color-secondary-brush", "system-color-highlight-color");
    const error = pick(vars, "system-fill-color-critical-brush", "system-error-text-color");
    const warning = pick(vars, "system-fill-color-caution-brush");
    const info = pick(vars, "system-fill-color-attention-brush");
    const success = pick(vars, "system-fill-color-success-brush");
    const textPrimary = pick(vars, "text-fill-color-primary-brush", "system-color-button-text-color");
    const textSecondary = pick(vars, "text-fill-color-secondary-brush", "text-fill-color-tertiary-brush");
    const textDisabled = pick(vars, "text-fill-color-disabled-brush", "system-color-gray-text-color");
    const divider = pick(vars, "divider-stroke-color-default-brush", "control-strong-stroke-color-default-brush");
    const radius = pxToNumber(vars["control-corner-radius"]);
    const palette = {
        mode,
        type: mode, // kept for backward-compat with the previous theme shape
        background: { default: background, paper },
        text: {},
    };
    if (primary)
        palette.primary = { main: primary };
    if (secondary)
        palette.secondary = { main: secondary };
    if (error)
        palette.error = { main: error };
    if (warning)
        palette.warning = { main: warning };
    if (info)
        palette.info = { main: info };
    if (success)
        palette.success = { main: success };
    if (textPrimary)
        palette.text.primary = textPrimary;
    if (textSecondary)
        palette.text.secondary = textSecondary;
    if (textDisabled)
        palette.text.disabled = textDisabled;
    if (divider)
        palette.divider = divider;
    return {
        palette,
        shape: {
            borderRadius: radius != null ? radius : FALLBACK_THEME.shape.borderRadius,
        },
        typography: {
            fontFamily: FALLBACK_THEME.typography.fontFamily,
        },
    };
}
/** How long getTheme waits for the real theme before it returns the fallback. */
const FIRST_THEME_TIMEOUT_MS = 1000;
/**
 * Reads the UI variables and builds the theme. Returns null when no theme can be
 * read, so the caller can use the fallback. Never rejects.
 */
async function readTheme() {
    const application = Application_1.Application.getInstance();
    // No connection to UPV (e.g. running standalone) — use the fallback directly
    // instead of attempting a command that would fail or hang.
    if (!application.available())
        return null;
    try {
        const uiVariables = await application.Settings.UiVariables.get();
        if (uiVariables && Object.keys(uiVariables).length > 0) {
            return buildThemeFromVariables(uiVariables);
        }
    }
    catch (_a) {
        // Reading UI variables failed — the caller uses the fallback theme.
    }
    return null;
}
/**
 * Defines the Material UI Theme
 */
class Theme {
    /**
     * Provides \@mui/material/styles/ThemeOptions for use in AppControls. To not add Material UI as a requirement any type is returned here
     * It is safe to cast this to ThemeOptions in your code or directly provide it to createTheme function
     *
     * @param onThemeAvailable called to receive updates in future or if received late from viewer
    */
    static async getTheme(onThemeAvailable) {
        const themePromise = readTheme();
        const timeout = new Promise((resolve) => {
            setTimeout(() => resolve(undefined), FIRST_THEME_TIMEOUT_MS);
        });
        const theme = await Promise.race([themePromise, timeout]);
        if (theme)
            return theme;
        // Timed out or no theme available — use the default now and hand over the real theme later.
        if (onThemeAvailable) {
            themePromise.then((late) => {
                if (late)
                    onThemeAvailable(late);
            });
        }
        return FALLBACK_THEME;
    }
}
exports.Theme = Theme;
