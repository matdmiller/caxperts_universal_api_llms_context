"use strict";
/* eslint-disable  @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
/**
 * Defines the Material UI Theme
 */
class Theme {
    /**
     * Provides \@mui/material/styles/ThemeOptions for use in AppControls. To not add Material UI as a requirement any type is returned here
     * It is safe to cast this to ThemeOptions in your code or directly provide it to createTheme function
    */
    static async getTheme() {
        return {
            palette: {
                mode: 'dark',
                type: 'dark',
                primary: {
                    main: '#1976d2',
                },
                secondary: {
                    main: '#f50127',
                },
                background: {
                    default: '#4d4d4d',
                    paper: '#1c1c1c',
                },
            },
            shape: {
                borderRadius: 0,
            },
            typography: {
                fontFamily: 'Noto Sans,Roboto',
            },
        };
    }
}
exports.Theme = Theme;
