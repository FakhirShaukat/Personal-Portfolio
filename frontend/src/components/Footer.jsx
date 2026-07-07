import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div id="contact" className="work-section w-full  md:px-5   mt-16 md:mt-24">

      {/* Main Content */}
      <div className="mt-10 bg-black w-full rounded-0 lg:rounded-2xl text-white mb-0 lg:mb-4  p-6 md:p-10 shadow-lg">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Let’s Connect <br /> There
          </h1>

          <a href="https://www.linkedin.com/in/fakhir-shaukat-950548246/">
            <button className="border border-white px-5 py-2 rounded-full flex items-center gap-2 group hover:bg-gray-500">
              Connect

              <img src={assets.right_arrow} alt="" className='w-4 invert transform group-hover:translate-x-1 transition' />

            </button>
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between gap-8">

          {/* About */}
          <div className="max-w-sm">
            <h2 className="text-lg font-semibold">Dev.Fakhir</h2>
            <p className="text-sm text-gray-400 mt-2 leading-relaxed">
              Frontend Developer focused on building responsive, modern UI experiences.
              Currently expanding into backend development with hands-on MERN projects.
            </p>
          </div>


          {/* Links */}
          <div className="flex gap-4 text-gray-400 text-lg">

            <a
              href="https://github.com/FakhirShaukat"
              target="_blank"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/fakhir-shaukat-950548246/"
              target="_blank"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="fakhirshaukat8@gmail.com"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+923312608373"
              className="hover:text-white transition transform hover:scale-110"
            >
              <FaPhone />
            </a>

          </div>

        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 mt-10">
          © 2026 Fakhir Shaukat. All rights reserved.
        </div>

      </div>

    </div>

  )
}

export default Footer
