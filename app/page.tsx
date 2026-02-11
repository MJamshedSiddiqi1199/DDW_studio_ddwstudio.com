import Navigation from '@/components/Navigation';
import Hero3D from '@/components/Hero3D';
import Stats from '@/components/Stats';
import Products3D from '@/components/Products3D';
import HowItWorks from '@/components/HowItWorks';
import CompanyInfo from '@/components/CompanyInfo';
import Testimonials from '@/components/Testimonials';
import Security from '@/components/Security';
import CTABand from '@/components/CTABand';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Noise Texture Overlay */}
      <div className="noise"></div>
      
      <Navigation />
      <Hero3D />
      <Stats />
      <Products3D />
      <HowItWorks />
      <CompanyInfo />
      <Testimonials />
      <Security />
      <CTABand />
      <Footer />
    </main>
  );
}