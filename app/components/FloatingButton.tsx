import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsMailbox } from "react-icons/bs";


export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(true)}
        initial={{ width: 60 }}
        whileHover={{ width: 150 }}
        className="
          fixed bottom-6 right-6 
          h-[60px] 
          bg-black text-white 
          rounded-full 
          flex  gap-3 
          shadow-lg 
          overflow-hidden 
          px-4 group items-center
          transition-all
        "
      >
        <BsMailbox className="size-6 min-w-6" />

        {/* Label shows only on hover */}
        <motion.span
         
          className="whitespace-nowrap w-0 opacity-0 group-hover:opacity-100
           group-hover:w-[100px] duration-300 overflow-hidden text-[15px] font-medium"
        >
          Newsletter
        </motion.span>

        
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="
              fixed inset-0 bg-black/40 backdrop-blur-sm
              flex items-center justify-center p-4 z-[100]
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-semibold mb-4">Join Newsletter</h2>

              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    className="mt-1 w-full border-zinc-300 border rounded-lg px-3 py-2"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Company</label>
                  <input
                    className="mt-1 w-full border-zinc-300 border rounded-lg px-3 py-2"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full border-zinc-300 border rounded-lg px-3 py-2"
                    placeholder="you@example.com"
                  />
                </div>

                <button
                  type="button"
                  className="
                    mt-4 w-full bg-black text-white 
                    py-2 rounded-lg font-medium
                  "
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
