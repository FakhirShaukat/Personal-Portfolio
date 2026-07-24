import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const saveResume = () => {
      const resumeUrl = '/src/resume/Fakhir_Shaukat_Resume.pdf'
      const link = document.createElement('a')
      link.href = resumeUrl
      link.download = 'Fakhir_Shaukat_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  })

  const scrollToDiv = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 px-4 md:px-10 py-3 flex justify-between items-center transition-all duration-300
        ${scrolled
            ? 'bg-black/90 backdrop-blur-md shadow-lg translate-y-0'
            : 'bg-transparent translate-y-2'}
        `}
      >

        {/* Logo */}
        <div className={`font-bold text-lg ${scrolled ? 'text-white' : 'text-black'}`}>
          <a href="#home">Dev.Fakhir</a>
        </div>

        {/* Desktop Links */}
        <div className={`hidden md:flex ${scrolled ? 'text-white' : 'text-black'}`}>
          <ul className='flex gap-8'>
            <li onClick={() => scrollToDiv("home")} className='cursor-pointer hover:opacity-70'><a href="#home">Home</a></li>
            <li onClick={() => scrollToDiv("about")} className='cursor-pointer hover:opacity-70'><a href="#about">About Me</a></li>
            <li onClick={() => scrollToDiv("experience")} className='cursor-pointer hover:opacity-70'><a href="#experience">Experience</a></li>
            <li onClick={() => scrollToDiv("projects")} className='cursor-pointer hover:opacity-70'><a href="#projects">Projects</a></li>
            <li onClick={() => scrollToDiv("contact")} className='cursor-pointer hover:opacity-70'><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Button */}
        <div className='hidden md:block'>
          <a href="/Fakhir_Shaukat_Resume.pdf" download>
            <button
              className={`border rounded-md px-4 py-2 text-sm transition
              ${scrolled
                  ? 'bg-red-500 text-white border-red-500 hover:bg-red-600 hover:text-white'
                  : 'bg-transparent text-black border-black hover:bg-black hover:text-white'}
            `}
            >
              Download Resume
            </button>
          </a>
        </div>

        {/* Hamburger */}
        <div className={`md:hidden ${scrolled ? 'text-white' : 'text-black'}`}>
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 w-2/3 sm:w-1/2 h-full bg-black/90 backdrop-blur-md text-white flex flex-col gap-6 p-6 z-50
    transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="w-full flex justify-end">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-sm font-bold hover:text-gray-300 transition"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-6 w-full mt-6">
          <li onClick={() => scrollToDiv("home")} className="cursor-pointer hover:text-gray-300 transition"><a href="#home">Home</a></li>
          <li onClick={() => scrollToDiv("about")} className="cursor-pointer hover:text-gray-300 transition"><a href="#about">About Me</a></li>
          <li onClick={() => scrollToDiv("experience")} className="cursor-pointer hover:text-gray-300 transition"><a href="#experience">Experience</a></li>
          <li onClick={() => scrollToDiv("projects")} className="cursor-pointer hover:text-gray-300 transition"><a href="#projects">Projects</a></li>
          <li onClick={() => scrollToDiv("contact")} className="cursor-pointer hover:text-gray-300 transition"><a href="#contact">Contact</a></li>
        </ul>

        {/* Connect Button */}
        <a href="/Fakhir_Shaukat_Resume.pdf" download>
          <button className="mt-auto bg-red-500 rounded-md p-3 w-full text-sm hover:bg-red-600  transition">
            Download Resume
          </button>
        </a>
      </div>
    </>
  )
}

export default Navbar