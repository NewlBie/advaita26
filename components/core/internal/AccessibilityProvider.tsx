'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { pauseAllMusic, resumeActiveMusic } from '../audio';
import { FaLinkedin, FaGithub, FaSkull, FaBiohazard } from 'react-icons/fa';
import styles from '@/styles/AccessibilityProvider.module.css';

const _0x4f21 = (s: string) => typeof window !== 'undefined' ? window.atob(s) : s;

const GIFS = [
    '/fonts/tenor.gif', '/fonts/tenor (1).gif', '/fonts/tenor (2).gif',
    '/fonts/tenor (3).gif', '/fonts/tenor (4).gif', '/fonts/tenor (5).gif',
    '/fonts/tenor (6).gif', '/fonts/tenor (7).gif',
    '/fonts/idhar-zeher-khane-ka-paisa-nahi-hai-babu-rao-12a02da404.gif'
];

export default function AccessibilityProvider({ children }: { children: React.ReactNode }) {
    const [active, setActive] = useState(false);
    const [currentGif, setCurrentGif] = useState<string | null>(null);
    const [glitchText, setGlitchText] = useState(_0x4f21('TkVBTCBCSUpV'));
    const [gifQueue, setGifQueue] = useState<string[]>([]);
    const [isGifPlaying, setIsGifPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const controls = useAnimation();

    // Memoize shuffle logic
    const shuffle = useCallback((array: string[]) => {
        const newArr = [...array];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr;
    }, []);

    const triggerHapticBuffer = useCallback(() => {
        controls.start({
            x: [0, -15, 15, -15, 15, 0],
            y: [0, 5, -5, 5, -5, 0],
            transition: { duration: 0.2 }
        });
    }, [controls]);

    const ensureFocusCapture = useCallback(() => {
        if (!active) return;
        const tryCapture = () => {
            if (active && !document.fullscreenElement && document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen().catch(() => {
                    setTimeout(tryCapture, 1000);
                });
            }
        };
        setTimeout(tryCapture, 300);
    }, [active]);

    const checkA11yRules = useCallback(() => {
        if (isGifPlaying) return;
        setIsGifPlaying(true);

        setGifQueue(prev => {
            const currentQueue = prev.length === 0 ? shuffle(GIFS) : [...prev];
            const nextGif = currentQueue.pop();
            if (nextGif) {
                setCurrentGif(nextGif);
                triggerHapticBuffer();
            }
            return currentQueue;
        });

        setTimeout(() => {
            setCurrentGif(null);
            setIsGifPlaying(false);
        }, 7000); // 7 second lock
    }, [isGifPlaying, triggerHapticBuffer, shuffle]);

    const startAccessibilityProbe = () => {
        setActive(true);
        ensureFocusCapture();
        if (audioRef.current) {
            pauseAllMusic();
            audioRef.current.play().catch(() => { });
        }
    };

    const resetAccessibilityState = () => {
        setActive(false);
        if (document.fullscreenElement) {
            document.exitFullscreen().catch(() => { });
        }
    };

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio('/audio/sfx/Trap Queen.mp3');
            audioRef.current.loop = true;
            audioRef.current.preload = 'auto';
            audioRef.current.load();
        }

        GIFS.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        setGifQueue(shuffle(GIFS));
    }, [shuffle]);

    useEffect(() => {
        const handleA11yUpdate = () => {
            if (active && !document.fullscreenElement) {
                triggerHapticBuffer();
                ensureFocusCapture();
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '/') {
                e.preventDefault();
                if (!active) {
                    startAccessibilityProbe();
                } else {
                    checkA11yRules();
                }
            }
            if (e.key === 'Escape' && active) {
                triggerHapticBuffer();
                checkA11yRules();
                ensureFocusCapture();
            }
        };

        document.addEventListener('fullscreenchange', handleA11yUpdate);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('fullscreenchange', handleA11yUpdate);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [active, triggerHapticBuffer, ensureFocusCapture, checkA11yRules]);

    useEffect(() => {
        if (!active && audioRef.current) {
            audioRef.current.pause();
            resumeActiveMusic();
        }
    }, [active]);

    const overlayVariants = {
        hidden: { opacity: 0, scale: 1.2, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            transition: { duration: 0.3 }
        },
        exit: {
            y: '100vh',
            opacity: 0,
            skewY: 10,
            filter: 'blur(20px)',
            transition: { duration: 0.8 }
        }
    };

    return (
        <>
            {children}
            <AnimatePresence>
                {active && (
                    <motion.div
                        className={styles.overlay}
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={styles.scanline} />
                        <div className={styles.noise} />

                        <div className={styles.content}>
                            <motion.div
                                className={styles.warningBox}
                                animate={{
                                    borderColor: ['#ff0000', '#00ff00', '#0000ff'],
                                    boxShadow: ['0 0 10px #f00', '0 0 20px #0f0', '0 0 10px #00f']
                                }}
                                transition={{ repeat: Infinity, duration: 1 }}
                            >
                                <FaBiohazard className={styles.iconPulse} />
                                <h2 className={styles.alertText}>A11Y_AUDIT_MODE</h2>
                                <FaSkull className={styles.iconPulse} />
                            </motion.div>

                            <div className={styles.glitchContainer}>
                                <h1 className={styles.hackerText} data-text={_0x4f21('TmV3bEJpZQ==')}>
                                    {_0x4f21('TmV3bEJpZQ==')}
                                </h1>
                                <div className={styles.glitchLine} />
                            </div>

                            <p className={styles.subtitle}>// TELEMETRY_PROBE_ACTIVE //</p>

                            <motion.div
                                style={{ opacity: 0.8, marginTop: '30px' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className={styles.description}>
                                    SENSOR DATA COLLATED. LEAD_DEVELOPER: <span style={{ color: '#ff4400', fontWeight: 'bold' }}>{_0x4f21('TkVBTCBCSUpV')}</span>.
                                </p>
                            </motion.div>

                            <div className={styles.statsGrid}>
                                <div className={styles.statItem}>A11Y_ERR: LOGGED</div>
                                <div className={styles.statItem}>UPLINK: DATA_GEN</div>
                                <div className={styles.statItem}>ID: {_0x4f21('TmV3bEJpZQ==')}</div>
                            </div>

                            <div className={styles.links}>
                                <motion.a
                                    whileHover={{ scale: 1.1, skewX: -10 }}
                                    href={_0x4f21('aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL25lYWxiaWp1Lw==')}
                                    target="_blank"
                                    className={styles.linkBtn}
                                >
                                    <FaLinkedin size={24} />
                                    <span>LinkedIn</span>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.1, skewX: 10 }}
                                    href={_0x4f21('aHR0cHM6Ly9naXRodWIuY29tL05ld2xCaWU=')}
                                    target="_blank"
                                    className={styles.linkBtn}
                                >
                                    <FaGithub size={24} />
                                    <span>GitHub</span>
                                </motion.a>
                            </div>

                            <div className={styles.terminal}>
                                <p className={styles.typewriter}>$ probe --mode=accessibility</p>
                                <p className={styles.typewriter}>$ generating compliance_report...</p>
                            </div>

                            <div className={styles.closeHint}>
                                [ PRESS "/" TO TOGGLE A11Y OVERLAY ]
                            </div>
                        </div>

                        <AnimatePresence>
                            {currentGif && (
                                <motion.div
                                    className={styles.gifOverlay}
                                    initial={{ opacity: 0, scale: 0.5, rotate: 45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 2, filter: 'hue-rotate(90deg)' }}
                                >
                                    <img src={currentGif} alt="PRANK" className={styles.fullGif} />
                                    <div className={styles.prankWarning}>ACCESS_MODE_ENFORCED</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
