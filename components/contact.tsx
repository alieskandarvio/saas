import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";
import { CustomBadge } from '@/components/custom/badge';
import { CustomSubtitle } from '@/components/custom/subtitle';
import { CustomTitle } from '@/components/custom/title';
import Link from 'next/link';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast("Transmission Received! Our team will contact you shortly.");
    form.reset();
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Direct Email',
      content: 'contact@aemusic.io',
      link: 'mailto:contact@aemusic.io'
    },
    {
      icon: Phone,
      title: 'WhatsApp / Support',
      content: 'Available 24/7',
      link: '#'
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      content: 'Global Digital Agency\nBased in UAE',
      link: '#'
    },
  ];

  return (
    // الخلفية سوداء تماماً مع حدود خضراء خفيفة جداً
    <section id="contact" className="py-24 bg-black border-t border-[#00FF00]/10 relative overflow-hidden">
      
      {/* تأثير توهج خلفي */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="flex items-center justify-center flex-col text-center gap-5 mb-20"
        >
          <CustomBadge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20">
            Secure Connection
          </CustomBadge>

          <CustomTitle className="text-white">
            Send Your <span className="text-[#00FF00]">Demo</span>
          </CustomTitle>
          
          <CustomSubtitle className="text-zinc-400 max-w-2xl">
            Ready to take your sound to the next level? Fill out the form below 
            and let’s start your journey from zero to global charts.
          </CustomSubtitle>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-black mb-6 text-white italic uppercase tracking-tighter">
                Let&apos;s Build <span className="text-[#00FF00]">Your Legacy</span>
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Whether it&apos;s a full production, mixing, or digital marketing strategy, 
                our agency is built to amplify your voice.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-5 group"
                >
                  <div className="size-12 rounded-none border border-[#00FF00]/20 flex items-center justify-center group-hover:bg-[#00FF00] group-hover:text-black transition-all duration-300">
                    <info.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-sm mb-1">
                      {info.title}
                    </h4>
                    <Link href={info.link} className="text-zinc-500 hover:text-[#00FF00] transition-colors whitespace-pre-line font-medium">
                      {info.content}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          > 
            <Card className="bg-zinc-900/50 border-[#00FF00]/10 backdrop-blur-sm rounded-none">
              <CardContent className="p-8">            
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-300 uppercase text-xs tracking-widest">Artist Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter name" {...field} className="bg-black border-zinc-800 focus:border-[#00FF00] rounded-none text-white h-12" />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-zinc-300 uppercase text-xs tracking-widest">Email Address</FormLabel>
                            <FormControl>
                              <Input placeholder="artist@io.com" type="email" {...field} className="bg-black border-zinc-800 focus:border-[#00FF00] rounded-none text-white h-12" />
                            </FormControl>
                            <FormMessage className="text-red-500 text-xs" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-300 uppercase text-xs tracking-widest">Service Type</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Full Production / Mixing" {...field} className="bg-black border-zinc-800 focus:border-[#00FF00] rounded-none text-white h-12" />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zinc-300 uppercase text-xs tracking-widest">Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell us about your musical vision..."
                              className="min-h-[120px] bg-black border-zinc-800 focus:border-[#00FF00] rounded-none text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-500 text-xs" />
                        </FormItem>
                      )}
                    />

                    <Button  
                      size="lg"
                      type="submit" 
                      className="w-full bg-[#00FF00] text-black hover:bg-white font-black uppercase italic rounded-none h-14 transition-all" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'TRANSMITTING...' : 'INITIATE CONTACT'}
                      {!isSubmitting && <Send className="ml-2 size-4" />}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;