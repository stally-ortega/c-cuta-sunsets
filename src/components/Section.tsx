import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const brandEase = [0.22, 1, 0.36, 1] as const;

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

const Section = ({ children, id, className = '' }: SectionProps) => (
  <section id={id} className={`min-h-screen px-6 md:px-12 py-[15vh] ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: brandEase as unknown as number[] }}
    >
      {children}
    </motion.div>
  </section>
);

export default Section;
