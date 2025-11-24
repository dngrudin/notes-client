import React, { useContext, useState, useMemo, useLayoutEffect, useCallback } from 'react';

export type ThemeMode = 'auto_theme' | 'light_theme' | 'dark_theme';

interface ThemeModeContextProps {
    isDarkMode: boolean;
    themeMode: ThemeMode;
    setThemeMode: (value: string | number) => void;
}

export const ThemeModeContext = React.createContext<ThemeModeContextProps>({
    isDarkMode: false,
    themeMode: 'auto_theme',
    setThemeMode: () => { },
});

export const useThemeMode = () => {
    return useContext(ThemeModeContext);
};

export const ThemeModeProvider = ({ children }: React.PropsWithChildren<{}>) => {
    const matchDark = window.matchMedia('(prefers-color-scheme: dark)');
    const [themeMode, setThemeModeState] =
        useState<ThemeMode>('auto_theme');

    useLayoutEffect(() => {
        const mode = localStorage.getItem('mode');
        setThemeModeState((mode as ThemeMode) ?? 'auto_theme');
    }, [setThemeModeState]);

    const isDarkMode = useMemo(() => {
        if (themeMode === 'auto_theme') {
            return matchDark.matches;
        }
        return themeMode === 'dark_theme';
    }, [themeMode]);

    const setThemeMode = useCallback(
        (value: string | number) => {
            setThemeModeState(value as ThemeMode);
            localStorage.setItem('mode', value as string);
        },
        [setThemeModeState]
    );

    const contextValue = useMemo(
        () => ({
            isDarkMode,
            themeMode,
            setThemeMode,
        }),
        [isDarkMode, themeMode, setThemeMode]
    );

    return (
        <ThemeModeContext.Provider value={contextValue}>
            {children}
        </ThemeModeContext.Provider>
    );
};
