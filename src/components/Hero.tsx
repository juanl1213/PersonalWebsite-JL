const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white section-padding pt-32"
    >
      <div className="container-custom text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="text-primary-600">Juan Leon</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Software Developer & Information Security Professional 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#portfolio"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

