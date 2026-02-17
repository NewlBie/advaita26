'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/core/Navbar';
import MusicPlayer from '@/components/core/MusicPlayer';
import styles from '@/styles/Events.module.css';

import { events, type Event } from '@/data/events';

export default function EventsPage() {
  const [glitch, setGlitch] = useState(false);

  // Trigger occasional "System Flickers"
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 200);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <section className={`${styles.wrapper} ${glitch ? styles.systemGlitch : ''}`}>
        {/* Background Atmosphere */}
        <div className={styles.ashOverlay} />
        <div className={styles.vignette} />

        <div className={styles.header}>
          <div className={styles.topLabel}>HAWKINS INDIANA // 1984</div>
          <h1 className={styles.mainTitle}>
            <span className={styles.glowText}>ADVAITA</span>
            <span className={styles.redText}>EVENTS</span>
          </h1>
        </div>

        <div className={styles.grid}>
          {events.map((event) => (
            <div
              key={event.id}
              className={`${styles.card} ${event.isCorrupted ? styles.corrupted : ''}`}
            >
              <div className={styles.imageContainer}>
                <img src={event.image} alt={event.title} className={styles.cardImg} />
                <div className={styles.scanlines} />
                <div className={styles.statusBadge}>{event.isCorrupted ? 'WARNING' : 'ACTIVE'}</div>
              </div>

              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.date}>{event.date}</span>
                  <span className={styles.id}>{event.id}</span>
                </div>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <p className={styles.description}>{event.description}</p>

                <div className={styles.locationBlock}>
                  <span className={styles.label}>LOC:</span>
                  <span className={styles.value}>{event.location}</span>
                </div>

                <button
                  className={styles.actionBtn}
                  onClick={() => window.open(event.link, '_blank')}
                >
                  <span className={styles.btnLabel}>ACCESS FILE</span>
                  <div className={styles.btnGlow} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <footer className={styles.vhsFooter}>
          <div className={styles.vhsRec}>
            <span className={styles.recDot}>●</span> PLAY 00:24:84
          </div>
          <div className={styles.vhsMode}>HI-FI STEREO</div>
        </footer>
      </section>
      <MusicPlayer />
    </>
  );
}