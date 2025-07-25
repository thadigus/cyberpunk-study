import { useEffect } from 'react';
import { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

function ToggleTheme() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        document.documentElement.classList.toggle('dark', theme === 'dark');
    },[theme])

    const toggleTheme = ()=>{
        setTheme(theme === 'light' ? 'dark':'light');
    }
  return (
    <button onClick={toggleTheme} className=''> {theme === 'light' ? <FontAwesomeIcon icon={faMoon} className="text-text-light p-4 lg:px-6" /> : <FontAwesomeIcon icon={faSun} className="text-yellow-400 p-4 lg:px-6" />}</button>
  )
}

export default ToggleTheme;