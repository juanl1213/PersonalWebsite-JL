const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            © {currentYear} Juan Leon. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer

