const About = () => {
  const education = [
    {
      degree: 'College Credit Certificate: Cybersecurity Analyst',
      institution: 'Miami Dade College',
      location: 'Miami, Florida',
      year: 'January 2026 - Present',
      description: 'Focused on essential cybersecurity skills and knowledge needed to secure networks, infrastructure, and use strategies to reduce the risk of incidents.',
    },
    {
      degree: 'Bachelor of Science in Information Systems Technology',
      institution: 'Miami Dade College',
      location: 'Miami, Florida',
      year: 'January 2023 - December 2024',
      description: 'Focused on software development, database management, and system design.',
    }
  ]

  const workExperience = [
    {
      title: 'Software Engineer Intern',
      company: 'WTRway World',
      location: 'Miami, Florida',
      year: 'November 2025 - January 2026',
      description: 'Developed, tested, and deployed mobile application features using Flutter (frontend) and Java (backend) while collaborating closely with a startup engineering team in agile sprint cycles.',
    },
    {
      title: 'Identity and Access Management Intern',
      company: 'City National Bank of Florida',
      location: 'Miami, Florida',
      year: 'May 2025 - August 2025',
      description: 'Supported IAM initiatives by participating in Identity Governance and Administration platform, SailPoint, migration projects and engaging with stakeholders on enterprise security protocols and audit readiness. ',
    },
    {
      title: 'Technology/Programming College Tutor',
      company: 'Miami Dade College',
      location: 'Miami, Florida',
      year: 'May 2024 - April 2025',
      description: 'Provided students with academic tutoring in Java, Python, C++ programming, and Microsoft 365 platforms serving as a role model and motivating them to achieve their academic goals. ',
    }
  ]

  const skills = [
    'React',
    'JavaScript',
    'Python',
    'C++',
    'Java',
    'HTML/CSS',
    'Flutter',
    'Node.js',
    'MySQL',
    'MongoDB',
    'PostgreSQL',
    'SQLite',
    'SailPoint',
    'Git',
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-12"></div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Hi, I’m Juan Leon, a passionate software developer with a strong foundation in Java, JavaScript, Python, and C++.
               I enjoy turning complex ideas into user-friendly applications and exploring new technologies to expand my skill set.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
            When I’m not coding, I love learning languages, diving into tech trends, and tackling new challenges that push me to grow.
            This portfolio is a glimpse into the projects I’ve built, the problems I’ve solved, and the skills I’m continuously developing..
            </p>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-600 pl-6 py-2"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                      {edu.location} • {edu.year}
                    </p>
                    {edu.description && (
                      <p className="text-gray-600 mt-2">{edu.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Work Experience
              </h3>
              <div className="space-y-6">
                {workExperience.map((job, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-600 pl-6 py-2"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-1">
                      {job.title}
                    </h4>
                    <p className="text-primary-600 font-medium mb-1">
                      {job.company}
                    </p>
                    <p className="text-gray-500 text-sm mb-2">
                      {job.location} • {job.year}
                    </p>
                    {job.description && (
                      <p className="text-gray-600 mt-2">{job.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

