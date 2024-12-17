import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-chocolate">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-light text-chocolate tracking-wide">
              Expressions
            </h2>
            <p className="text-sm text-chocolate/80 leading-relaxed">
              Crafting moments of joy through artisanal brownies, made fresh with premium ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-chocolate">Quick Links</h3>
            <ul className="space-y-2">
              {['Menu', 'Order Now', 'About Us', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-sm hover:text-chocolate/70 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-chocolate">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>info@expressionsbrownies.co.uk</li>
              <li>+44 1111 223344</li>
              <li className="text-sm text-chocolate/70">
                123 Baker Street<br />
                London, UK 10001
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-light text-chocolate">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-chocolate/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Links */}
            <div className="flex space-x-6">
              {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                <a
                  key={social}
                  href={`#${social.toLowerCase()}`}
                  className="text-sm hover:text-chocolate/70 transition-colors duration-200"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-sm text-chocolate/70">
              © {new Date().getFullYear()} Expressions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
