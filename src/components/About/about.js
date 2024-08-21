import React from 'react';
import './about.css';



const schools = [
  {
    name: "JSS Academy of Technical Education Bangalore",
    degree: "Bachelor of Engineering in Computer Science",
    year: "2023",
    Percentage: " 7.9 CGPA "
  },
  {
    name: "Siddhartha PU College",
    degree: "PUC",
    year: "2019",
    Percentage: " 73"
  },
  {
    name: "Govt High School Gorte",
    degree: "SSLC",
    year: "2017",
    Percentage: " 90.24"
  }
];



const about = () => {

  return (

    <div className="about-me-section">
      <div className="about-me-container">
        <div className="about-me-image">
          <img src="/img.jpg" alt="Hareesh Naik" />
        </div>
        <div className="about-me-text">
          <h2 className='font-bold'>About me <span>who i am</span></h2>
          <h3>I'm <span><strong>Hareesh Naik</strong></span> and I'm a Passionate Learner.</h3>
          <p>
            I'm Computer Science graduate passionate about Software Development.
            Highly capable leader with experience in leading projects to completion.
            Proficient in modern technologies including C++, HTML, CSS, JS, REACT, SQL, Linux and any more.
            Adept at working under pressure and making the best of any situation.
            A passionate individual with excellent documentation, interpersonal, and communication skills. 
            Self-motivated and proactive.
          </p>
        </div>
      </div>
     

      <div className="education-section ">
        <h2 className='text-center font-bold'>Education</h2>
        <div className="education-timeline">
          {schools.map((school, index) => (
            <div className="education-item" key={index}>
              <div className="education-year">{school.year}</div>
              <div className="education-details">
                <h3 className='font-bold'>{school.name}</h3>
                <p ><strong>Degree:</strong> {school.degree}</p>
                <p><strong>Percentage:</strong>{school.Percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default about;
