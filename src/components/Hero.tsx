import { motion } from 'framer-motion';
import { Play, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Hero = () => {
  const { toast } = useToast();

  const handleWatchNow = () => {
    toast({
      title: "Starting your anime journey!",
      description: "Preparing your personalized anime experience...",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
        <motion.div
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2071')] bg-cover bg-center"
          initial={{ scale: 1.1, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">Featured Anime</Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="block">Discover Your Next</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
              Anime Adventure
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Explore a vast collection of anime series and movies. From action-packed adventures to heartwarming stories, find your perfect anime match today.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              onClick={handleWatchNow}
            >
              <Play className="mr-2 h-4 w-4" /> Watch Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-purple-500 text-white hover:bg-purple-500/20"
            >
              Explore Catalog
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-black overflow-hidden">
                  <img 
                    src={`https://i.pravatar.cc/100?img=${i+10}`} 
                    alt="User avatar" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-white font-semibold">10K+</span> anime fans joined this week
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronRight size={24} className="rotate-90 text-white/70" />
      </div>
    </section>
  );
};

export default Hero;