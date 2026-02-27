import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2B47] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-serif text-xl mb-4 text-[#C5A572]">Aniagolu Legacy</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Honoring the life and legacy of Justice Anthony Aniagolu - a beacon of justice, 
              leadership, and service to humanity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C5A572]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  About Justice Aniagolu
                </Link>
              </li>
              <li>
                <Link to="/history" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  History & Stories
                </Link>
              </li>
              <li>
                <Link to="/archives" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Archives
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C5A572]">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/media" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-[#C5A572]">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="mt-1 text-[#C5A572] flex-shrink-0" />
                <span className="text-gray-300 text-sm">Aniagolu Foundation, Nigeria</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="mt-1 text-[#C5A572] flex-shrink-0" />
                <a href="mailto:info@aniagolu.org" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  info@aniagolu.org
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={16} className="mt-1 text-[#C5A572] flex-shrink-0" />
                <a href="tel:+234" className="text-gray-300 hover:text-[#C5A572] transition-colors text-sm">
                  +234 XXX XXX XXXX
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2D4263] pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Aniagolu Legacy Foundation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#C5A572] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#C5A572] transition-colors text-sm">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
