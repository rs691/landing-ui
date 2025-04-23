import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
        <div className="text-center p-12 rounded-3xl shadow-2xl relative"> {/* Increased padding */}
          {/* Gradient Border (using pseudo-element) */}
          <div
            className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-500 blur-2xl opacity-60 z-0"
            style={{
              WebkitMaskImage: "radial(ellipse at center, 300px 300px, transparent 100%, black 100%)", /* Increased glow size */
              maskImage: "radial(ellipse at center, 300px 300px, transparent 100%, black 100%)",     /* Increased glow size */
            }}
          />
          <div className="relative z-10 bg-black p-6 rounded-3xl shadow-lg"> {/* Increased inner padding */}
            <h1 className="text-3xl sm:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-500">
              Welcome to My Portfolio
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 max-w-xl mt-12">
              Hello! I'm Rob, a software developer. This is my portfolio site, where you can learn more about my work and skills.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/about"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-gray-700 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                About Me
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-gray-700 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 16 12 12 8 16"></polyline><path d="M12 12v9"></path><circle cx="12" cy="6" r="4"></circle></svg>
                Projects
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-gray-700 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21.75 6.75v9c0 1.38-1.12 2.5-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5v-9c0-1.38 1.12-2.5 2.5-2.5h15a2.5 2.5 0 0 1 2.5 2.5z"></path><path d="M3 16.5v-9c0-.66.54-1.2 1.2-1.2h.6c.66 0 1.2.54 1.2 1.2v9"></path><path d="M8.25 12v-1.5c0-.83.67-1.5 1.5-1.5h.75c.83 0 1.5.67 1.5 1.5V12"></path><path d="M15.75 12v-1.5c0-.83.67-1.5 1.5-1.5h.75c.83 0 1.5.67 1.5 1.5V12"></path></svg>
                Contact
              </Link>
              <Link
                to="/tutoring"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:scale-105 border-2 border-gray-700 flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                Tutoring
              </Link>
            </div>
            <p className="mt-12 text-lg text-white">
              Hello! I'm Rob, a software developer. This is my portfolio site, where you can learn more about my work and skills.
            </p>
          </div>
        </div>
        <div className='pt-8'>
          <div className="container mx-auto py-8">
            <Outlet /> {/* This is where the child routes will be rendered */}
          </div>
        </div>
      </div>
      <footer className="bg-black text-white py-4 text-center">
        <p className="text-sm">© 2023 Rob's Portfolio. All rights reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;