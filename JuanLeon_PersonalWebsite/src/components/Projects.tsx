import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Folder, Calendar } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Astronomy Study Coach - iPhone App Development',
      period: 'September 2025 - Present',
      description: 'Interactive, AI-powered learning platform for mastering astronomy',
      achievements: [
        'Developed an interactive, AI-powered learning platform in React and TypeScript to help students master astronomy through engaging lessons, quizzes, and progress analytics.',
        'Integrated an intelligent chatbot to provide personalized study assistance, real-time explanations, and tailored learning recommendations.',
        'Designed and implemented core features including topic-based quizzes, flashcards with spaced repetition, and a constellation guide with detailed visual content.',
      ],
      technologies: ['React', 'TypeScript', 'AI Integration', 'Educational Design'],
    },
    {
      title: 'Programming HORSE - Software Engineering Capstone',
      period: 'August 2024 - December 2024',
      description: 'Educational game to enhance programming concept understanding',
      achievements: [
        'Developed an interactive educational game in Java to enhance students\' understanding of core programming concepts.',
        'Designed and implemented an SQL data storage system to track and analyze student performance, enabling personalized feedback and targeted learning.',
        'Collaborated with a team to integrate engaging and challenging game elements that adapt to individual learner needs.',
      ],
      technologies: ['Java', 'SQL', 'Game Development', 'Team Collaboration'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-900 mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <Folder className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 md:mt-0 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span className="whitespace-nowrap">{project.period}</span>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-indigo-600 mt-1.5">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-indigo-50 text-indigo-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
