const Colors = {
    // Primary colors
    primary: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        200: '#bae6fd',
        300: '#7dd3fc',
        400: '#38bdf8',
        500: '#0ea5e9',
        600: '#0284c7',
        700: '#0369a1',
        800: '#075985',
        900: '#0c4a6e',
    },

    // Neutral colors
    gray: {
        0: '#ffffff',
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
    },

    // Semantic colors
    success: {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efac',
        400: '#4ade80',
        500: '#22c55e',
        600: '#16a34a',
        700: '#15803d',
        800: '#166534',
        900: '#14532d',
    },

    warning: {
        50: '#fffbeb',
        100: '#fef3c7',
        200: '#fde68a',
        300: '#fcd34d',
        400: '#fbbf24',
        500: '#f59e0b',
        600: '#d97706',
        700: '#b45309',
        800: '#92400e',
        900: '#78350f',
    },

    error: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        300: '#fca5a5',
        400: '#f87171',
        500: '#ef4444',
        600: '#dc2626',
        700: '#b91c1c',
        800: '#991b1b',
        900: '#7f1d1d',
    },
};

export const theme = {
    colors: {
        // Background colors
        background: {
            primary: Colors.gray[0],
            secondary: Colors.gray[100],
            tertiary: Colors.gray[300],
            hover: Colors.gray[400],
            active: Colors.gray[500],
        },

        // Text colors
        text: {
            primary: Colors.gray[900],
            secondary: Colors.gray[700],
            muted: Colors.gray[500],
            inverse: Colors.gray[50],
        },

        // Border
        border: Colors.gray[300],

        // Accent colors
        accent: {
            primary: Colors.primary[600],
            hover: Colors.primary[700],
            active: Colors.primary[800],
            light: Colors.primary[100],
        },

        // Status colors
        status: {
            success: Colors.success[500],
            successSoft: Colors.success[50],
            warning: Colors.warning[500],
            warningSoft: Colors.warning[50],
            error: Colors.error[500],
            errorSoft: Colors.error[50],
        },

        // Interactive states
        state: {
            hover: Colors.gray[100],
            pressed: Colors.gray[200],
            focus: Colors.primary[100],
            disabled: Colors.gray[300],
        }
    }
};

export const darkTheme = {
    colors: {
        // Background colors
        background: {
            primary: Colors.gray[900],
            secondary: Colors.gray[800],
            tertiary: Colors.gray[700],
            hover: Colors.gray[600],
            active: Colors.gray[500],
        },

        // Text colors
        text: {
            primary: Colors.gray[50],
            secondary: Colors.gray[200],
            muted: Colors.gray[400],
            inverse: Colors.gray[900],
        },

        // Border
        border: Colors.gray[500],

        // Accent colors
        accent: {
            primary: Colors.primary[400],
            hover: Colors.primary[300],
            active: Colors.primary[200],
            light: Colors.primary[900],
        },

        // Status colors
        status: {
            success: Colors.success[400],
            successSoft: Colors.success[900],
            warning: Colors.warning[400],
            warningSoft: Colors.warning[900],
            error: Colors.error[400],
            errorSoft: Colors.error[900],
        },

        // Interactive states
        state: {
            hover: Colors.gray[800],
            pressed: Colors.gray[700],
            focus: Colors.primary[900],
            disabled: Colors.gray[600],
        }
    }
};