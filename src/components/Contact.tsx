import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Naduvathi, Soukya Road', 'Bengaluru 560067']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main Office: +91 7676116565', 'Admissions: +91 9448040193']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['sgkschoolofacademy@gmail.com']
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 4:00 PM', 'Saturday: 9:00 AM - 1:00 PM']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Contact us to schedule a visit, ask questions, 
            or learn more about our programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-lg mb-4">
                <info.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Experience our vibrant learning environment firsthand. We offer campus tours 
                  Monday through Friday at 10:00 AM and 2:00 PM, and Saturday mornings at 10:00 AM.
                </p>
                <p>
                  During your visit, you'll have the opportunity to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Tour our modern classrooms and facilities</li>
                  <li>Meet our dedicated faculty and staff</li>
                  <li>Observe classes in session (when school is in session)</li>
                  <li>Learn about our programs and philosophy</li>
                  <li>Ask questions about admissions and enrollment</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-6">
                  <p className="text-blue-800 font-semibold">
                    Ready to schedule your visit? 
                  </p>
                  <p className="text-blue-700">
                    Call us at +91 7676116565 or fill out our inquiry form above.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-blue-700" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Find Us</h4>
                <p className="text-gray-600 mb-4">
                  Located in Naduvathi, Soukya Road, Bengaluru - easily accessible by car or public transit.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=S+G+K+School+of+Academy,+Naduvathi,+Soukya+Road,+Bengaluru+560067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;