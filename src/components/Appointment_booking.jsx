import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const AppointmentBooking = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    reason: ''
  });

  const departments = [
    { id: 1, name: 'Cardiology', slots: 8 },
    { id: 2, name: 'Neurology', slots: 5 },
    { id: 3, name: 'Pediatrics', slots: 12 },
    { id: 4, name: 'Orthopedics', slots: 6 },
    { id: 5, name: 'General Medicine', slots: 15 }
  ];

  const doctors = {
    'Cardiology': [
      { id: 1, name: 'Dr. Sarah Johnson', availability: 'Mon, Wed, Fri' },
      { id: 2, name: 'Dr. Michael Chen', availability: 'Tue, Thu, Sat' }
    ],
    'Neurology': [
      { id: 3, name: 'Dr. David Williams', availability: 'Mon, Tue, Thu' },
      { id: 4, name: 'Dr. Emily Brown', availability: 'Wed, Fri, Sat' }
    ],
    'Pediatrics' : [
      { id: 5, name: 'Dr. John Davis', availability: 'Mon, Wed, Fri' },
      { id: 6, name: 'Dr. Emma Wilson', availability: 'Tue, Thu, Sat' }
    ],
    'Orthopedics' : [
      { id: 7, name: 'Dr. Olivia Moore', availability: 'Mon, Tue, Thu' },
      { id: 8, name: 'Dr. Ethan Lee', availability: 'Wed, Fri, Sat' }
    ],
    'General Medicine' : [
      { id: 9, name: 'Dr. Sophia Clark', availability: 'Mon, Tue, Thu' },
      { id: 10, name: 'Dr. William Rodriguez', availability: 'Wed, Fri, Sat' }
    ]
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', 
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate appointment confirmation
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    setStep(1);
    setFormData({
      department: '',
      doctor: '',
      date: '',
      time: '',
      name: '',
      phone: '',
      email: '',
      reason: ''
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Book an Appointment
      </h2>

      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= item ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {item}
              </div>
              {item < 3 && (
                <div className={`w-24 h-1 ${
                  step > item ? 'bg-blue-800' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between px-4 mt-2">
          <span className="text-sm text-gray-600">Select</span>
          <span className="text-sm text-gray-600">Schedule</span>
          <span className="text-sm text-gray-600">Details</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Department Selection */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.map((dept) => (
                <div
                  key={dept.id}
                  onClick={() => {
                    setFormData({ ...formData, department: dept.name });
                    setStep(2);
                  }}
                  className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.department === dept.name
                      ? 'border-blue-800 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-800'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-gray-900">{dept.name}</h3>
                  <p className="text-sm text-gray-600 mt-2">Available slots today: {dept.slots}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Doctor & Time Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                >
                  <option value="">Select a doctor</option>
                  {doctors[formData.department]?.map((doctor) => (
                    <option key={doctor.id} value={doctor.name}>
                      {doctor.name} ({doctor.availability})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Available Time Slots
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, time })}
                    className={`p-3 text-center rounded-lg border ${
                      formData.time === time
                        ? 'bg-blue-800 text-white border-blue-800'
                        : 'border-gray-300 hover:border-blue-800'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
                disabled={!formData.doctor || !formData.date || !formData.time}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-800 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AppointmentBooking;