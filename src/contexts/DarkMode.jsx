import { createContext, useContext, useEffect, useState } from 'react';

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [mode, setMode] = useState(readModeFromLocalstorage);
  const toggleMode = () => setMode(prev => !prev);

  useEffect(() => {
    localStorage.setItem('theme', mode ? 'dark' : 'light');
    if (mode) {
      document.body.classList.add('theme-dark');
    } else {
      document.body.classList.remove('theme-dark');
    }
  }, [mode]);

  return (
    <DarkModeContext.Provider value={{ mode, toggleMode }}>{children}</DarkModeContext.Provider>
  );
}

export const useDarkMode = () => useContext(DarkModeContext);

const readModeFromLocalstorage = () => {
  const theme = localStorage.getItem('theme');
  return theme === 'dark' ? true : false;
};
