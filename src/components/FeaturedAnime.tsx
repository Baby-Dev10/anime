import { motion } from 'framer-motion';
import { ChevronRight, Star, Calendar, Users, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { animeData } from '@/data/animeData';

const FeaturedAnime = () => {
  const { toast } = useToast();

  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <Badge variant="outline" className="mb-2 text-purple-400 border-purple-400">
              Trending Now
            </Badge>
            <h2 className="text-3xl font-bold">Featured Anime</h2>
          </div>
          <Button variant="link" className="text-purple-400 flex items-center gap-1">
            View All <ChevronRight size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {animeData.map((anime, index) => (
            <motion.div
              key={anime.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <Card className="bg-gray-900/50 border-gray-800 overflow-hidden h-full">
                <div className="relative aspect-[2/3] overflow-hidden">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-purple-600">{anime.genre.split(',')[0]}</Badge>
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Star size={14} className="fill-yellow-400 mr-1" />
                        {anime.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{anime.title}</h3>
                  </div>
                  <Button 
                    size="icon" 
                    className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                    onClick={() => {
                      toast({
                        title: `Added to Watchlist`,
                        description: `${anime.title} has been added to your watchlist`,
                      });
                    }}
                  >
                    <Play size={16} className="text-white" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {anime.year}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={14} />
                      {Math.floor(Math.random() * 900) + 100}K
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnime;