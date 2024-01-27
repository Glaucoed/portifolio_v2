'use client'
import { useEffect, useState } from 'react';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";



const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', String(!darkMode));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed bottom-2 right-2 z-40">
      <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="darkModeToggle"
            className="sr-only"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
          <div className="block bg-gray-200 dark:bg-escuro w-8 h-8 rounded-full"></div>
         {
         darkMode 
         ? <FaSun className='absolute left-1 top-1 dark:text-dourado w-6 h-6 rounded-full transition' />
         : <FaMoon className='absolute left-1 top-1 text-escuro w-6 h-6 rounded-full transition'/>
          }
        </div>
         
      </label>
    </div>
  );
};

export default DarkModeToggle;