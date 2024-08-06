/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#0047AB] to-black">
      <div className="bg-gray-200 rounded-full w-[550px] h-[550px] flex flex-col items-center justify-center shadow-lg">
        <h2 className="text-2xl font-bold italic text-black mb-16">
          Use time effectively!
        </h2>
        <h1 className="text-4xl font-bold text-white mb-8"></h1>
        <div className="text-8xl font-bold text-black absolute">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}

export default App;