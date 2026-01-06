import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface RFIDProduct {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
}

interface CarouselProps {
  products: RFIDProduct[];
}

const GlassCarousel: React.FC<CarouselProps> = ({ products }) => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % products.length);
  const prev = () => setActive((prev) => (prev - 1 + products.length) % products.length);

  return (
    <div className="relative  mx-auto h-full w-full flex items-center justify-center p-4 bg-slate-950 overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`, width: '30px' , height:'30px' }} />

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "circOut" }}
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full"
        >
          {/* Product Image - Clean "Floating" Look */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-blue-500/30 transition-all" />
              <img 
                src={products[active].image} 
                alt={products[active].name}
                className="relative w-64 h-64 object-contain drop-shadow-[0_20px_50px_rgba(59,130,246,0.5)]"
              />
            </div>
          </div>

          {/* Glassmorphism Content Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
              {products[active].category}
            </span>
            <h2 className="text-3xl font-semibold text-white mt-2 mb-4">
              {products[active].name}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {products[active].description}
            </p>
            
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20">
              Technical Specifications
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-10 left-10 flex gap-3">
        <button onClick={prev} className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={next} className="p-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/20 transition-all">
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      
      {/* Pagination Indicators */}
      <div className="absolute bottom-12 right-12 flex gap-2">
        {products.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 transition-all duration-300 rounded-full ${i === active ? 'w-8 bg-blue-500' : 'w-2 bg-white/20'}`} 
          />
        ))}
      </div>
    </div>
  );
};

export default GlassCarousel;