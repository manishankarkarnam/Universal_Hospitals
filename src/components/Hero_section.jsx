import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Providing Quality Healthcare for a{' '}
              <span className="text-blue-800">Brighter</span> Tomorrow
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Experience world-class medical care with our team of experienced doctors and state-of-the-art facilities. Your health is our top priority.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-800 text-white px-8 py-3 rounded-full flex items-center justify-center hover:bg-blue-900 transition">
                Book Appointment
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-blue-800 text-blue-800 px-8 py-3 rounded-full hover:bg-blue-50 transition">
                Our Services
              </button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="border-l-4 border-blue-800 pl-4">
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="border-l-4 border-blue-800 pl-4">
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600">Specialist Doctors</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img
              src="/api/placeholder/600/400"
              alt="Medical Team"
              className="rounded-2xl shadow-xl"
            />
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">24/7 Service</p>
                  <p className="text-sm text-gray-600">Emergency Care Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;