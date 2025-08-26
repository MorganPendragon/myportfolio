import React, { useEffect } from 'react';
import Navbar from "./navbar";
import Home from "./home";

export default function App() {
  useEffect(() => {
    document.title = "Mark Vincent Agustin";
  }, []);

  return (
    <div className="bg-[#0E1A2B] min-h-screen text-white">
      <Navbar />
      <Home />
    </div>
  );
}