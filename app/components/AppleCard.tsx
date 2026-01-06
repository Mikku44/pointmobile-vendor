

import { Card, Carousel } from "components/ui/apple-cards-carousel";
import {motion} from "framer-motion";


export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <motion.h2 
           initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 100 }}
      className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-medium text-white font-sans">
       A New Standard of Excellence
      </motion.h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    id: 1,
    category: "Industrial UHF",
    title: "Omni-ID Max RFID Tag",
    src: "https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&q=80&w=800",
    content: (
      <div className="space-y-4">
        <p className="text-slate-800">
          The Omni-ID Max is a high-performance long-range RFID tag designed for tracking heavy machinery and metallic assets.
        </p>
        <ul className="list-disc pl-5 text-slate-600 space-y-2">
          <li>Read Range: Up to 15 meters</li>
          <li>Operating Temp: -40°C to +85°C</li>
          <li>IP Rating: IP68 (Waterproof)</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    category: "Security & Access",
    title: "NFC Smart Identity Card",
    src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800",
    content: (
      <div className="space-y-4">
        <p className="text-slate-800">
          Encrypted DESFire EV3 smart cards for secure organizational access control and contactless payment systems.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-4">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="block text-blue-700 font-bold">AES-128</span>
            <span className="text-xs text-slate-500">Encryption Standard</span>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10">
            <span className="block text-blue-700 font-bold">13.56 MHz</span>
            <span className="text-xs text-slate-500">Frequency</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    category: "Fixed Readers",
    title: "Zebra FX9600 Industrial Reader",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    content: (
      <p className="text-slate-800">
        Deliver maximum visibility into your inventory with high-speed automated data capture. This 8-port reader is the backbone of high-volume logistics.
      </p>
    ),
  },
  {
    id: 4,
    category: "Software",
    title: "CC Group Cloud Tracker",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    content: (
      <p className="text-slate-800">
        A unified dashboard for managing all RFID assets across global locations. Includes real-time alerts and AI-driven stock predictions.
      </p>
    ),
  }
];