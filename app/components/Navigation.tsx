import React from 'react'; 
import { ShoppingBagIcon, Search } from 'lucide-react';

const nav = [
  { id: '0', title: 'Store Locator', url: '#' },
  { id: '1', title: 'My Account', url: '#' },
  { id: '2', title: 'Careers', url: '#' },
  { id: '3', title: 'Contact Us', url: '#' },
];

function Navigation() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-transparent border-b border-none">
      <div className="flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <a className="text-2xl font-bold text-[rgba(95, 44, 30, 1)] uppercase text-white" href="#hero">
          Expressions
        </a>
        
        {/* Navigation Links */}
        <nav className="hidden lg:flex items-end space-x-8 text-white">
          {nav.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="text-[rgba(95, 44, 30, 1)] hover:text-[rgba(68, 30, 20, 1)] transition duration-200 font-medium"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6 text-white">
          <Search className="w-6 h-6 text-[rgba(95, 44, 30, 1)] hover:text-[rgba(68, 30, 20, 1)] cursor-pointer" />
          <ShoppingBagIcon className="w-6 h-6 text-[rgba(95, 44, 30, 1)] hover:text-[rgba(68, 30, 20, 1)] cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <nav className="flex lg:hidden bg-white shadow-md py-2 px-4 space-x-4 justify-around">
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className="text-[rgba(95, 44, 30, 1)] hover:text-[rgba(68, 30, 20, 1)] transition duration-200 font-medium uppercase text-sm"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navigation;
