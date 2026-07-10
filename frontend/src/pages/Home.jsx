import React from 'react'
import { assets } from '../assets/assets'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Footer from '../components/Footer';


const Home = () => {

    const skills = [
        { name: "HTML", icon: assets.html },
        { name: "CSS", icon: assets.css },
        { name: "JavaScript", icon: assets.js },
        { name: "React", icon: assets.react },
        { name: "MongoDB", icon: assets.mongo },
        { name: "Express", icon: assets.express },
        { name: "Python", icon: assets.python },
        { name: "Jest", icon: assets.jest },
        { name: "AI Tools", icon: assets.ai },
    ]

    const loopSkills = [...skills, ...skills];


    const projects = [
        {
            title: "Recruit AI",
            image: assets.project1,
            github: "https://github.com/yourusername/project1",
        },
        {
            title: "Project 2",
            image: assets.project2,
            github: "https://github.com/yourusername/project2",
        },
        {
            title: "Project 3",
            image: assets.project3,
            github: "https://github.com/yourusername/project3",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* MAIN CONTAINER */}
            <div className='h-[75vh] lg:min-h-screen w-full px-4 md:px-10'>
                <Navbar />

                {/* HERO SECTION */}
                <div id="home" className='flex  mt-20 lg:mt-20 flex-col md:flex-row w-full pb-4   h-auto lg:min-h-[85vh]'>

                    {/* LEFT */}
                    <div className='w-full md:w-2/3 flex items-center md:items-end order-2 md:order-1'>
                        <h1 className='text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-light leading-tight'>
                            Software Engineer
                        </h1>
                    </div>

                    {/* RIGHT */}
                    <div className='w-full md:w-1/3 flex flex-col justify-between items-center lg:items-start md:items-end order-2 md:order-1 mt-6 md:mt-0'>

                        <div className='w-[240px] sm:w-[200px]  h-[40vh] md:h-[40vh] bg-gray-200 border rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300'>
                            <img src={assets.profile2} alt="" className='w-full h-full object-cover  hover:scale-105 transition duration-500' />
                        </div>

                        <p className='text-md sm:text-lg font-semibold mt-8 md:mt-4 md:w-2/3'>
                            Hi, I'm Fakhir Shaukat, A Frontend & Mernstack Engineer Creating
                            Intuitive Digital Experiences.
                        </p>
                    </div>
                </div>
            </div>
            {/*Skills Slider*/}
            <div className="skills-slider w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="flex w-max gap-4 animate-marquee">
                    {loopSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex bg-gray-200 items-center gap-2 rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-sm hover:shadow-md hover:scale-105 transition"
                        >
                            <img src={skill.icon} className="w-5 h-5 sm:w-6 sm:h-6 object-contain" alt={skill.name} />
                            <span className="font-semibold text-xs sm:text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT SECTION */}
            <div id="about" className='about mt-1 md:mt-10 px-4 md:px-10 flex flex-col md:flex-row gap-6'>

                {/* LEFT */}
                <div className='w-full md:w-2/3'>
                    <div className='p-4 sm:p-6'>
                        <span className=' p-2 bg-black shadow-lg text-white text-xs md:text-sm rounded-full px-3 md:px-6'>About Me</span>

                        <div className='mt-8 w-full md:w-3/4'>
                            <h1 className='text-3xl sm:text-4xl md:text-6xl'>Fakhir Shaukat</h1>

                            <p className='pt-2 leading-6 sm:leading-7 text-gray-500 text-sm sm:text-base'>
                                I'm a Software Engineer and MERN Stack Developer graduated from Iqra University, Karachi. I specialize in building scalable web applications using React.js, Node.js, Express.js, and modern technologies.
                                I have experience developing full-stack applications, REST APIs, and AI-powered solutions, with projects involving NLP and Computer Vision. I'm passionate about learning new technologies and creating impactful software solutions.
                            </p>
                            <div className='flex gap-2 flex-wrap'>
                                <a href="https://www.linkedin.com/in/fakhir-shaukat-950548246/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvpmgMF%2F8Soq3Zth37wiUSA%3D%3D">
                                    <button className="relative px-4  py-3 mt-4 rounded-lg bg-blue-500 text-white text-sm  hover:bg-blue-600 transition duration-300 group">
                                        <span className="relative flex items-center z-10  group-hover:text-blue-600">
                                            Let's Connect
                                            <img src={assets.linkedin} className='ml-2  w-6 ' />
                                        </span>
                                        <span className="absolute inset-0 bg-white border rounded-lg border-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                    </button>
                                </a>
                                <a href="https://github.com/FakhirShaukat">
                                    <button className="relative px-4  py-3 mt-4 rounded-lg bg-black text-white text-sm  hover:bg-gray-500 transition duration-300 group">
                                        <span className="relative flex items-center z-10  group-hover:text-black">
                                            Follow Me
                                            <img src={assets.githublogo} alt="GitHub" className='ml-2 invert w-6 group-hover:invert-0' />
                                        </span>
                                        <span className="absolute inset-0 bg-white border rounded-lg border-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                                    </button>
                                </a>

                            </div>


                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='w-full md:w-1/3 p-4 sm:p-6'>
                    <h1 className='text-green-500 font-semibold'>Personal Experience</h1>
                    <div className='space-y-6 mt-4'>
                        <div>
                            <h1 className='text-3xl sm:text-4xl font-semibold'>1.5+</h1>
                            <p className='text-gray-400 text-sm'>Years of experience as a self-taught developer.</p>
                        </div>

                        <div>
                            <h1 className='text-3xl sm:text-4xl font-semibold'>5+</h1>
                            <p className='text-gray-400 text-sm'>Projects completed with deployement.</p>
                        </div>

                        <div>
                            <h1 className='text-3xl sm:text-4xl font-semibold'>15+</h1>
                            <p className='text-gray-400 text-sm'>GitHub repositories showcasing my learning.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* WHAT I DO */}
            <div className='details-section  px-4 md:px-20 w-full max-w-6xl mx-auto'>

                {/* Row 1 */}
                <div className='flex flex-col md:flex-row w-full mt-5 items-start'>
                    <h1 className='hidden md:block text-4xl pr-6'>1.</h1>

                    {/* Frontend */}
                    <div className='w-full md:w-2/5 animated-border p-5'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-8' src={assets.ui} alt="" />
                            <h1 className='text-lg lg:text-2xl font-semibold'>Frontend <span className='text-sm text-green-500'>99%</span></h1>
                        </div>

                        <p className='text-sm text-gray-500 mt-3 leading-relaxed'>
                            Frontend-focused developer specializing in building modern, responsive, and high-performance user interfaces using React and JavaScript.
                        </p>
                    </div>

                    <div className='hidden md:block md:w-3/5'></div>
                </div>

                {/* Row 2 */}
                <div className='flex flex-col md:flex-row w-full mt-10 items-start'>
                    <div className='hidden md:block md:w-3/5'></div>

                    <h1 className='hidden md:block text-4xl pr-6'>2.</h1>

                    {/* Backend */}
                    <div className='w-full md:w-2/5 animated-border p-5'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-8' src={assets.gear} alt="" />
                            <h1 className='text-lg lg:text-2xl font-semibold'>Backend <span className='text-sm text-green-500'>80%</span></h1>
                        </div>

                        <p className='text-sm text-gray-500 mt-3 leading-relaxed'>
                            Expanding into backend development with 8+ months of hands-on experience using Node.js, Express, and MongoDB.
                        </p>
                    </div>
                </div>

                {/* Row 3 */}
                <div className='flex flex-col md:flex-row w-full mt-10 items-start'>
                    <h1 className='hidden md:block text-4xl pr-6'>3.</h1>

                    {/* AI */}
                    <div className='w-full md:w-2/5 animated-border p-5'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-8' src={assets.ai_col} alt="" />
                            <h1 className='text-lg lg:text-2xl font-semibold'>AI Integration <span className='text-sm text-yellow-400'>60%</span></h1>
                        </div>

                        <p className='text-sm text-gray-500 mt-3 leading-relaxed'>
                            Exploring AI integration in web applications, including resume screening systems and intelligent data processing.
                            Familiar with NLP concepts and Computer Vision.
                        </p>
                    </div>

                    <div className='hidden md:block md:w-3/5'></div>
                </div>

                {/* Row 4 */}
                <div className='flex flex-col md:flex-row w-full mt-10 items-start'>
                    <div className='hidden md:block md:w-3/5'></div>

                    <h1 className='hidden md:block text-4xl pr-6'>4.</h1>

                    {/* Database */}
                    <div className='w-full md:w-2/5 animated-border p-5'>
                        <div className='flex gap-3 items-center'>
                            <img className='w-8' src={assets.database} alt="" />
                            <h1 className='text-lg lg:text-2xl font-semibold'>Databases <span className='text-sm text-green-500'>90%</span></h1>
                        </div>

                        <p className='text-sm text-gray-500 mt-3 leading-relaxed'>
                            Experience working with MongoDB and designing structured databases for scalable applications.
                            Skilled in CRUD operations, schema design, and query optimization.
                        </p>
                    </div>
                </div>

            </div>

            {/* EXPERIENCE SECTION */}
            <div id="experience" className='experience-section mt-10 md:mt-10 px-4 md:px-10 flex flex-col md:flex-row gap-6'>

                <div className='p-4 sm:p-6'>

                    {/* Badge */}
                    <span className='inline-block p-2 bg-black text-white text-xs md:text-sm rounded-full px-4 md:px-6 shadow-md'>
                        Experience
                    </span>

                    {/* Heading */}
                    <div className='mt-8'>
                        <h1 className='text-3xl sm:text-4xl md:text-6xl'>
                            Professional Journey
                        </h1>
                    </div>

                    {/* Experience Cards */}
                    <div className='mt-8 space-y-6'>

                        {/* Card 1 */}
                        <div className='flex flex-col md:flex-row md:items-start justify-between gap-4 border-l-4 border-black pl-4 pr-2 py-4 rounded-lg hover:bg-gray-50 transition'>

                            <div className='w-full md:w-2/3'>
                                <h1 className='font-semibold text-lg md:text-xl'>
                                    MERN-Stack Developer Intern
                                </h1>
                                <h2 className='text-gray-400 text-sm md:text-base'>
                                    10Pearls Pakistan
                                </h2>

                                <p className='mt-3 text-sm text-gray-600 leading-relaxed'>
                                    Developed a full-stack Notes Management Application using the MERN stack, enabling users to manage daily tasks efficiently.
                                    Built both frontend and backend features with a focus on performance and responsiveness.
                                    Implemented testing using Mocha, Chai, and Jest, and improved code quality through SonarQube.
                                    Used Git for version control with structured branching and collaborative workflows.
                                </p>
                            </div>

                            <div className='text-sm text-gray-400 whitespace-nowrap'>
                                Dec 2025 - Mar 2026
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className='flex flex-col md:flex-row md:items-start justify-between gap-4 border-l-4 border-black pl-4 pr-2 py-4 rounded-lg hover:bg-gray-50 transition'>

                            <div className='w-full md:w-2/3'>
                                <h1 className='font-semibold text-lg md:text-xl'>
                                    Frontend Developer Intern
                                </h1>
                                <h2 className='text-gray-400 text-sm md:text-base'>
                                    Internship Pakistan
                                </h2>

                                <p className='mt-3 text-sm text-gray-600 leading-relaxed'>
                                    Translated Figma designs into clean, reusable, and responsive frontend code using modern JavaScript practices.
                                    Collaborated with the team to build user-friendly interfaces and maintain high code quality.
                                    Contributed to a full-stack job platform with features like job listings and applications.
                                    Focused on performance optimization and delivering a smooth user experience.
                                </p>
                            </div>

                            <div className='text-sm text-gray-400 whitespace-nowrap'>
                                Aug 2025 - Oct 2025
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* My Work */}
            <div id="projects" className="work-section  mt-10 md:mt-10 px-6 md:px-16 gap-6 ">
                <h1 className='inline-block p-2 bg-black text-white text-xs md:text-sm rounded-full px-4 md:px-6 shadow-md'>Projects</h1>
                {/* Heading */}
                <div className='mt-8 px-2'>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl'>
                        My Work
                    </h1>
                </div>

                <div className='project-cards mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project1} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://github.com/FakhirShaukat/Recruit-AI-FYP">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Recruit AI</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">AI-powered recruitment platform that screens resumes and automates hiring decisions.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">MERN</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Python</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">NLP</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">FastApi</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat/Recruit-AI-FYP">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>

                        </div>
                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">


                        <div className="relative overflow-hidden ">
                            <img src={assets.project8} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://github.com/FakhirShaukat/Notify">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Github
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Notify</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">A full-stack MERN Notes App with secure authentication and real-time data handling.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">MERN</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Jest</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Mocha</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Chai</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat/Notify">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>


                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project9} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://worksphere-fakhir.vercel.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">WorkSphere</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">WorkSphere is a productivity app designed to help you manage teams, tasks and boost your efficiency.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">NodeJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">PostgreSQL</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat/Team_Task_Management-App">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project2} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://drivewithrobin.netlify.app/">
                                    <button className=" border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">DWR Freight Solution</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">Drive With Robin (DWR) is a nationwide logistics and dispatch solutions provider.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project6} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://fakhir-portfolio-fs.netlify.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Portfolio</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">An essential website for showcasing your work and achievements.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project5} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://jobifyy-app.netlify.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Jobify</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">A modern job board platform for connecting employers and job seekers.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">React</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project3} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://ecommerce-website-fs.netlify.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Nike Sports</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">Nike Store is your premier destination for athletic footwear, apparel, and accessories.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project7} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://eventshpere.netlify.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>

                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">EventSphere</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">EventSphere is your premier destination for organizing and managing events. </p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="group w-2/1 relative rounded-xl overflow-hidden bg-black shadow-md hover:shadow-2xl transition duration-300 flex flex-col">

                        <div className="relative overflow-hidden ">
                            <img src={assets.project4} className="w-full h-52 object-cover  transform group-hover:scale-110 transition duration-500" alt="" />
                            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                                <a href="https://gemini-clone-fs.netlify.app/">
                                    <button className="border border-green-500 2 text-green-500 px-4 py-2 text-xs rounded-full hover:bg-green-500 hover:text-black transition">
                                        Live Demo
                                    </button>
                                </a>
                            </div>
                        </div>

                        <div className="p-4 text-white flex flex-col flex-grow">
                            <h1 className="text-lg font-semibold">Gemini AI Assitant</h1>
                            <p className="text-xs text-gray-300 mt-2 leading-relaxed">Gemini is a conversational AI assistantc and your companion powered by Google.</p>
                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">ReactJS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">Tailwind CSS</span>
                                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">API</span>
                            </div>
                            <a href="https://github.com/FakhirShaukat">
                                <button className="mt-6 flex justify-center items-center w-full mt-5 bg-white text-black p-2 text-sm rounded-md hover:bg-gray-200 transition">
                                    View Details
                                    <img src={assets.up_arrow} alt="Right Arrow" className="ml-2 w-4 h-4" />
                                </button>
                            </a>
                        </div>

                    </div>


                </div>

            </div >
            {/*Footer*/}
            <Footer />
        </>
    )
}

export default Home