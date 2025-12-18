import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import Link from 'next/link'; 

const FAQ = () => {
  const faqs = [
    {
      question: "Do I keep 100% of my rights and royalties?",
      answer: "Absolutely. With AE Music, you retain full ownership of your master recordings. We handle the distribution, but you keep 100% of your earnings from Spotify, Anghami, and Apple Music."
    },
    {
      question: "What is the turnaround time for Mixing & Mastering?",
      answer: "Standard delivery for a single track is 3-5 business days. If you're working on an EP or Album, we'll provide a custom timeline to ensure every beat is perfect."
    },
    {
      question: "Do you provide Composing and Songwriting services?",
      answer: "Yes, our team includes professional composers and songwriters who can help you from 'Ground Zero'—building the melody, lyrics, and full arrangement from scratch."
    },
    {
      question: "How do I get my music on Spotify and TikTok?",
      answer: "We take care of the heavy lifting. Once the track is ready, we distribute it to 150+ digital stores globally, including TikTok, Instagram, and YouTube Music."
    },
    {
      question: "Can AE Music help with Artist Branding and PR?",
      answer: "We are more than just a studio. We are an agency that builds artist identities. From professional photoshoots to playlist pitching and social media strategy, we scale your brand."
    },
    {
      question: "Where is AE Music studio located?",
      answer: "We operate as a hybrid agency. We have physical recording spots and a global network for remote mixing, mastering, and artist management, serving artists worldwide."
    }
  ];

  return (
    <section className="py-24 bg-black border-t border-[#00FF00]/10" id="faq">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="flex items-center justify-center flex-col text-center gap-5 mb-20"
        >
          <CustomBadge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20 uppercase tracking-widest">
            The Knowledge Hub
          </CustomBadge>

          <CustomTitle className="text-white tracking-tighter italic uppercase">
            Frequently Asked <span className="text-[#00FF00]">Questions</span>
          </CustomTitle>
          
          <CustomSubtitle className="text-zinc-400 max-w-2xl">
            Everything you need to know about production, rights, and how we take your sound global.
          </CustomSubtitle>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-zinc-900/30 border border-zinc-800/50 px-6 rounded-none hover:border-[#00FF00]/30 transition-all duration-300"
                >
                  <AccordionTrigger className="text-start font-black text-white hover:text-[#00FF00] py-6 uppercase italic tracking-tight data-[state=open]:text-[#00FF00] transition-colors decoration-transparent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 leading-relaxed pb-6 border-t border-zinc-800/30 pt-4 font-medium">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-2 text-center mt-16"
        >
          <span className="text-zinc-500 font-bold uppercase text-xs tracking-[0.2em]">
            Still have specific questions?
          </span>

          <Link href="#contact" className="text-[#00FF00] font-black uppercase italic hover:tracking-widest transition-all duration-300 flex items-center gap-2 group text-lg">
             Contact Our A&R Team 
             <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;