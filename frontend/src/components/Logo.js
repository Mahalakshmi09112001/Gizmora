import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Brand Name with Modern Styling */}
      <h1 className="text-5xl font-extrabold text-gray-900 drop-shadow-lg tracking-wide">
        <span className="bg-gradient-to-r from-yellow-500 to-orange-700 text-transparent bg-clip-text">
          Gizmora
        </span>
        <span className="text-gray-700">™</span>
      </h1>
    </div>
  );
};

export default Logo;
