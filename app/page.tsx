import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyTago from '@/components/WhyTago';
import Pricing from '@/components/Pricing';
import HowItWorks from '@/components/HowItWorks';
import Trust from '@/components/Trust';
import PromoVideo from '@/components/PromoVideo';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  return (
    <main>
      <Header />
      <FloatingNav />
      <Hero />
      <WhyTago />
      <Pricing />
      <HowItWorks />
      <Trust />
      <PromoVideo />
      <CtaSection />
      <Footer />
    </main>
  );
}
