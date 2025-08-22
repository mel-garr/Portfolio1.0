import { useState, useEffect } from 'react';
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils"

const ThemeToggle = () => {
    const [isDarkMode, SetIsDarkMode] = useState(false);
    
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark"){
            SetIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme", "light");
            SetIsDarkMode(false);
        }
    }, []);


    const toggleTheme = () =>{
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            SetIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            SetIsDarkMode(true);
        }
    };


  return (
    <button onClick={toggleTheme} 
     className=
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outlin-hidden">
        { 
        isDarkMode ? 
        (<Sun className='h-6 w-6 text-yellow-300'/>)
         :
        (<Moon className='h-6 w-6 text-blue-900'/>)
         }
    </button>
  )
}

export default ThemeToggle