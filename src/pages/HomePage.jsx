import React, { useRef, useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GLBModel } from "../GLBModel";
import { motion } from "framer-motion";

const sharedStyle = {
  position: "relative",
  backdropFilter: "blur(8px)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  padding: "30px",
  borderRadius: "15px",
  marginBottom: "100px",
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: -100,
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6,
};

const HomePage = () => {
  const scrollY = useRef(0);
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ height: "400vh" }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -5,
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 4], fov: 50 }}
          style={{
            touchAction: "none",
          }}
        >
          <Suspense fallback={null}>
            <GLBModel scrollY={scrollY} />
          </Suspense>
        </Canvas>
      </div>

      <div className="relative z-10 flex flex-col gap-y-16 pt-[120px] lg:pt-0 px-4 md:block">
        <motion.div
          className="content-section p-8 rounded-[15px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] bg-[#48426d] backdrop:blur
               w-full md:w-[35%] md:absolute md:left-[10%] md:top-[30vh]"
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false ,amount: 0.3}}
          transition={{ duration: 0.2 }}
        >
          <h1>Bitcoin</h1>
          <p>
            Visionary new market category pioneered by Quranium. Designed for
            today’s complex digital needs and tomorrow’s quantum-powered era,
            DeQUIP sets the ultimate benchmark for unbreakable security,
            building a foundation that is as resilient as it is
            forward-thinking. This isn’t just a label; it’s a movement to
            redefine what security means in the decentralized age, establishing
            a standard that keeps pace with the relentless march of innovation.
          </p>
          <p>Bitcoin operates on a decentralized network...</p>
          <div className="relative group inline-block pt-2">
            <button className="relative  z-10 px-6 py-3  text-white font-semibold rounded-full overflow-hidden">
              Explore more
            </button>
            <span className="absolute inset-0 rounded-full border-2 border-[#99afdd] opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          className="content-section p-8 rounded-[15px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur bg-black/50
               w-full md:w-[35%] md:absolute md:left-[60%] md:top-[40vh]"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.2 }}
        >
          <h2>Key Features</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>If your company is decentralized and quantum-proof...</li>
            <li>Limited Supply: Only 21 million Bitcoin...</li>
            <li>
              Visionary new market category pioneered by Quranium. Designed for
              today’s complex digital needs and tomorrow’s quantum-powered era,
              DeQUIP sets the ultimate benchmark for unbreakable security,
              building a foundation that is as resilient as it is
              forward-thinking. This isn’t just a label; it’s a movement to
              redefine what security means in the decentralized age,
              establishing a standard that keeps pace with the relentless march
              of innovation.
            </li>
            <li>Transparent: All transactions are recorded...</li>
          </ul>
          <div className="relative group inline-block pt-2">
            <button className="relative  z-10 px-6 py-3 text-white font-semibold rounded-full overflow-hidden">
              Explore more
            </button>
            <span className="absolute inset-0 rounded-full border-2 border-[#99afdd] opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          className="content-section p-8 rounded-[15px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur bg-black/50
               w-full md:w-[35%] md:absolute md:left-[10%] md:top-[50vh]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.2 }}
        >
          <h2>Bitcoin Mining</h2>
          <p>
            Visionary new market category pioneered by Quranium. Designed for
            today’s complex digital needs and tomorrow’s quantum-powered era,
            DeQUIP sets the ultimate benchmark for unbreakable security,
            building a foundation that is as resilient as it is
            forward-thinking. This isn’t just a label; it’s a movement to
            redefine what security means in the decentralized age, establishing
            a standard that keeps pace with the relentless march of innovation.
          </p>
          <p>Miners are rewarded with newly created bitcoins...</p>
          <div className="relative group inline-block pt-2">
            <button className="relative  z-10 px-6 py-3 text-whitefont-semibold rounded-full overflow-hidden">
              Explore more
            </button>
            <span className="absolute inset-0 rounded-full border-2 border-[#99afdd] opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          className="content-section p-8 rounded-[15px] shadow-[0_10px_25px_rgba(0,0,0,0.2)] backdrop-blur bg-black/50
               w-full md:w-[40%] md:absolute md:left-[55%] md:top-[60vh]"
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.3 }}
        >
          <h2>Bitcoin's Impact</h2>
          <p>Bitcoin has revolutionized finance by introducing...</p>
          <p>
            Visionary new market category pioneered by Quranium. Designed for
            today’s complex digital needs and tomorrow’s quantum-powered era,
            DeQUIP sets the ultimate benchmark for unbreakable security,
            building a foundation that is as resilient as it is
            forward-thinking. This isn’t just a label; it’s a movement to
            redefine what security means in the decentralized age, establishing
            a standard that keeps pace with the relentless march of innovation.
          </p>
          <div className="relative group inline-block pt-2">
            <button className="relative  z-10 px-6 py-3 text-white font-semibold rounded-full overflow-hidden">
              Explore more
            </button>
            <span className="absolute inset-0 rounded-full border-2 border-[#99afdd] opacity-0 group-hover:opacity-100 group-hover:animate-ripple pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HomePage;
