/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import Marquee from '@/components/ui/marquee';

const TrustedBrands = () => {
  // المنصات الموسيقية والشركات العالمية المرتبطة بالصناعة
  const musicBrands = [
    { name: 'Spotify', logo: 'spotify.svg' },
    { name: 'Anghami', logo: 'anghami.svg' },
    { name: 'Apple Music', logo: 'apple-music.svg' },
    { name: 'YouTube Music', logo: 'youtube.svg' },
    { name: 'Deezer', logo: 'deezer.svg' },
    { name: 'SoundCloud', logo: 'soundcloud.svg' },
    { name: 'Tidal', logo: 'tidal.svg' },
    { name: 'Instagram', logo: 'instagram.svg' },
    { name: 'TikTok', logo: 'tiktok.svg' },
    { name: 'Universal Audio', logo: 'uaudio.svg' }
  ];

  return (
    <section className="py-12 bg-black overflow-hidden border-b border-[#00FF00]/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[10px] font-black text-[#00FF00]/40 tracking-[0.4em] uppercase italic">
            Distribute Your Music Globally
          </p>
        </motion.div>

        {/* Marquee Container with custom neon fade */}
        <div className="relative">
          {/* Left fade shadow */}
          <div className="absolute start-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          
          {/* Right fade shadow */}
          <div className="absolute end-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Marquee */}
          <Marquee pauseOnHover className="[--duration:30s]">
            {musicBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center gap-4 mx-12 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default group"
              >
                {/* ملاحظة: تأكد من وضع شعارات هذه المنصات (بصيغة SVG باللون الأبيض) 
                   في مجلد public/brands/ لتظهر بشكل احترافي
                */}
                <img 
                  src={`/brands/${brand.logo}`} 
                  alt={brand.name} 
                  className="h-7 md:h-9 w-auto object-contain"
                  // في حال لم تتوفر الصور حالياً، سيظهر اسم المنصة بشكل فني
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `<span class="text-white/20 font-black italic text-xl uppercase tracking-tighter group-hover:text-[#00FF00] transition-colors">${brand.name}</span>`;
                  }}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;