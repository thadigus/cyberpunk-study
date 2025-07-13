import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest text-cyan-400 drop-shadow-lg mb-6">
        Cyberpunk Study
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-xl text-center">
        Mix lofi beats with live police scanner streams for the ultimate
        underground study zone.
      </p>
      <div className="mt-10">
        <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded-xl shadow-lg transition-all">
          Launch Player
        </button>
      </div>
    </div>
  );
}

export default App;
