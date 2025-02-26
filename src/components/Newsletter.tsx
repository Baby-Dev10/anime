import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-pink-900/30"></div>
        <img 
          src="https://images.unsplash.com/photo-1560972550-aba3456b5564?q=80&w=2070" 
          alt="Anime background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-purple-600 hover:bg-purple-700">Stay Updated</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Anime Community
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter and never miss out on new releases, exclusive content, and special events.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;