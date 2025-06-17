import React from 'react';
import ImageCarousel from './ImageCarousel';

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Inspiring Excellence in 
                <span className="text-blue-700 block">Every Student</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                At S G K School of Academy, we nurture young minds with innovative teaching methods, 
                state-of-the-art facilities, and a commitment to academic excellence that 
                prepares students for a bright future.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Apply for Admission
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">2+</div>
                <div className="text-sm text-gray-600 mt-1">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">100+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-700">100%</div>
                <div className="text-sm text-gray-600 mt-1">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="lg:pl-8">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;