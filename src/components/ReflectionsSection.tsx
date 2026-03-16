import { motion } from 'framer-motion';
import { Theater, Thermometer, Calendar } from 'lucide-react';

const brandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { icon: Thermometer, value: '45°C', label: 'Peak Heat' },
  { icon: Calendar, value: '5 Days', label: 'Duration' },
  { icon: Theater, value: '1 Stage', label: 'Transformation' },
];

const ReflectionsSection = () => {
  return (
    <section id="reflections" className="bg-foreground px-6 md:px-12 py-[15vh]">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: brandEase }}
      >
        <span className="text-sm font-display font-bold uppercase tracking-widest text-primary">
          Section 04 — Reflections
        </span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tightest mt-6 text-background">
          The Routine Didn't Just Break
        </h2>
        <p className="text-2xl md:text-3xl font-display font-bold tracking-tightest mt-2 text-primary">
          It Evolved.
        </p>

        <p className="max-w-[65ch] mx-auto mt-10 text-background/60 leading-relaxed text-lg">
          Cúcuta gave more than heat and wide avenues. It gave perspective. The SENA stage became a crucible where raw potential met discipline. The friendships forged under 45°C don't fade — they are tempered by fire. Every bead of sweat on that stage was a lesson in resilience, and every applause was proof that growth happens outside the comfort zone.
        </p>

        <div className="flex justify-center gap-12 md:gap-20 mt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: brandEase }}
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-display font-black text-background tracking-tightest">
                {stat.value}
              </p>
              <p className="text-sm text-background/40 font-body mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-background/10">
          <p className="text-xs text-background/30 font-display uppercase tracking-widest">
            Studio Calima — Cúcuta, Norte de Santander, Colombia
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ReflectionsSection;
