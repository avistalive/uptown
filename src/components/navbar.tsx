"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { LoginButton } from "./auth/login-button";

import PremiumButton from "./ui/premium-button";

interface NavbarProps {
  signButton?: boolean;
  redirect?: string;
}

const Navbar = ({ signButton, redirect }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const NavContent = () => (
    <>
      <a href="#" className="hover:text-white transition-colors">Contact Us</a>
      {signButton ? (
        <LoginButton redirect={redirect}>
          <PremiumButton text="Sign In" />
        </LoginButton>
      ) : (
        <PremiumButton text="Available Properties" href="#" />
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      <div className="mx-auto px-4 md:px-12 py-4">
        <div className="bg-black/10 backdrop-blur-md rounded-full border border-white/10 px-6 py-2.5 flex justify-between items-center shadow-2xl">
          <a href="#" className="flex-shrink-0">
            <Image
              src={'/uptown-logo.png'}
              alt="Uptown Logo"
              width={120}
              height={40}
              className="brightness-0 invert"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-white/90">
            <NavContent />
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-24 left-4 right-4 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'}`}>
        <nav className="flex flex-col items-center space-y-6 bg-[#00141D] text-white p-10 rounded-[2rem] border border-white/5 shadow-2xl">
          <NavContent />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

