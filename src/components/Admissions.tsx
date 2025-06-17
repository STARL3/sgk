import React from 'react';
import InquiryForm from './InquiryForm';
import { Calendar, FileText, Users, CheckCircle } from 'lucide-react';

const Admissions = () => {
  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete our online application form with student and family information.'
    },
    {
      icon: Calendar,
      title: 'Schedule Visit',
      description: 'Tour our campus and meet with our admissions team and teachers.'
    },
    {
      icon: Users,
      title: 'Student Assessment',
      description: 'Age-appropriate evaluation to determine the best class placement.'
    },
    {
      icon: CheckCircle,
      title: 'Enrollment',
      description: 'Complete enrollment paperwork and prepare for the exciting journey ahead.'
    }
  ];

  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Admissions Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make the admissions process simple and welcoming. Start your child's 
            journey with us by submitting an inquiry form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {admissionSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 text-white rounded-full mb-4">
                  <step.icon className="h-8 w-8" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                We're excited to learn more about your child and how S G K School of Academy 
                can support their educational journey. Our admissions process is designed 
                to be thorough yet welcoming, ensuring the right fit for every family.
              </p>
              <p>
                <strong>Application Deadlines:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fall Semester: Applications due by March 1st</li>
                <li>Spring Semester: Applications due by November 1st</li>
                <li>Rolling admissions available for certain grades</li>
              </ul>
              <p>
                <strong>Required Documents:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Completed application form</li>
                <li>Previous school transcripts (if applicable)</li>
                <li>Birth certificate</li>
                <li>Immunization records</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-lg mt-6">
                <p className="text-blue-800">
                  <strong>Need financial assistance?</strong> We offer need-based financial aid 
                  and scholarships. Contact our admissions office to learn more about available options.
                </p>
              </div>
            </div>
          </div>

          <div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;