"use client"

import { useEffect, useState } from "react";


export function useThemeSwitch(){
    const preferDarkQuery = "(prefers-color-schema:dark)";
    const storagekey = "theme"

    const toggleTheme = (theme) => {
if (theme === 'dark') {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
window.localStorage.setItem(storagekey, theme)
    }

    const getUserPreference = () => {
        const userPref = window.localStorage.getItem(storagekey);
        if(userPref){
            return userPref;
        }
        return window.matchMedia(preferDarkQuery).matches ? "dark" : "light"
    }

    const [mode, setMode] = useState("dark");
    useEffect(() => {
      const mediaQuery = window.matchMedia(preferDarkQuery);

      const handleChange = () => {
        const newMode = getUserPreference();
        setMode(newMode);
        toggleTheme(newMode);
      }

      handleChange();

      mediaQuery.addEventListener("change", handleChange);
      return () => {
      mediaQuery.addEventListener("change", handleChange);

      }
    }, []);

    useEffect(() => {
      toggleTheme(mode)
    }, [mode])
    

    return [mode, setMode]
    
}