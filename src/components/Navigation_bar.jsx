import React from 'react';
import { Menu, X, Phone, Hospital } from 'lucide-react';
import './Navigation_bar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Services", href: "/services" },
    { title: "Doctors", href: "/doctors" },
    { title: "Appointments", href: "/appointments" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" }
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            {/* <img className="h-12 w-auto" src='img-address' alt="Aisha Hospitals Logo" /> */}
            <Hospital className="h-12 w-12 text-custom-green" />
            <span className="ml-3 text-2xl font-bold text-blue-800">Universal Hospitals</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-gray-600 hover:text-blue-800 px-3 py-2 text-sm font-medium"
              >
                {item.title}
              </a>
            ))}
            <button className="bg-blue-800 text-white px-6 py-2 rounded-full flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Emergency: 911
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.title}
                </a>
              ))}
              <button className="w-full bg-blue-800 text-white px-6 py-2 rounded-full flex items-center justify-center mt-4">
                <Phone className="w-4 h-4 mr-2" />
                Emergency: 911
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;