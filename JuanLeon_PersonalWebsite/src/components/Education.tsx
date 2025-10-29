import { Card } from './ui/card';
import { GraduationCap, Award } from 'lucide-react';

export function Education() {
  const education = [
    {
      degree: "Bachelor's Degree in Information Systems Technology",
      concentration: 'Software Engineering',
      school: 'Miami Dade College',
      location: 'Miami, Florida',
      graduation: 'December 2024',
      gpa: '3.96',
    },
    {
      degree: 'Associate of Arts in Computer Science',
      school: 'Miami Dade College',
      location: 'Miami, Florida',
      graduation: 'April 2022',
      gpa: '3.93',
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl text-gray-900 mb-1">{edu.degree}</h3>
                      {edu.concentration && (
                        <p className="text-gray-600 mb-1">
                          Concentration: {edu.concentration}
                        </p>
                      )}
                      <p className="text-gray-700">
                        {edu.school}, {edu.location}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-right">
                      <p className="text-gray-600">{edu.graduation}</p>
                      <div className="flex items-center gap-1 mt-1 justify-end">
                        <Award className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-600">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
