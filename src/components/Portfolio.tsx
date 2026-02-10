interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  imageUrl?: string
  liveUrl?: string
  githubUrl?: string
}

const Portfolio = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SyllabiQ',
      description:
        'AI-powered survey platform that collects student feedback and generates syllabus-aware suggestions for instructors to improve their classes.',
      technologies: ['React', 'scikit-learn', 'FastAPI', 'Python', 'Node.js'],
      liveUrl: '#',
      githubUrl: 'https://github.com/juanl1213/SyllabiQ',
    },
    {
      id: 2,
      title: 'FanConnect',
      description:
        'FanConnect is a social app that connects sports fans attending the same game or event, helping them find and meet others to sit with, socialize, and share the live match experience together.',
      technologies: ['TypeScript', 'Axios', 'HTML/CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/juanl1213/FanConnect-ClassProject',
    },
  ]

  return (
    <section id="portfolio" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A selection of projects I've worked on. Each project represents
            unique challenges and solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-primary-600 text-4xl font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 font-medium text-sm"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

