import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CommunityFeatures from '@/components/CommunityFeatures';
import VideoFeatures from '@/components/VideoFeatures';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <Header />
      <Hero />
      <Features />
      <CommunityFeatures />
      <VideoFeatures />
      <Benefits />
      <Testimonials />
      <Footer />
    </main>
  );
}