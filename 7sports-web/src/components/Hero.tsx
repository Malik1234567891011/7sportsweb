import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.bg}
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-fallback.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          7Sports
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          Multisport, Soccer, Dek hockey — 2 à 12 ans
        </motion.p>
        <motion.div
          className={styles.ctas}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <a href="/inscription" className={styles.ctaPrimary}>
            Réserver un coach
          </a>
          <a href="#programmes" className={styles.ctaSecondary}>
            Voir nos programmes
          </a>
        </motion.div>
      </div>
    </section>
  );
}