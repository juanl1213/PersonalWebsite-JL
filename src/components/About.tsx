const About = () => {
  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML/CSS',
    'Node.js',
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
              I'm a passionate web developer with a love for creating clean,
              efficient, and user-friendly applications. With a strong foundation
              in modern web technologies, I enjoy turning complex problems into
              simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>

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

