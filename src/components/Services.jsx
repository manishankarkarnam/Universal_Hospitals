import React from 'react';
import { Heart, Brain, Stethoscope, Baby, Clipboard, Activity } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Comprehensive heart care services including diagnostics and treatment"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology",
      description: "Expert care for neurological conditions and disorders"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "General Medicine",
      description: "Primary healthcare services for all age groups"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Pediatrics",
      description: "Specialized medical care for infants, children, and adolescents"
    },
    {
      icon: <Clipboard className="w-8 h-8" />,
      title: "Pharmacy",
      description: "24/7 pharmacy services with home delivery options"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Care",
      description: "Round-the-clock emergency medical services"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide comprehensive healthcare services with state-of-the-art facilities and experienced medical professionals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-800 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-2xl">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800">
                  {service.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4">
                  <a
                    href="#"
                    className="text-blue-800 hover:text-blue-900 font-medium inline-flex items-center"
                  >
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;