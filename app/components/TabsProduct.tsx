import { CometCard } from "components/ui/comet-card";
import { motion } from "framer-motion";

export default function TabsProduct() {
    return (
        <div className="flex md:flex-row flex-col max-w-5xl mx-auto">
            {/* image */}
            <CometCard className="">
                <motion.div
                  initial={{  opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    whileInView={{  opacity: 100 }}
                 className="rounded-3xl md:flex-1/2 overflow-hidden aspect-video w-full">
                    <img
                        className="w-full h-full object-cover"
                        src="https://www.chainway.net/upload/config/9d71893e-50ea-49dd-8d5c-84fe21d3820c.jpg"
                        alt="rfid product" />
                </motion.div>
            </CometCard>
            {/* detail */}
            <div className="md:p-16 p-4 text-white md:flex-1/2">
                <motion.img 
                 initial={{  opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    whileInView={{  opacity: 100 }}
                className="w-[120px] mb-4" 
                src="https://www.biastechnology.com/wp-content/uploads/2022/11/pointmobile-logo.png" 
                alt="point mobile logo" />
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    className="text-3xl font-medium">
                    The Operating System 9 delivers all-new OS
                </motion.div>
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 100 }}
                    transition={{ duration: 0.8, delay: 0.3 }}

                    className="text-xl text-white/70 mt-5" >
                    The Operating System 9 delivers all-new OS
                </motion.div>
            </div>
        </div>
    )
}
