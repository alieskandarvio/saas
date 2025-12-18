import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Music4, Mic2 } from 'lucide-react';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import { WordRotate } from '@/components/magicui/word-rotate';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Star } from '@/components/custom/star';

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // الكلمات اللي بتلف بتعبر عن خدماتك الشاملة
  const rotatingWords = ["Global Releases", "Mastered Tracks", "AI Audio Lab", "Full Production"];

  const artists = [
    {
      id: 1,
      name: "Artist Alpha",
      designation: "Singer/Songwriter",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Producer X",
      designation: "Music Producer",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Sarah J.",
      designation: "Vocalist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "The Beats",
      designation: "Composer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=60",
    },
  ];

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = (e.target as HTMLDivElement).getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };
  const handleMouseLeave = () => setMouse({ x: 0, y: 0 });

  return (
    <section
      className="relative lg:min-h-screen bg-gradient-to-br from-gray-50 dark:from-zinc-950 via-indigo-50 dark:via-black to-indigo-50 dark:to-zinc-950 pt-25 pb-20 lg:pt-40 lg:pb-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Orbs */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute left-[10%] top-[15%] w-[320px] h-[320px] dark:w-[160px] dark:h-[160px] rounded-full bg-indigo-200 dark:bg-indigo-900 opacity-90 blur-[60px]"
          animate={{
            scale: [1, 1.13, 1],
            opacity: [0.85, 1, 0.85],
            x: mouse.x * 70,
            y: mouse.y * 40,
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline - Transforming your ideas into hits */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-black flex flex-col md:flex-row items-center gap-0.5 md:gap-1.25 justify-center text-3xl lg:text-7xl font-bold mb-4 lg:mb-8 leading-[1.2]"
          >
            <span className="bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 dark:from-gray-50 dark:via-blue-300 dark:to-indigo-900 bg-clip-text text-transparent">
              From Studio to
            </span>
            <WordRotate
              words={rotatingWords}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent w-[385px]"
            />
          </motion.h1>

          {/* Subtitle - The Full Artist Journey */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground mb-6 md:mb-10 max-w-[850px] mx-auto leading-relaxed"
          >
            AE Music Studio is your 360° partner. We take you from ground zero: Lyrics, Composing, Recording, Mixing, and Mastering. Plus, our dedicated Marketing Agency and Artist Dashboard ensure your hits reach every ear globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
          >
            <Button size="lg" className="cursor-pointer hover:[&_svg]:translate-x-1 w-56">
              Start Full Project
              <ArrowRight className="h-5 w-5 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="cursor-pointer hover:[&_svg]:-translate-y-1 w-56" asChild>
              <Link href="#dashboard"> 
                <Music4 className="h-5 w-5 transition-transform opacity-60" />
                Artist Dashboard
              </Link>                
            </Button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-2.5 mb-10"
          >
            <div className="flex gap-2.5">
              <div className="flex -space-x-2 me-2.5">
                <AnimatedTooltip items={artists} />
              </div>     
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="h-5 w-5 transition-transform opacity-60 text-yellow-500" />
                ))}
              </div>
            </div>   
            <div className="text-center text-muted-foreground text-sm font-medium leading-relaxed">
               Crafting tomorrow's stars through <span className="text-indigo-600 font-bold">End-to-End Production</span> & Global Marketing.
            </div>
          </motion.div>

          {/* Studio & Tech Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            {mounted && (
              <HeroVideoDialog
                trigger={
                  <div className="bg-indigo-600/10 dark:bg-indigo-300/10 backdrop-blur-md rounded-full p-4 shadow-lg">
                    <div className="bg-background rounded-full p-3 shadow-lg">
                      <Play className="size-6 text-indigo-600 dark:text-indigo-400 fill-indigo-600 dark:fill-indigo-400 ml-0.5" />
                    </div>
                  </div>
                }
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                thumbnailSrc={resolvedTheme === 'dark' ? '/studio-dark.png' : '/studio-light.png'} 
                thumbnailAlt="AE Music Studio Showcase"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;