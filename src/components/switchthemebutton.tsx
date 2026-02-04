import { useState, useEffect } from "react";

function SwitchThemeButton() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("data-theme", newTheme);
  };

  return (
    <div
      className={`switch-theme-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <button
        className={`switch-theme-button ${theme === "dark" ? "dark-mode" : "light-mode"}`}
        onClick={toggleTheme}
      >
        <img
          className="theme-icon-holder"
          src={theme === "dark" ? "./sun.png" : "./moon.png"}
          alt=""
        />
        {/* <span className="theme-icon-holder"></span> */}
      </button>
    </div>
  );
}
export default SwitchThemeButton;
