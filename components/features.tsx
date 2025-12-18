import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { Music2, Radio, LineChart, Cpu, Share2, Disc } from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      id: 'full-production',
      icon: Music2,
      title: 'Ground Zero Production',
      description: 'We take your raw idea and turn it into a masterpiece. From lyrics and composing to professional recording in our top-tier studios.',
      stats: '24-Bit',
      metric: 'Audio Depth',
      colors: {
        bg: 'bg-[#00FF00]/10',
        icon: 'text-[#00FF00]',
        hover: 'hover:border-[#00FF00]/50',
        gradient: 'from-[#00FF00] via-[#10b981] to-[#059669]',
      }
    },
    {
      id: 'marketing-agency',
      icon: Share2,
      title: 'Growth Marketing',
      description: 'Our dedicated marketing agency handles your PR, Spotify playlist pitching, and social media campaigns to guarantee global reach.',
      stats: '1M+',
      metric: 'Monthly Reach',
      colors: {
        bg: 'bg-white/10',
        icon: 'text-white',
        hover: 'hover:border-white/50',
        gradient: 'from-zinc-400 via-zinc-200 to-white',
      }
    },
    {
      id: 'artist-dashboard',
      icon: LineChart,
      title: 'Smart Dashboard',
      description: 'Track your streaming data, manage your releases, and see your royalties in real-time through our AI-powered artist portal.',
      stats: 'Live',
      metric: 'Analytics',
      colors: {
        bg: 'bg-[#00FF00]/10',
        icon: 'text-[#00FF00]',
        hover: 'hover:border-[#00FF00]/50',
        gradient: 'from-[#00FF00] via-[#10b981] to-[#059669]',
      }
    },
    {
      id: 'ai-mastering',
      icon: Cpu,
      title: 'AI Audio Lab',
      description: 'Leveraging cutting-edge AI for vocal cleanup, stem separation, and smart mastering to ensure your sound meets industry standards.',
      stats: '-14',
      metric: 'LUFS Target',
      colors: {
        bg: 'bg-white/10',
        icon: 'text-white',
        hover: 'hover:border-white/50',
        gradient: 'from-zinc-400 via-zinc-200 to-white',
      }
    }
  ];

  return (
    <section id="features" className="py-24 bg-black border-b border-[#00FF00]/10">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="flex items-center justify-center flex-col text-center gap-5 mb-16"
        >
          <CustomBadge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20 uppercase tracking-[0.2em]">
            Agency Ecosystem
          </CustomBadge>

          <CustomTitle className="text-white italic">
            360° MUSIC <span className="text-[#00FF00]">SOLUTIONS</span>
          </CustomTitle>
          
          <CustomSubtitle className="text-zinc-400 max-w-3xl">
            Everything an artist needs under one roof. From the first beat to the worldwide trending list, we manage every step of your musical career.
          </CustomSubtitle>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className={cn(
                'h-full bg-zinc-900/50 border border-zinc-800 transition-all duration-500 p-8 relative overflow-hidden rounded-none', 
                feature.colors.hover
              )}>
                <CardContent className="p-0 relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className={cn(
                      'size-14 rounded-none flex items-center justify-center group-hover:rotate-[360deg] transition-all duration-700 border border-zinc-800', 
                      feature.colors.bg
                      )}
                    >
                      <feature.icon className={cn('size-6 relative z-10', feature.colors.icon)} />
                    </div>
                    
                    <div className="text-right">
                      <div className="text-3xl font-black text-white mb-1 italic tracking-tighter">{feature.stats}</div>
                      <div className="text-xs text-[#00FF00] font-bold uppercase tracking-widest">{feature.metric}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-6 uppercase italic tracking-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-zinc-400 leading-relaxed font-medium text-lg">
                    {feature.description}
                  </p>
                </CardContent>

                {/* Hover effect gradient border */}
                <div className={cn('absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left', feature.colors.gradient)} />
                
                {/* Subtle Glow on hover */}
                <div className="absolute inset-0 bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;