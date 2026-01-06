import AnimatedText from "~/components/AnimationText";
import type { Route } from "./+types/home";
import { motion } from "framer-motion";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "CC Group Supply" },
    { name: "description", content: "Welcome to Point Mobile Demo Project!" },
  ];
}

export default function Home() {
  return <main className="relative min-h-[130vh]">

    <section className="relative h-screen overflow-hidden">
      <div className="w-full h-full from-black/80 to-black/40 bg-linear-120 flex flex-col absolute
       plus-jakarta-sans  justify-center">
        <div className=" container-x mx-auto w-full space-y-2">

          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.6 }}
            whileInView={{ y: 0, opacity: 100 }}
          >
            <AnimatedText
              className="text-(--primary-color) plus-jakarta-sans max-w-[500px] font-bold "
              text="RFID Solutions for Enterprises" />
          </motion.h1>
          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 100 }}
            className=" ">

            <AnimatedText
              className="text-white max-w-[430px] plus-jakarta-sans text-3xl md:text-5xl"
              text="From hardware to system integration" />
          </motion.h2>
        </div>

        {/* Product Highlight Card */}
        <motion.div

          initial={{ y: 10, opacity: 0 }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 100 }}
          className="
        bg-white/5 backdrop-blur-xl
        border border-white/10
        max-w-3xl
        md:absolute md:right-0 md:mr-24
        m-4 p-10
        rounded-3xl shadow-2xl
      "
        >
          <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">
            PM95
          </span>

          <h3 className="text-3xl font-semibold text-white mt-2 mb-4">
            Point Mobile
          </h3>

          <p className="text-slate-400 leading-relaxed">
            Discover the 5G device designed for high-performance
            enterprise and industrial environments.
          </p>
        </motion.div>
      </div>

      <video
        className="w-full h-screen object-cover"
        muted
        autoPlay
        loop
        preload="false"
        src="/earth.mp4"></video>
      <img
        loading="lazy"
        className="w-full h-screen object-cover"
        src="/earth.jpg"
        alt="rfid phone" />






    </section>
  </main>
}
