import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { genreData } from '@/data/genreData';

const Categories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-2 text-purple-400 border-purple-400">
            Discover
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find your next favorite anime by exploring our curated categories. From action-packed adventures to heartwarming romances.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50">
              <TabsTrigger value="all">All Categories</TabsTrigger>
              <TabsTrigger value="popular">Most Popular</TabsTrigger>
              <TabsTrigger value="new">New Releases</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {genreData.map((genre, index) => (
                <motion.div
                  key={genre}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="relative overflow-hidden rounded-lg aspect-video"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/80 hover:from-purple-700/80 hover:to-pink-700/80 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-medium text-white">{genre}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {['popular', 'new', 'upcoming'].map((tab) => (
            <TabsContent key={tab} value={tab} className="mt-0">
              <div className="h-64 flex items-center justify-center">
                <p className="text-gray-400">Content for {tab} tab coming soon...</p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Categories;