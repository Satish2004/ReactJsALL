import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";

const App = () => {
  let [themeMode, setThemeMode] = useState("light");

  let lightTheme = () => {
    setThemeMode("light");
  };

  let darkTheme = () => {
    setThemeMode("dark");
  };
  // actual change in theme using effect render our UI
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme button */}
            <ThemeBtn></ThemeBtn>
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Cards */}
            <Card></Card>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
