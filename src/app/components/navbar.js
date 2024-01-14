// components/Navbar.jsx
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Djowyett Notif</div>

        {/* Le menu pour les écrans larges (taille moyenne et plus grande) */}
        <div className={`hidden md:flex space-x-4 ${isMenuOpen ? 'hidden' : ''}`}>
          <Link href="/" className="text-white">
            Accueil
          </Link>
        </div>

        {/* Le bouton du menu pour les écrans plus petits (mobiles et tablettes) 
        <div className="md:hidden flex items-center">
          <button className="text-white" onClick={toggleMenu}>
            ☰ 
          </button>
        </div>
        */}
        {/* Le menu déroulant sur les écrans plus petits (mobiles et tablettes) */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4">
            <Link href="/" className="text-white">
              Accueil
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
