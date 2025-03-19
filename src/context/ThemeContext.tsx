import { createContext, useContext, ReactNode } from 'react';

export const themeColors = {
  glaucous: '#7882B6',
  lavenderWeb: '#DBD9EC',
  persianBlue: '#1934B6',
  internationalKleinBlue: '#192C99',
  chiliRed: '#EC3A1C',
  // Derived colors
  chiliRedHover: '#ff4d2e',
  glaucousTransparent: 'rgba(120, 130, 182, 0.3)',
  lavenderWebTransparent: 'rgba(219, 217, 236, 0.2)',
} as const;

export const gradients = {
  primary: 'bg-gradient-to-r from-[#192C99] via-[#1934B6] to-[#7882B6]',
  secondary: 'bg-gradient-to-br from-[#192C99] via-[#1934B6] to-[#7882B6]',
} as const;

type ThemeContextType = {
  colors: typeof themeColors;
  gradients: typeof gradients;
};

const ThemeContext = createContext<ThemeContextType>({
  colors: themeColors,
  gradients: gradients,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeContext.Provider 
      value={{
        colors: themeColors,
        gradients: gradients,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};