import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import MobileMenu from '@/components/MobileMenu';
import Hero from '@/components/Hero';
import FeaturedAnime from '@/components/FeaturedAnime';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground />

      <Header 
        scrollY={scrollY} 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      <main className="relative z-10">
        <Hero />
        <FeaturedAnime />
        <Categories />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}

export default App;