import { ThemeMode, useThemeMode } from 'components/contexts/ThemeModeContext';
import React, { useState, useRef, useEffect } from 'react';
import { ArrowIcon, DropdownButton, DropdownContainer, DropdownItem, DropdownList } from './ThemeSelector.styled';

const options = [
  {
    label: 'Auto theme',
    mode: 'auto_theme' as ThemeMode,
  },
  {
    label: 'Light theme',
    mode: 'light_theme' as ThemeMode,
  },
  {
    label: 'Dark theme',
    mode: 'dark_theme' as ThemeMode,
  },
];

const ThemeSelector: React.FC = () => {
  const { themeMode, setThemeMode } = useThemeMode();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const el = dropdownRef?.current;
      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    }
  }, []);

  const handleThemeSelect = (mode: ThemeMode) => {
    setThemeMode(mode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {options.find((option) => option.mode === themeMode)?.label || 'Not Selected'}
        <ArrowIcon $opened={isOpen}>▼</ArrowIcon>
      </DropdownButton>

      {isOpen && (
        <DropdownList>
          {options.map(({ label, mode }) => (
            <DropdownItem
              key={mode}
              active={mode === themeMode}
              onClick={() => handleThemeSelect(mode)}
            >
              {label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
};

export default ThemeSelector;