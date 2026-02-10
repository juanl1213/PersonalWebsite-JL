import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // EmailJS configuration - Uses environment variables or fallback to placeholder values
  // Create a .env file with these variables (see EMAILJS_SETUP.md for instructions)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_gwflxb9'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_ugm19z6'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'jzyyb_ZrgIss5FhOs'

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Juan Leon', // Your name
        },
        EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      
      // Reset error status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                placeholder="Your message..."
              />
            </div>

            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                Something went wrong. Please try again or contact me directly via email.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Or reach out directly:</p>
            <p className="text-gray-600 mb-4">Email: juanleon0731966@gmail.com</p>
            <p className="text-blue-600 mb-4"><a href="https://www.linkedin.com/in/juan-leon-4348581b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            {/* <div className="flex justify-center gap-6">
              <a
                href="mailto:your.email@example.com"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/juan-leon-4348581b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                GitHub
              </a> */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

