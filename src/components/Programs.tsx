import React from 'react';
import { Baby, Palette, Calculator, Globe, Microscope, Music } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: 'Early Childhood (By Bachpan Play-School)',
      description: 'Foundation years focusing on social skills, creativity, and basic learning concepts.',
      features: ['Play-based learning', 'Social development', 'Early literacy', 'Creative expression']
    },
    {
      icon: Palette,
      title: 'Elementary (Grades 1-5)',
      description: 'Building strong academic foundations with hands-on learning experiences.',
      features: ['Core subjects mastery', 'Critical thinking', 'Arts integration', 'Character development']
    },
    {
      icon: Calculator,
      title: 'Middle School (Grades 6-8)',
      description: 'Preparing students for high school with advanced curriculum and leadership opportunities.',
      features: ['Advanced academics', 'Leadership programs', 'Technology integration', 'Community service']
    },
    {
      icon: Globe,
      title: 'High School (Grades 9-10)',
      description: 'College-prep curriculum with advanced courses and comprehensive college counseling.',
      features: ['Advanced courses', 'College prep', 'Career guidance', 'Academic excellence']
    },
    {
      icon: Microscope,
      title: 'STEM Programs',
      description: 'Cutting-edge science, technology, engineering, and mathematics education.',
      features: ['Modern labs', 'Research projects', 'Coding classes', 'Engineering design']
    },
    {
      icon: Music,
      title: 'Arts & Athletics',
      description: 'Comprehensive programs to develop talents and interests beyond academics.',
      features: ['Music ensembles', 'Visual arts', 'Sports teams', 'Drama productions']
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From early childhood through high school graduation, our comprehensive programs 
            are designed to meet every student where they are and help them reach their goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-lg mr-4">
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{program.description}</p>
              
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => document.querySelector('#admissions')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Learn More About Our Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;