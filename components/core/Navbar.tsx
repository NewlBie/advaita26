'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from '@/styles/Navbar.module.css';
import EasterEgg from './EasterEgg';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const [showEasterEgg, setShowEasterEgg] = useState(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [isLongPress, setIsLongPress] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id: string, isExternal: boolean = false) => {
        setMenuOpen(false);

        if (isExternal) {
            router.push(`/${id}`);
            return;
        }

        if (id === 'merch') {
            window.open('https://docs.google.com/forms/d/e/1FAIpQLSdLOLY4iigPmj6h6XjoPWZPJX4kaaJRbVy6mJ4PVjqDd6giuA/viewform?usp=publish-editor', '_blank');
            return;
        }

        if (id === 'passes') {
            window.open('https://konfhub.com/advaita2026', '_blank');
            return;
        }

        if (id === 'register') {
            window.open('https://unstop.com/college-fests/advaita-2026-international-institute-of-information-technology-iiit-bhubaneswar-438972', '_blank');
            return;
        }

        // If we are already on the home page, scroll to section
        if (pathname === '/') {
            if (id === 'top') {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }
            const el = document.getElementById(id);
            if (el) {
                const offset = 100;
                const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        } else {
            // If we're on /events and click a home link, go back home first
            // We adding ?skip=true to bypass the intro sequence
            router.push(`/?skip=true#${id}`);
        }
    };

    const startLongPress = () => {
        setIsLongPress(false);
        const timer = setTimeout(() => {
            setShowEasterEgg(true);
            setMenuOpen(false);
            setIsLongPress(true);
        }, 3000);
        setTimerId(timer);
    };

    const endLongPress = () => {
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };

    return (
        <>
            <nav
                className={styles.navbar}
                style={{
                    marginTop: scrolled ? '-5px' : '0px',
                    backgroundColor: menuOpen ? 'transparent' : undefined,
                    borderBottom: scrolled ? '2px solid #e31212' : 'none' // Added neon red glow on scroll
                }}
            >
                <div className={styles.container}>
                    <div className={styles.logo} onClick={() => handleNavClick('top')}>
                        ADVAITA
                    </div>

                    {/* DESKTOP LINKS */}
                    <div className={styles.links}>
                        <div className={styles.linkWrapper}>
                            <div className={styles.bulb} />
                            <div className={styles.lightCone} />
                            {/* LINKED TO EVENTS PAGE */}
                            <button onClick={() => handleNavClick('events', true)} className={styles.link}>Events</button>
                        </div>
                        <div className={styles.linkWrapper}>
                            <div className={styles.bulb} />
                            <div className={styles.lightCone} />
                            <button onClick={() => handleNavClick('merch')} className={styles.link}>Merch</button>
                        </div>
                        <div className={styles.linkWrapper}>
                            <div className={styles.bulb} />
                            <div className={styles.lightCone} />
                            <button onClick={() => handleNavClick('passes')} className={styles.link}>Passes</button>
                        </div>
                        <div className={styles.linkWrapper}>
                            <div className={styles.bulb} />
                            <div className={styles.lightCone} />
                            <button onClick={() => handleNavClick('register')} className={styles.link}>Register</button>
                        </div>
                    </div>

                    {/* MOBILE PULL CORD — realistic chain */}
                    <button
                        className={styles.hamburger}
                        onClick={() => {
                            if (!isLongPress) {
                                setMenuOpen(!menuOpen);
                            }
                            setIsLongPress(false);
                        }}
                        onPointerDown={startLongPress}
                        onPointerUp={endLongPress}
                        onPointerLeave={endLongPress}
                        aria-label="Toggle Menu"
                    >
                        {/* Ceiling mount bracket */}
                        <div className={styles.mountBracket} />
                        {/* Ball chain */}
                        <div className={styles.chainSegment}>
                            <div className={styles.chainBead} />
                            <div className={styles.chainLink} />
                            <div className={styles.chainBead} />
                            <div className={styles.chainLink} />
                            <div className={styles.chainBead} />
                            <div className={styles.chainLink} />
                            <div className={styles.chainBead} />
                            <div className={styles.chainLink} />
                            <div className={styles.chainBead} />
                        </div>
                        {/* Connector ring */}
                        <div className={styles.connectorRing} />
                        {/* Acorn pull handle */}
                        <div className={styles.pullHandle}>
                            <div className={styles.handleCap} />
                            <div className={styles.handleBody} />
                        </div>
                        {!menuOpen && <span className={styles.tapHint}>tap</span>}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                <button onClick={() => handleNavClick('top')} className={styles.mobileLink}>Home</button>
                <button onClick={() => handleNavClick('events', true)} className={styles.mobileLink}>The Events</button>
                <button onClick={() => handleNavClick('merch')} className={styles.mobileLink}>Merch</button>
                <button onClick={() => handleNavClick('passes')} className={styles.mobileLink}>Passes</button>
                <button onClick={() => handleNavClick('register')} className={styles.mobileLink}>Register</button>

                <div className={styles.closeHint}>
                    ↑ PULL THE CORD TO CLOSE ↑
                </div>
            </div>

            {showEasterEgg && <EasterEgg onClose={() => setShowEasterEgg(false)} />}
        </>
    );
}