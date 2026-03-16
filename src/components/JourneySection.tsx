import Section from './Section';
import { motion } from 'framer-motion';
import theaterStage from '@/assets/theater-stage.jpg';

const brandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const JourneySection = () => {
  return (
    <Section id="journey">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <motion.span
            className="text-sm font-display font-bold uppercase tracking-widest text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Section 01 — The Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tightest mt-4 text-foreground">
            Stepping Onto the SENA Stage
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed max-w-[65ch]">
            <p>
              Leaving the comfort zone is never easy. The decision to compete in the SENA acting competition in Cúcuta meant embracing the unknown — a new city, a different culture, and a stage that demanded everything.
            </p>
            <p>
              The rehearsals were intense. Every line had to carry the weight of authenticity. The heat outside the theater was relentless, but inside, the only fire that mattered was the one burning in the performance. Fellow actors from across Norte de Santander brought raw talent and genuine passion.
            </p>
            <p>
              Standing under those amber stage lights, the routine didn't just break. It transformed into something entirely new — a deeper understanding of storytelling, of human connection, and of what it means to be truly present.
            </p>
          </div>
        </div>

        <motion.div
          className="relative rounded-bento overflow-hidden shadow-bento"
          initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: brandEase }}
        >
          <img
            src={theaterStage}
            alt="Actors performing on the SENA stage under warm amber lights"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/60 to-transparent">
            <p className="text-primary-foreground text-sm font-display font-bold uppercase tracking-wider">
              SENA Cultural Stage — Cúcuta
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default JourneySection;
