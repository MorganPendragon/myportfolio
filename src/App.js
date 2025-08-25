import React from "react";
import Navbar from "./navbar";
import Home from "./home";

export default function App() {
  return (
    <div className="bg-[#0E1A2B] min-h-screen text-white">
      {/* Navbar should only be here ONCE */}
      <Navbar />

      {/* Sections inside Home */}
      <Home />
    </div>
  );
}
