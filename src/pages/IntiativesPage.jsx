import React from "react";
import InitiativeSection from "../components/IntiativeSection";

const InitiativesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-12">Our Initiatives</h1>

      <InitiativeSection
        title="Decentralized Identity"
        description="Empowering individuals with self-sovereign identity using blockchain technology. Users can control and share their personal data securely."
        imageUrl="/ChatGPT Image May 16, 2025, 03_36_55 PM.png"
      />

      <InitiativeSection
        title="Green Blockchain Protocols"
        description="Pioneering eco-friendly consensus mechanisms that reduce energy consumption while maintaining decentralization and security."
        imageUrl="/ChatGPT Image May 16, 2025, 03_36_55 PM.png"
        reverse
      />

      <InitiativeSection
        title="Smart Contracts for Social Impact"
        description="Leveraging smart contracts to transparently manage donations and distribute resources for humanitarian projects."
        imageUrl="/ChatGPT Image May 16, 2025, 03_36_55 PM.png"
      />
    </div>
  );
};

export default InitiativesPage;
