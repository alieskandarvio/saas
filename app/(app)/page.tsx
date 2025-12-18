'use client';

import Header from '@/components/header';
import Hero from '@/components/hero';
import TrustedBrands from '@/components/trusted-brands';
import HowItWorks from '@/components/how-it-works';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials'; // تم تصحيح الإملاء هنا
import FAQ from '@/components/faq';
import CallToAction from '@/components/call-to-action';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrustedBrands />
      <div id="features">
        <Features />
      </div>
      <HowItWorks />
      <testimonials />
      <FAQ />
      <CallToAction />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>    
  );
}