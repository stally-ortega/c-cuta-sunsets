import { motion } from 'framer-motion';
import malecon from '@/assets/malecon.jpg';
import wideAvenues from '@/assets/wide-avenues.jpg';
import theaterStage from '@/assets/theater-stage.jpg';
import localPeople from '@/assets/local-people.jpg';
import { Thermometer, Wind } from 'lucide-react';

const brandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const BentoCard = ({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`rounded-bento overflow-hidden shadow-bento relative ${className}`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay, ease: brandEase }}
    whileHover={{ scale: 1.02 }}
  >
    {children}
  </motion.div>
);

const ClimateSection = () => {
  return (
    <section id="climate" className="bg-primary px-6 md:px-12 py-[15vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: brandEase }}
        className="max-w-6xl mx-auto"
      >
        <span className="text-sm font-display font-bold uppercase tracking-widest text-primary-foreground/60">
          Section 02 — Climate & Atmosphere
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tightest mt-4 text-primary-foreground">
          45°C of Pure Intensity
        </h2>
        <div className="flex gap-6 mt-6 mb-12">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Thermometer className="w-5 h-5" />
            <span className="text-sm font-body">Peak: 45°C</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Wind className="w-5 h-5" />
            <span className="text-sm font-body">Refreshing evening winds</span>
          </div>
        </div>

        <p className="max-w-[65ch] text-primary-foreground/70 leading-relaxed mb-12">
          The heat in Cúcuta is not something you experience — it is something you become. The sun presses down on the wide avenues with an authority that demands respect. But when the evening breeze rolls through from the mountains, carrying the scent of tropical vegetation, every degree feels earned.
        </p>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[80vh]">
          <BentoCard className="col-span-2 row-span-2" delay={0}>
            <img src={malecon} alt="El Malecón waterfront at sunset in Cúcuta" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/70 to-transparent">
              <p className="text-primary-foreground text-xs font-display font-bold uppercase tracking-wider">El Malecón at Sunset</p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-2" delay={0.1}>
            <img src={wideAvenues} alt="Wide five-lane avenues of Cúcuta" className="w-full h-full object-cover min-h-[300px]" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/70 to-transparent">
              <p className="text-primary-foreground text-xs font-display font-bold uppercase tracking-wider">Five-Lane Avenues</p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-1" delay={0.2}>
            <img src={theaterStage} alt="The SENA acting stage" className="w-full h-full object-cover min-h-[140px]" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/70 to-transparent">
              <p className="text-primary-foreground text-[10px] font-display font-bold uppercase tracking-wider">The Stage</p>
            </div>
          </BentoCard>

          <BentoCard className="col-span-1 row-span-1" delay={0.3}>
            <img src={localPeople} alt="Friendly local people of Cúcuta" className="w-full h-full object-cover min-h-[140px]" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/70 to-transparent">
              <p className="text-primary-foreground text-[10px] font-display font-bold uppercase tracking-wider">Local Warmth</p>
            </div>
          </BentoCard>
        </div>
      </motion.div>
    </section>
  );
};

export default ClimateSection;
