import React, { useState } from 'react';
import { Heart, Brain, Stethoscope, Activity, Microscope, Hospital } from 'lucide-react';

const InteractiveServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cardiology",
      description: "Expert heart care with advanced diagnostic and treatment facilities",
      features: [
        "24/7 Emergency Cardiac Care",
        "Non-invasive Cardiac Testing",
        "Cardiac Rehabilitation",
        "Heart Surgery",
        "Preventive Cardiology"
      ],
      stats: {
        success: "98%",
        patients: "10,000+",
        specialists: "15"
      }
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Neurology",
      description: "Comprehensive care for neurological disorders and conditions",
      features: [
        "Advanced Neuroimaging",
        "Epilepsy Monitoring",
        "Movement Disorders",
        "Neuro-rehabilitation",
        "Stroke Care"
      ],
      stats: {
        success: "95%",
        patients: "8,000+",
        specialists: "12"
      }
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Internal Medicine",
      description: "Complete healthcare solutions for adults",
      features: [
        "Preventive Care",
        "Chronic Disease Management",
        "Health Screenings",
        "Vaccination Services",
        "Lifestyle Medicine"
      ],
      stats: {
        success: "97%",
        patients: "15,000+",
        specialists: "20"
      }
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emergency Care",
      description: "24/7 emergency medical services with rapid response",
      features: [
        "Trauma Care",
        "Critical Care",
        "Rapid Response Team",
        "Emergency Surgery",
        "Ambulance Services"
      ],
      stats: {
        success: "99%",
        patients: "20,000+",
        specialists: "25"
      }
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: "Laboratory",
      description: "State-of-the-art diagnostic and testing facilities",
      features: [
        "Advanced Diagnostics",
        "Molecular Testing",
        "Pathology Services",
        "Quick Results",
        "Home Sample Collection"
      ],
      stats: {
        success: "99.9%",
        patients: "50,000+",
        specialists: "30"
      }
    },
    {
      icon: <Hospital className="w-8 h-8" />,
      title: "Specialized Care",
      description: "Expert care in various medical specialties",
      features: [
        "Oncology",
        "Orthopedics",
        "Gastroenterology",
        "Pulmonology",
        "Endocrinology"
      ],
      stats: {
        success: "96%",
        patients: "12,000+",
        specialists: "40"
      }
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Medical Services
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive healthcare services with state-of-the-art facilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                {/* Features list - shows when active */}
                <div className={`transition-all duration-300 ${
                  activeService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="space-y-2 mt-4">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t">
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-800">
                        {service.stats.success}
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-800">
                        {service.stats.patients}
                      </div>
                      <div className="text-sm text-gray-600">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-blue-800">
                        {service.stats.specialists}
                      </div>
                      <div className="text-sm text-gray-600">Specialists</div>
                    </div>
                  </div>
                </div>

                <button className="mt-4 text-blue-800 hover:text-blue-900 font-medium inline-flex items-center">
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
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;