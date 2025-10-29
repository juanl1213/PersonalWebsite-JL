import { Button } from './ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600">Hello, I'm</p>
              <h1 className="text-5xl lg:text-6xl text-gray-900">
                Juan
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600">
                Software Engineer
              </h2>
            </div>
            
            <p className="text-gray-700 text-lg max-w-xl">
              Information Systems Technology graduate with expertise in software engineering, 
              full-stack development, and identity access management. Passionate about creating 
              innovative solutions and continuous learning.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/juan-l-4348581b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Linkedin className="h-6 w-6 text-blue-600" />
              </a>
              <a
                href="https://github.com/juanl1213"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Github className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="mailto:juanleon0731966@gmail.com"
                className="p-2 rounded-full hover:bg-blue-100 transition-colors"
              >
                <Mail className="h-6 w-6 text-blue-600" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl transform rotate-3 opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1755541516450-644adb257ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MTU2NTU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional workspace"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
