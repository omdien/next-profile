"use client";
import { useTheme } from 'next-themes';
import React, {useState, useEffect} from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

const ThemeToggler = () => {
    const [mounted, setMounted] = useState(false);

    const { theme, setTheme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return <button onClick={()=>setTheme(currentTheme === "dark"?"light":"dark")} className='p-2 transition'>
        {currentTheme === 'dark' ? (
            <BiSun className='text-gray-700 w-8 h-8 cursor-pointer' onClick={() => setTheme('light')} />
        ) : (
            <BiMoon className='text-gray-700     w-8 h-8 cursor-pointer' onClick={() => setTheme('dark')} />
        )}
        <span className='sr-only'>Toggle theme</span>
    </button>
}

export default ThemeToggler;
