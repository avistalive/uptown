"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";

import { LoginButton } from "./auth/login-button";
import LogoutButton from "./auth/logout-button";

import PremiumButton from "./ui/premium-button";

interface NavbarProps {
  signButton?: boolean;
  redirect?: string;
}

const Navbar = ({ signButton, redirect }: NavbarProps) => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavContent = ({ scrolled }: { scrolled: boolean }) => (
    <>
      <a href="/properties" className="hover:text-white transition-colors">Properties</a>
      <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
      
      {session ? (
        <div className="flex items-center gap-4">
          <PremiumButton text="Dashboard" href="/profile" variant={scrolled ? "white" : "primary"} />
          <LogoutButton>
            <button className="text-white/80 hover:text-white text-sm transition-colors border-l border-white/20 pl-4 py-1">
              Sign Out
            </button>
          </LogoutButton>
        </div>
      ) : (
        <LoginButton redirect={redirect}>
          <PremiumButton text="Sign In" variant={scrolled ? "white" : "primary"} />
        </LoginButton>
      )}
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-100 transition-all duration-300">
      <div className="mx-auto px-4 md:px-12 py-4">
        <div className={cn(
          "transition-all duration-300 rounded-full border px-6 py-2.5 flex justify-between items-center shadow-2xl",
          isScrolled 
            ? "bg-midnight border-white/20" 
            : "bg-black/10 backdrop-blur-md border-white/10"
        )}>
          <a href="#" className="shrink-0">
            <Image
              src={'/uptown-logo.png'}
              alt="Uptown Logo"
              width={120}
              height={40}
              className="brightness-0 invert h-auto"
            />
          </a>
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide text-white/90">
            <NavContent scrolled={isScrolled} />
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
      <div className={cn(
        "md:hidden absolute top-24 left-4 right-4 transition-all duration-500 ease-in-out",
        isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-4 opacity-0 invisible'
      )}>
        <nav className="flex flex-col items-center space-y-6 bg-midnight text-white p-10 rounded-4xl border border-white/5 shadow-2xl">
          <NavContent scrolled={true} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

