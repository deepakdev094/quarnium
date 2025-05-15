import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white bg-[#323C29] ">
      <motion.div
        className="pt-32 p-10 max-w-3xl mx-auto  "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">About Quranium</h1>
        <p className="text-lg leading-relaxed">
          Quranium is a decentralized blockchain network dedicated to delivering innovative solutions in secure digital finance and technology. Our mission is to bring transparency, decentralization, and security to every corner of the digital world.
        </p>
        <p className="mt-4">
          With an ecosystem built around advanced cryptography and scalable infrastructure, Quranium supports a wide range of applications—from QSafe wallets to mining solutions.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutPage;
