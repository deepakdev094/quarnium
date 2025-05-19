import React from "react";

const InitiativeSection = ({ title, description, imageUrl, reverse = false }) => {
  return (
    <div className={`flex flex-col-reverse md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center gap-8 py-12`}>
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">{title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </div>
      <div className="w-full md:w-1/2 px-4">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};

export default InitiativeSection;
