import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileMenu = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  activeSection, 
  setActiveSection 
}: MobileMenuProps) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'trending', label: 'Trending' },
    { id: 'releases', label: 'New Releases' },
    { id: 'genres', label: 'Genres' },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/95 pt-20 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`py-4 text-xl font-medium border-b border-gray-800 ${activeSection === item.id ? 'text-purple-400' : 'text-gray-300'}`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
              Sign In
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;