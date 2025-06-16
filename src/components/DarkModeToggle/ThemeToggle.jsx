import React, { use } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../DarkModeContext/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btn btn-circle btn-outline">
      {theme === "light" ? <FaMoon /> : <FaSun className="text-yellow-400" />}
    </button>
  );
};

export default ThemeToggle;
