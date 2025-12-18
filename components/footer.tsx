import { motion } from 'framer-motion';
import { Facebook, Instagram, Youtube, Mail, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import Logo from '@/components/logo'; // تأكد أن هذا المكون يستخدم شعارك الجديد أو النص المعدل

const Footer = () => {
  const links = {
    production: ['Full Production', 'Mixing & Mastering', 'Songwriting', 'AI Audio Lab'],
    agency: ['Artist Marketing', 'Digital Distribution', 'Brand Identity', 'PR Campaigns'],
    resources: ['Artist Dashboard', 'FAQ', 'Privacy Policy', 'Terms of Service']
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/aemusicpro', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ae_music_pro', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@AEMusicPro', label: 'YouTube' },
    { icon: Mail, href: 'mailto:contact@aemusic.io', label: 'Email' }
  ];

  return (
    <footer className="bg-black relative overflow-hidden border-t border-[#00FF00]/10">
      {/* لمسة إضاءة نيون خفيفة في الخلفية */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-6 mx-auto pt-16 pb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Brand Section - Left side */}
          <div className="lg:w-1/3 mb-4 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                {/* لو عندك ملف Logo جاهز بيطلع هون، أو نكتبه كـ Text */}
                <span className="text-3xl font-black italic tracking-tighter text-white">
                  AE <span className="text-[#00FF00]">MUSIC</span>
                </span>
              </div>
              <p className="text-zinc-400 mb-8 max-w-sm text-lg leading-relaxed">
                Elevating the sound of tomorrow. We provide a full-scale ecosystem for artists to create, distribute, and dominate the global charts.
              </p>
              
              {/* Social Icons */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: '#00FF00', color: '#000' }}
                    whileTap={{ scale: 0.9 }}
                    className="size-10 border border-zinc-800 text-zinc-400 rounded-none flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="size-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 3 Column Menu - Navigation */}
          <div className="w-full grow lg:w-2/3 flex justify-end">
            <div className="w-full lg:w-auto flex justify-between flex-wrap lg:grid lg:grid-cols-3 gap-12 lg:gap-24">
              {Object.entries(links).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-black text-[#00FF00] text-sm mb-6 uppercase tracking-[0.2em] italic">
                    {category}
                  </h3>
                  <ul className="space-y-4">
                    {items.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-zinc-500 hover:text-white transition-colors flex items-center group text-sm font-bold uppercase tracking-tight"
                        >
                          {item}
                          <ArrowUpRight className="size-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#00FF00]" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-zinc-900" />

        <div className="flex flex-col md:row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-zinc-600 text-xs font-medium tracking-widest uppercase">
              © {new Date().getFullYear()} AE MUSIC STUDIO.
            </p>
            <span className="text-zinc-800">|</span>
            <p className="text-zinc-600 text-xs font-medium tracking-widest uppercase">
              Designed for the future
            </p>
          </div>
          
          <div className="flex gap-8">
             <a href="mailto:contact@aemusic.io" className="text-zinc-500 hover:text-[#00FF00] text-xs font-bold uppercase tracking-widest transition-colors">
               Support: contact@aemusic.io
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;