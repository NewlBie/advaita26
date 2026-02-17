'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '@/styles/sections/Gallery.module.css';

const images = [
  { id: 1, src: '/assets/gallery/DSC_1475.jpg', caption: 'SUBJECT_DEPT_01', tilt: -5 },
  { id: 2, src: '/assets/gallery/DSC_9681.jpg', caption: 'FIELD_LOG_MAR_26', tilt: 3 },
  { id: 3, src: '/assets/gallery/IMG_6564.jpg', caption: 'VOID_ENTRY_EXP', tilt: -2 },
  { id: 4, src: '/assets/gallery/SHW01200.jpg', caption: 'ANOMALY_SIGHTING', tilt: 6 },
  { id: 5, src: '/assets/gallery/SHW01359.jpg', caption: 'CROWD_FREQ_DATA', tilt: -4 },
  { id: 6, src: '/assets/gallery/SHW01430.jpg', caption: 'MAINFRAME_BREACH', tilt: 2 },
  { id: 7, src: '/assets/gallery/SHW01486.jpg', caption: 'OS_CORE_UNSTABLE', tilt: -7 },
  { id: 8, src: '/assets/gallery/SHW01984.jpg', caption: 'RECREATION_SEC_B', tilt: 4 },
];

export default function Gallery() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.folderTab}>ARCHIVE_B11</div>
        <h2 className={styles.title}>VISUAL_EVIDENCE_LOG</h2>
        <p className={styles.subtitle}>SENSITIVE MATERIAL // DO NOT DISTRIBUTE</p>
      </div>

      <div className={styles.photoBoard}>
        {images.map((img) => (
          <motion.div
            key={img.id}
            className={styles.photoCard}
            initial={{ rotate: img.tilt, scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
          >
            <div className={styles.pin} />
            <div className={styles.imageWrapper}>
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.photo}
                loading="lazy"
              />
              <div className={styles.vignette} />
            </div>
            <div className={styles.captionArea}>
              <span className={styles.serial}>IMG_NO. {img.id * 1024}</span>
              <p className={styles.captionText}>{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={styles.scannerLine} />
    </section>
  );
}