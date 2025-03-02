"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Accueil", path: "/" },
    { name: "À Propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Isolation", path: "/isolation" },
    { name: "Peinture", path: "/peinture" },
    { name: "Plaquiste", path: "/plaquiste" },
    { name: "Revêtement", path: "/revetement" },
  ];

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <motion.nav 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className={`fixed top-0 w-full z-10 transition-all duration-300 bg-white shadow-lg`}
        >
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
            <Link href="/">
              <Image src="/logo.png" alt="Anfane Logo" width={120} height={50} className="cursor-pointer" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              {menuItems.map((item) => (
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  key={item.path}
                >
                  <Link
                    href={item.path}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-all font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="px-4 py-2 flex items-center space-x-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  <span>Nos Services</span>
                  <ChevronDown size={18} />
                </button>
                {servicesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-20"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className="block px-4 py-3 text-gray-700 hover:bg-blue-600 hover:text-white"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Social Icons Bottom Right */}
        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-10">
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
          >
            <Image src="/icons/facebook.svg" alt="Facebook" width={30} height={30} />
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.2 }}
            href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition flex items-center justify-center"
          >
            <Image src="/icons/instagram.svg" alt="Instagram" width={30} height={30} />
          </motion.a>
        </div>

        {/* Page Content */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="pt-20"
        >
          {children}
        </motion.div>
      </body>
    </html>
  );
}