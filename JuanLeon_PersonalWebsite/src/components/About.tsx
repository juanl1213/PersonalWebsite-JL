import { Card } from './ui/card';
import { Code, Users, Lightbulb, GraduationCap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in Java, Python, JavaScript, C++, and SQL with hands-on project experience',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Proven ability to work in multi-cultural teams and mentor others',
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Innovative approach to challenges with focus on impactful results',
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: '3.96 GPA in Bachelor\'s, 3.93 in Associate\'s degree',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-gray-700 text-lg text-center leading-relaxed">
            Driven and detail-oriented Information Systems Technology graduate with a strong foundation in 
            software engineering, programming languages, and cross-disciplinary collaboration. Adept at leveraging 
            technical skills alongside hands-on experience with frameworks and tools. I possess a proven record of 
            academic excellence and a passion for effective communication, mentorship, and innovative problem-solving 
            with a collaborative spirit and a commitment to continuous learning and impactful results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <highlight.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
