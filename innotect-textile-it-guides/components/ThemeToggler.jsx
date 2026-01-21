import React, { useContext } from 'react';
import ThemeContext from '../context/themeContext';

const ThemeToggler = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <button onClick={toggleTheme} className='-mt-0.5'>
                {theme === 'light' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-6 w-6 fill-current text-black dark:text-white hover:text-blue"
                        alt="Theme Toggler"
                    >
                        <title />
                        <circle cx="12" cy="12" r="5" />
                        <path d="M21,13H20a1,1,0,0,1,0-2h1a1,1,0,0,1,0,2Z" />
                        <path d="M4,13H3a1,1,0,0,1,0-2H4a1,1,0,0,1,0,2Z" />
                        <path d="M17.66,7.34A1,1,0,0,1,17,7.05a1,1,0,0,1,0-1.41l.71-.71a1,1,0,1,1,1.41,1.41l-.71.71A1,1,0,0,1,17.66,7.34Z" />
                        <path d="M5.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.41L5.64,17a1,1,0,0,1,1.41,1.41l-.71.71A1,1,0,0,1,5.64,19.36Z" />
                        <path d="M12,5a1,1,0,0,1-1-1V3a1,1,0,0,1,2,0V4A1,1,0,0,1,12,5Z" />
                        <path d="M12,22a1,1,0,0,1-1-1V20a1,1,0,0,1,2,0v1A1,1,0,0,1,12,22Z" />
                        <path d="M6.34,7.34a1,1,0,0,1-.7-.29l-.71-.71A1,1,0,0,1,6.34,4.93l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,6.34,7.34Z" />
                        <path d="M18.36,19.36a1,1,0,0,1-.7-.29L17,18.36A1,1,0,0,1,18.36,17l.71.71a1,1,0,0,1,0,1.41A1,1,0,0,1,18.36,19.36Z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="h-6 w-6 fill-current dark:text-white dark:hover:text-light-lime"
                        alt="Theme Toggler"
                    >
                        <g>
                            <g>
                                <path d="M343.1,315c-1.8,0.1-3.5,0.1-5.3,0.1c-29.1,0-56.5-11.3-77.1-31.9c-20.6-20.6-31.9-48-31.9-77.1    c0-16.6,3.7-32.6,10.6-47.1c3.1-6.4,6.8-12.5,11.1-18.2c-7.6,0.8-14.9,2.4-22,4.6c-46.8,14.8-80.7,58.5-80.7,110.2    c0,63.8,51.7,115.5,115.5,115.5c35.3,0,66.8-15.8,88-40.7c4.8-5.7,9.2-11.9,12.8-18.5C357.3,313.6,350.3,314.7,343.1,315z" />
                            </g>
                        </g>
                    </svg>
                )}
            </button>
        </>
    );
};

export default ThemeToggler;