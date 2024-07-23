import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "'light",
  darkTheme: () => {},
  lightTheme: () => {},
});
// also provider as the same file 
export const ThemeProvider = ThemeContext.Provider;

// this is my custome hook--->
export default function useTheme (){
    return useContext(ThemeContext);
}