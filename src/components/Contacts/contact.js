import React from 'react';
import '../CenterContent.css';

const Contact = () => {
  return (
    <div 
      className="min-h-screen flex flex-col justify-center items-center p-4" 
      style={{
        backgroundImage: "url('https://img.freepik.com/free-vector/blue-curve-background_53876-113112.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black text-center">Get in Touch with me!</h1>
      
      <div className="mb-4 w-32 h-32 md:w-40 md:h-40">
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
              className="w-10 h-10 md:w-12 md:h-12 hover:opacity-80 transition duration-300 rounded-full"
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
              className="w-10 h-10 md:w-11 md:h-11 hover:opacity-80 transition duration-300 rounded-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
