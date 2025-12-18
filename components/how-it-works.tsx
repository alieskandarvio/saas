import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Mic2, CassetteTape, Radio, Globe2 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manuallyTriggered = useRef(false);

  const steps = [
    {
      id: 1,
      title: "Recording",
      description: "Capture your vision in our high-end studios with top-tier gear.",
      image: "/screens/recording.jpg", // استبدل بـ صور فعلية من الستوديو لاحقاً
      icon: Mic2
    },
    {
      id: 2,
      title: "Production",
      description: "Professional mixing & mastering to ensure your sound hits the industry standard.",
      image: "/screens/mixing.jpg",
      icon: CassetteTape
    },
    {
      id: 3,
      title: "Marketing",
      description: "Custom PR campaigns and Spotify pitching to grow your fanbase.",
      image: "/screens/marketing.jpg",
      icon: Radio
    },
    {
      id: 4,
      title: "Distribution",
      description: "Global release on all platforms while you keep 100% of your rights.",
      image: "/screens/distro.jpg",
      icon: Globe2
    },
  ];

  const stepDuration = 5000; 
  
  useEffect(() => {
    if (isPaused) return;
    setProgress(0);
  
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (stepDuration / 50));
      });
    }, 50);
  
    const stepTimeout = setTimeout(() => {
      setActiveStep((prevStep) => {
        const next = (prevStep + 1) % steps.length;
        manuallyTriggered.current = false;
        return next;
      });
    }, stepDuration);
  
    return () => {
      clearInterval(progressInterval);
      clearTimeout(stepTimeout);
    };
  }, [activeStep, isPaused, steps.length]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    manuallyTriggered.current = true;
    setTimeout(() => setIsPaused(false), 4000);
  };

  return (
    <section id="how-it-works" className="py-24 bg-black border-b border-[#00FF00]/10">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20">
            The Roadmap
          </CustomBadge>

          <CustomTitle className="text-white italic">
            FROM STUDIO <span className="text-[#00FF00]">TO STAGE</span>
          </CustomTitle>
          
          <CustomSubtitle className="text-zinc-400">
            A seamless workflow designed for the modern independent artist.
          </CustomSubtitle>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12 max-w-6xl mx-auto"
        >
          {/* Top Side - Step Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex flex-col items-center cursor-pointer group"
                onClick={() => handleStepClick(index)}
              >
                <div className={cn(
                  "size-14 mb-4 rounded-none flex items-center justify-center border transition-all duration-300",
                  index === activeStep ? "bg-[#00FF00] border-[#00FF00]" : "bg-zinc-900 border-zinc-800 group-hover:border-[#00FF00]/50"
                )}>
                  <step.icon className={cn("size-6", index === activeStep ? "text-black" : "text-zinc-500")} />
                </div>

                <h3 className={cn(
                  'text-sm font-black uppercase tracking-tighter mb-2 transition-colors duration-300 italic', 
                  index === activeStep ? 'text-[#00FF00]' : 'text-zinc-500'
                )}>
                  {step.title}
                </h3>
                
                <div className="w-full h-[2px] bg-zinc-900 overflow-hidden relative"> 
                    {index === activeStep && (
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[#00FF00]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.05, ease: "linear" }}
                      />
                    )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Side - Dynamic Content Display */}
          <div className="relative w-full aspect-video md:aspect-[21/9] rounded-none overflow-hidden border border-zinc-800 bg-zinc-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                {/* Image Placeholder - Replace with actual artwork or studio photos */}
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700 italic font-black text-4xl uppercase">
                   {steps[activeStep].title} PREVIEW
                </div>
                
                <div className="absolute bottom-8 left-8 z-20 max-w-md">
                  <p className="text-white text-xl font-bold italic leading-tight">
                    {steps[activeStep].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            className="bg-[#00FF00] text-black font-black uppercase italic rounded-none hover:bg-white transition-all px-10 h-14" 
            asChild
          >
            <Link href="#contact">Start Your Release</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;