import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Journey', href: '#journey' },
  { label: 'Climate', href: '#climate' },
  { label: 'Urban', href: '#urban' },
  { label: 'Reflections', href: '#reflections' },
];

const StickyNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -64 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-12 border-b transition-colors duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-background/80 border-foreground/5'
          : 'bg-transparent border-transparent'
      }`}
    >
      <span className="font-display font-black text-sm tracking-tightest uppercase text-foreground">
        Studio Calima
      </span>
      <div className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors relative"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 hover:scale-x-100 transition-transform origin-left" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default StickyNav;
