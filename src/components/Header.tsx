import { motion } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollY: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ 
  scrollY, 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  setActiveSection 
}: HeaderProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'trending', label: 'Trending' },
    { id: 'releases', label: 'New Releases' },
    { id: 'genres', label: 'Genres' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center gap-2 text-2xl font-bold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="text-purple-400" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Anime Babyy
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              className={`relative px-1 py-2 text-sm font-medium transition-colors ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                  layoutId="navIndicator"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Sign In Button */}
        <Button 
          variant="outline" 
          className="hidden md:flex bg-transparent border border-purple-500 hover:bg-purple-500/20 text-white"
        >
          Sign In
        </Button>
      </div>
    </header>
  );
};

export default Header;