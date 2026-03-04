'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/core/Navbar';
import styles from '@/styles/merch/Merch.module.css';

export default function MerchPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xOffset = (clientX / window.innerWidth - 0.5) * 20;
            const yOffset = (clientY / window.innerHeight - 0.5) * 20;

            setMousePosition({ x: xOffset, y: yOffset });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const merchItems = [
        { id: 1, title: "Last Strange Adventure", image: "/assets/merch/web-1.gif" },
        { id: 2, title: "WSQK Tee", image: "/assets/merch/web-2.gif" },
        { id: 3, title: "Hellfire Edition Hoodie", image: "/assets/merch/web-3.gif" },
    ];

    return (
        <>
            <Navbar />
            <div
                className={styles.merchSection}
                style={{
                    '--mx': `${50 + mousePosition.x / 2}%`,
                    '--my': `${50 + mousePosition.y / 2}%`,
                    '--rx': `${mousePosition.x}px`,
                    '--ry': `${mousePosition.y}px`,
                } as React.CSSProperties}
            >
                {/* ATMOSPHERIC LAYERS */}
                <div className={styles.magneticRift}></div>
                <div className={styles.ashOverlay}></div>

                {/* CRT EFFECT */}
                <div className={styles.crtContainer}>
                    <div className={styles.scanlines}></div>
                </div>

                <div className={styles.container}>
                    <h1 className={styles.mainTitle}>MERCHANDISE</h1>

                    <div className={styles.merchGrid}>
                        {merchItems.map((item) => (
                            <div
                                key={item.id}
                                className={styles.merchItem}
                                onClick={() => setSelectedImage(item.image)}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        width={400}
                                        height={400}
                                        className={styles.merchImage}
                                        unoptimized // since they are gifs
                                    />
                                </div>
                                <h3 className={styles.merchTitle}>{item.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* LIGHTBOX MODAL */}
                    {selectedImage && (
                        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
                            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
                                <Image
                                    src={selectedImage}
                                    alt="Enlarged Merch View"
                                    width={1000}
                                    height={1000}
                                    className={styles.lightboxImage}
                                    unoptimized
                                />
                                <div className={styles.closeHint}>[ CLICK OUTSIDE TO CLOSE ]</div>
                            </div>
                        </div>
                    )}

                    <div className={styles.buttonContainer}>
                        <Link href="/" className={styles.secondaryBtn}>
                            RETURN TO BASE
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
