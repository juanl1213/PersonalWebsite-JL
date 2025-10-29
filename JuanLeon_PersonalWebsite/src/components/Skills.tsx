import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Wrench, MessageSquare, Globe } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages & Frameworks',
      skills: ['Java', 'JavaScript', 'Python', 'C++', 'SQL', 'React', 'TypeScript'],
      color: 'blue',
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: ['Microsoft 365', 'Figma', 'Ren\'Py', 'SailPoint', 'Git', 'Word'],
      color: 'indigo',
    },
    {
      icon: MessageSquare,
      title: 'Soft Skills',
      skills: ['Teaching & Tutoring', 'Communication', 'Documentation', 'Collaboration', 'Problem Solving'],
      color: 'purple',
    },
    {
      icon: Globe,
      title: 'Languages',
      skills: ['English (Fluent)', 'Spanish (Fluent)', 'Japanese (Basic)'],
      color: 'green',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; icon: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-700', icon: 'text-blue-600' },
      indigo: { bg: 'bg-indigo-100', text: 'text-indigo-700', icon: 'text-indigo-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-700', icon: 'text-purple-600' },
      green: { bg: 'bg-green-100', text: 'text-green-700', icon: 'text-green-600' },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${colors.bg} rounded-lg`}>
                    <category.icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className={`${colors.bg} ${colors.text}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
