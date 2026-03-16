import { motion } from 'framer-motion';
import heroCucuta from '@/assets/hero-cucuta.jpg';

const brandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: brandEase }}
      >
        <img
          src={heroCucuta}
          alt="Aerial view of Cúcuta at sunset with wide palm-lined avenues and mountains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-warm-overlay)' }} />
      </motion.div>

      <div className="relative z-10 px-6 md:px-12 pb-[12vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: brandEase }}
        >
          <h1 className="text-[12vw] md:text-[10vw] leading-hero font-black uppercase tracking-tightest text-primary-foreground">
            Cúcuta
          </h1>
          <p className="text-[4vw] md:text-[2.5vw] leading-hero font-display font-bold uppercase tracking-tightest text-primary-foreground/80 mt-2">
            Beyond the Routine
          </p>
        </motion.div>
        <motion.p
          className="max-w-md mt-8 text-lg leading-relaxed text-primary-foreground/70 font-body"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: brandEase }}
        >
          A journey of five lanes, intense heat, and the transformative power of the SENA stage. 45°C of pure growth.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
