import type { Route } from "./+types/home";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "P'Chookie - Point Mobile Demo Project" },
    { name: "description", content: "Welcome to Point Mobile Demo Project!" },
  ];
}

export default function Home() {
  return <main className="relative max-h-screen overflow-hidden">

    <div className="w-full h-full bg-black/50 flex flex-col absolute plus-jakarta-sans items-center justify-center">
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6 }}
        whileInView={{ y: 0, opacity: 100 }}
        className="text-red-500 font-bold text-xl">Our Product</motion.h1>
      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0, opacity: 100 }}
        className="text-5xl text-white font-extrabold">RFID SOLUTION</motion.h2>
    </div>
    <img
      className="w-full h-screen object-cover"
      src="https://images.unsplash.com/photo-1587906697341-bfbde76785c7?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="rfid phone" />
  </main>
}
