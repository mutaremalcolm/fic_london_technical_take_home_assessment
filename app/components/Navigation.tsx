"use client";

import React, { useState } from 'react';
import { ShoppingBagIcon, Search, Menu } from 'lucide-react';

const nav = [
  { id: '0', title: 'Store Locator', url: '#' },
  { id: '1', title: 'My Account', url: '#' },
  { id: '2', title: 'Careers', url: '#' },
  { id: '3', title: 'Contact Us', url: '#' },
];

function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent border-b border-none">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a className="text-2xl font-bold text-chocolate uppercase" href="#hero">
          Expressions
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-end space-x-8">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-chocolate hover:text-chocolateHover transition duration-200 font-medium"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Search aria-label="Search" className="w-6 h-6 text-chocolate hover:text-chocolateHover cursor-pointer" />
          <ShoppingBagIcon aria-label="Shopping Bag" className="w-6 h-6 text-chocolate hover:text-chocolateHover cursor-pointer" />
          <button
            aria-label="Toggle menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-chocolate hover:text-chocolateHover"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden bg-white shadow-md py-2 px-4 flex flex-col space-y-4">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-chocolate hover:text-chocolateHover transition duration-200 font-medium uppercase text-sm"
            >
              {item.title}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navigation;
