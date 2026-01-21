import Image from 'next/image';
import styles from '../css/Header.module.css';
import React, { useRef, useState, useContext, useEffect } from 'react';
import ThemeContext from '../context/themeContext'
import ThemeToggler from './ThemeToggler';

const updateFavicon = (theme) => {
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
        link.href = theme === 'dark' ? '/assets/favicon-dark.png' : '/assets/favicon-light.png';
    }
};

const Header = ({ scrollToSection }) => {
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [blurActive, setBlurActive] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        updateFavicon(theme);
    }, [theme]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsOpen(false);
                setBlurActive(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest(`.${styles.sidebar}`)) {
                setIsOpen(false);
                setBlurActive(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setBlurActive(true);
            }, 200); 
            return () => clearTimeout(timer);
        } else {
            setBlurActive(false);
        }
    }, [isOpen]);

    useEffect(() => {
        const threshold = 70;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < threshold) {
                setIsScrollingUp(true); 
            } else if (currentScrollY < lastScrollY.current) {
                setIsScrollingUp(true); 
            } else {
                setIsScrollingUp(false); 
            }
            lastScrollY.current = currentScrollY;
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMouseEnter = () => {
            setIsScrollingUp(true); 
        };
    
        const topHover = document.querySelector(`.${styles.topHover}`);
        if (topHover) {
            topHover.addEventListener('mouseenter', handleMouseEnter);
        }
        return () => {
            if (topHover) {
                topHover.removeEventListener('mouseenter', handleMouseEnter);
            }
        };
    }, []);
    
    const handleSidebarLinkClick = (section) => {
        scrollToSection(section);
        setIsOpen(false);
        setBlurActive(false);
    };

    return (
        <>
            <div className={styles.topHover}></div>
            <header className={`p-4 md:p-8 md:pb-4 flex justify-between items-center ${isScrollingUp ? `bg-white`: ''} ${isScrollingUp ? `dark:bg-navy` : ''} ${styles.header} ${!isScrollingUp && !isOpen ? styles.hidden : ''}`}>
                <div className="flex items-center gap-3">
                {/* Icon 1 -> main site */}
                    <a href="https://xxx.com" aria-label="www.yienian.com">
                        <img
                        src={theme === "dark" ? "/assets/icon-dark.png" : "/assets/icon-light.png"}
                        alt="Yie Nian"
                        className={styles.iconleft}
                        />
                    </a>

                    {/* Vertical divider */}
                    <span className="h-10 border-l border-navy dark:border-white"/>

                    {/* Icon 2 -> another page */}
                    <a href="https://innotechtextile.com" aria-label="www.innotechtextile.com">
                        <img
                        src={theme === "dark" ? "/assets/innotech-textile-dark.png" : "/assets/innotech-textile.png"}
                        alt="Innotech Textile"
                        className={styles.iconright}
                        />
                    </a>
                </div>
                <nav className='mt-4 md:mt-0'>
                    <ul className={`hidden md:flex space-x-4`}>
                        {/* <li className="text-sm text-blue dark:text-light-lime font-mono">01.
                            <a onClick={ ()=> scrollToSection('about')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">About</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">02.
                            <a onClick={ ()=> scrollToSection('experience')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Experience</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">03.
                            <a onClick={ ()=> scrollToSection('skill')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Skills</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">03.
                            <a onClick={ ()=> scrollToSection('project')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Projects</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">04.
                            <a onClick={ ()=> scrollToSection('contact')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Contact</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">05.
                            <a onClick={ ()=> window.open('/assets/Yie Nian Chu.pdf', '_blank')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Résumé</a>
                        </li> */}
                        <li>
                            <ThemeToggler />
                        </li>
                    </ul>
                </nav>
                
                <button
                    className={`md:hidden ${styles.hamburger} ${!isScrollingUp && !isOpen ? styles.hidden : ""}`}
                    onClick={toggleMenu}
                    style={{ marginLeft: "auto", marginRight: "10px" }}
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${isOpen ? styles.opened : ""} h-10 w-10`}
                        viewBox="0 0 100 100"
                    >
                        <path
                        className={`${styles.line} ${theme === "dark" ? styles.darkLine : ""} ${styles.line1}`}
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                        />
                        <path
                        className={`${styles.line} ${theme === "dark" ? styles.darkLine : ""} ${styles.line2}`}
                        d="M 20,50 H 80"
                        />
                        <path
                        className={`${styles.line} ${theme === "dark" ? styles.darkLine : ""} ${styles.line3}`}
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                        />
                    </svg>
                </button>

                <div className={`md:hidden ${theme === 'dark' ? styles.dark : ''} ${styles.sidebar} ${isOpen ? styles.opened : ''}`}>
                    <div className={`${styles.theme}`}>
                        <ThemeToggler />
                    </div>
                    <ul>
                        {/* <li className="text-sm text-blue dark:text-light-lime font-mono">01.
                            <a onClick={ ()=> handleSidebarLinkClick('about')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">About</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">02.
                            <a onClick={ ()=> handleSidebarLinkClick('experience')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Experience</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">03.
                            <a onClick={ ()=> handleSidebarLinkClick('skill')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Skills</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">03.
                            <a href="#" className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Projects</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">04.
                            <a onClick={ ()=> handleSidebarLinkClick('contact')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Contact</a>
                        </li>
                        <li className="text-sm text-blue dark:text-light-lime font-mono">05.
                            <a onClick={ ()=> window.open('/assets/Yie Nian Chu.pdf', '_blank')} className="text-black dark:text-white dark:hover:text-light-lime hover:text-blue font-mono">Résumé</a>
                        </li> */}
                    </ul>
                </div>
                
                {isOpen && (
                    <div className={`w-screen h-screen ${styles.blur}  ${blurActive ? styles.active : ''}`} />
                )}

            </header>
        </>
    );
};

export default Header;