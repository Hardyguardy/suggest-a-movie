import React from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="mb-[60px]">
      <button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-600 rounded"
      >
        {" "}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
