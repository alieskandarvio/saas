import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

// تدرجات الأخضر النيوني (Neon Green) لتناسب الهوية الموسيقية
const NEON_GREEN_CLASSES = [
  'fill-[#00FF00]',
  'fill-[#00E600]',
  'fill-[#00CC00]',
  'fill-[#00B300]',
  'fill-[#009900]',
];

const Logo = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % NEON_GREEN_CLASSES.length);
    }, 300); // تسريع الحركة لتبدو كأنها ذبذبات صوتية حقيقية
    return () => clearInterval(interval);
  }, []);

  const getClass = (offset: number) => NEON_GREEN_CLASSES[(step + offset) % NEON_GREEN_CLASSES.length];

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 cursor-pointer"
    >
      {/* Equalizer Icon Animation */}
      <svg className="size-7" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <g>
          {/* العمود الأول */}
          <rect
            x="5"
            y="20"
            width="6"
            height="15"
            className={`transition-all duration-300 ${getClass(0)}`}
          >
            <animate attributeName="height" values="8;18;8" dur="0.8s" repeatCount="indefinite" />
            <animate attributeName="y" values="22;12;22" dur="0.8s" repeatCount="indefinite" />
          </rect>
          
          {/* العمود الثاني - الأطول */}
          <rect
            x="17"
            y="10"
            width="6"
            height="25"
            className={`transition-all duration-300 ${getClass(2)}`}
          >
            <animate attributeName="height" values="15;30;15" dur="1s" repeatCount="indefinite" />
            <animate attributeName="y" values="15;0;15" dur="1s" repeatCount="indefinite" />
          </rect>

          {/* العمود الثالث */}
          <rect
            x="29"
            y="15"
            width="6"
            height="20"
            className={`transition-all duration-300 ${getClass(4)}`}
          >
            <animate attributeName="height" values="10;22;10" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="y" values="20;8;20" dur="1.2s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-black italic tracking-tighter text-white">
          AE <span className="text-[#00FF00]">MUSIC</span>
        </span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500">
          Studio & Agency
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;