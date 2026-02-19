'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/EasterEgg.module.css';

interface EasterEggProps {
    onClose: () => void;
}

const SECRET_MESSAGE = "The barrier has failed. IIIT Bhubaneswar has become the epicenter of a multi-dimensional convergence. Advaita 2026 is no longer just a festival—it is the gateway to the infinite. Technocrats and cultural anomalies have gathered to witness the birth of a new reality. The coordinates are set. The frequency is absolute. You were never meant to see this... but now that you have, there is no turning back.";

export default function EasterEgg({ onClose }: EasterEggProps) {
    const [typedMessage, setTypedMessage] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setTypedMessage(SECRET_MESSAGE.slice(0, i));
            i++;
            if (i > SECRET_MESSAGE.length) {
                clearInterval(interval);
            }
        }, 40);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.easterEggOverlay}>
            <div className={styles.riftBackground} />
            <div className={styles.crtLines} />

            <div className={styles.content}>
                <div className={styles.classifiedTag}>CLASSIFIED // ANOMALY_026</div>
                <h2 className={styles.glitchTitle} data-text="DIMENSIONAL RIFT">
                    DIMENSIONAL RIFT
                </h2>

                <p className={styles.message}>
                    {typedMessage}
                    <span className={styles.cursor}>_</span>
                </p>

                <button className={styles.closeButton} onClick={onClose}>
                    RESEAL THE RIFT
                </button>
            </div>
        </div>
    );
}
