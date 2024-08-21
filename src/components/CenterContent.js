import React from 'react';
import './CenterContent.css';

const CenterContent = ({ imageSize = '400px' }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-center md:text-left p-9 text-white -mt-6 md:-mt-10">
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 md:p-12 order-2 md:order-1">
      <h2 className="text-3xl mb-4">
          I'm <span className="font-bold text-blue-500">Hareesh Naik</span>
        </h2>
        <p className="text-orange-400 text-lg mb-6">A passionate learner from India. I love exploring new technologies and continuously improving my skills.</p>
        <a 
          href="/Hareesh_Resume.pdf" 
          download 
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Download CV
        </a>

        <div className="flex space-x-4 mt-6">
         
          <a 
            href="https://www.linkedin.com/in/hareesh-naik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center"
          >
            <img 
              src="/linkedin.png" 
              alt="LinkedIn" 
              className="w-8 h-8 hover:opacity-80 transition duration-300 rounded-full"
            />
          </a>
     
          <a 
            href="https://github.com/Hareesh061" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center"
          >
            <img 
              src="/git.svg" 
              alt="GitHub" 
              className="w-10 h-10 hover:opacity-80 transition duration-300 rounded-full"
            />
          </a>
        </div>


      </div>
      <div className="md:w-1/2 p-4 md:p-10 order-1 md:order-2 flex justify-center items-center md:justify-end">
        <img 
          src="/my_img.jpg" 
          alt="Hareesh Naik" 
          style={{ width: imageSize, height: imageSize}} 
          className="shadow-lg rounded-full border-4 border-blue-500 animate-blink"
        />
      </div>
    </section>
  );
};

export default CenterContent;

