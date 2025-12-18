import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, Zap } from 'lucide-react';
import { Drawer, DrawerTitle, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import Logo from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
  // حذفنا 'Pricing' نهائياً من القائمة
  const navItems = ['Home', 'Features', 'FAQ', 'Contact'];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      if (window.scrollY < 50) {
        setActiveSection('home');
        return;
      }

      // تحديث مصفوفة الأقسام لمراقبة التمرير بدقة
      const sections = ['features', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) setActiveSection(section);
            return;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);  
  
  const handleNavClick = (item: string) => {
    setIsOpen(false);
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const targetId = item.toLowerCase().replace(' ', '-');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const isActiveItem = (item: string) => {
    const sectionMap: { [key: string]: string } = {
      'Home': 'home',
      'Features': 'features',
      'FAQ': 'faq',
      'Contact': 'contact'
    };
    return activeSection === sectionMap[item];
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b', 
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-[#00FF00]/10 py-3' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavClick('Home')}>
          {/* تأكد أن مكون Logo يعرض شعار AE MUSIC كما صممناه */}
          <Logo />
        </div>
        
        <div className="flex items-center gap-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  'cursor-pointer text-sm font-bold uppercase tracking-widest transition-all relative group italic',
                  isActiveItem(item) ? 'text-[#00FF00]' : 'text-zinc-400 hover:text-white'
                )}
              >
                {item}
                <span 
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-[#00FF00] transition-all duration-300',
                    isActiveItem(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </motion.button>
            ))}
            
            <Button 
              className="bg-[#00FF00] text-black font-black uppercase italic rounded-none hover:bg-white hover:scale-105 transition-all px-8"
              onClick={() => handleNavClick('Contact')}
            >
              Book Session
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
                  <Menu className="size-6 text-[#00FF00]"/>
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-black border-[#00FF00]/20 px-6 pb-12 rounded-t-none">
                <DrawerTitle className="text-[#00FF00] italic font-black text-2xl mb-8 mt-4 tracking-tighter">
                  AE MUSIC MENU
                </DrawerTitle>
                <nav className="flex flex-col space-y-6">
                  {navItems.map((item) => (
                    <button 
                      key={item}
                      onClick={() => handleNavClick(item)}
                      className={cn(
                        'w-full text-left text-3xl font-black uppercase italic transition-colors tracking-tighter',
                        isActiveItem(item) ? 'text-[#00FF00]' : 'text-white hover:text-[#00FF00]'
                      )}
                    >
                      {item}
                    </button>
                  ))}
                  <Button 
                    className="w-full bg-[#00FF00] text-black font-black uppercase italic rounded-none h-16 mt-8 text-lg"
                    onClick={() => handleNavClick('Contact')}
                  >
                    Start Your Project
                  </Button>
                </nav>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;