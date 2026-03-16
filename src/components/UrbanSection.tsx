import Section from './Section';
import { motion } from 'framer-motion';
import wideAvenues from '@/assets/wide-avenues.jpg';
import { MapPin, Users } from 'lucide-react';

const brandEase = [0.22, 1, 0.36, 1];

const UrbanSection = () => {
  return (
    <Section id="urban">
      <div className="max-w-6xl mx-auto">
        <span className="text-sm font-display font-bold uppercase tracking-widest text-primary">
          Section 03 — Urban Landscape
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tightest mt-4 text-foreground">
          The Pearl of the North
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-12">
          {/* Image */}
          <motion.div
            className="relative rounded-bento overflow-hidden shadow-bento order-2 md:order-1"
            initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ opacity: 1, clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: brandEase }}
          >
            <img
              src={wideAvenues}
              alt="Wide palm-lined avenues of Cúcuta at golden hour"
              className="w-full h-[450px] object-cover"
            />
          </motion.div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-[65ch]">
              <p>
                Cúcuta stretches wide. Its avenues, four to five lanes across, are lined with towering palm trees that offer sparse but precious shade. The city breathes in a way that smaller towns cannot — there is space to think, to walk, to discover.
              </p>
              <p>
                Known as the "Pearl of the North," this border city carries a unique identity. Venezuelan and Colombian cultures blend seamlessly here, creating a warmth that goes beyond the temperature. The people are disarmingly kind — a stranger will offer directions, a cold drink, a story.
              </p>
              <p>
                The urban landscape is honest. It does not pretend to be something it is not. The wide roads carry the rhythm of daily life, the markets overflow with tropical fruit, and every corner has a story waiting to be told.
              </p>
            </div>

            <div className="flex gap-8 mt-8">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-display font-bold">Norte de Santander</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-display font-bold">750,000+ Inhabitants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default UrbanSection;
