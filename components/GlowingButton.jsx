import React from 'react';

function GlowingButton({ label }) {
  return (
    <button
      className="relative bg-gradient-to-r from-blue-600 to-blue-900 hover:to-blue-900 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-700 rounded-full py-2 px-3 mt-4 text-white font-semibold shadow-lg transition ease-out hover:-translate-y-1 hover:scale-110 duration-200"
    >
      <span className="absolute -inset-px rounded-full bg-blue-400 opacity-75 animate-pulse"></span>
      <span className="relative">{label}</span>
    </button>
    
  );
}

export default GlowingButton;