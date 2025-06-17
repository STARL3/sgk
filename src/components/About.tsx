import React from 'react';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Academic Excellence',
      description: 'Rigorous curriculum designed to challenge and inspire students to reach their full potential.'
    },
    {
      icon: Users,
      title: 'Expert Faculty',
      description: 'Passionate educators with advanced degrees and years of experience in their fields.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '95% of our graduates are accepted into their first-choice colleges and universities.'
    },
    {
      icon: Target,
      title: 'Holistic Development',
      description: 'Focus on character building, critical thinking, and leadership skills alongside academics.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose S G K School of Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over years, we've been committed to providing exceptional education 
            that prepares students for success in college, career, and life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90 leading-relaxed">
                To provide a nurturing environment where students develop critical thinking skills, 
                embrace creativity, and build the confidence to become tomorrow's leaders. We believe 
                every child has unique potential, and our role is to help them discover and develop it.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Small class sizes for personalized attention</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Modern facilities and technology integration</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Comprehensive extracurricular programs</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Strong parent-school partnership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;