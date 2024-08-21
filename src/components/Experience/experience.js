import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">My Experience</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Intern @SmartInternz</h3>
            <p>I have done a two-month virtual internship in Android Development.</p>
            <br />
            <p><a href="https://drive.google.com/file/d/1GALplStJkOGwE0Hb2VgNmt74yYwbcOfq/view?usp=drive_link">See Certificate</a></p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Intern @Oasis Infobyte</h3>
            <p>I completed a one-month online internship in web design and development.</p>
            <br />
            <p><a href="https://drive.google.com/file/d/1TURBZCSVbsF-UGQUb9CO2SGfz8iuNICq/view?usp=sharing">See Certificate</a></p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Participated in CodeKaze Challenge</h3>
            <br />
            <p><a href="https://drive.google.com/file/d/15jE2-kSUMRiIYXarYaZmcBiq_g15pH5c/view?usp=sharing">See Certificate</a></p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2022</div>
          <div className="timeline-content">
            <h3>Online Course Work (IIRS)</h3>
            <p>I completed the “Overview of Geoprocessing using Python” course from IIRS.</p>
            <br />
            <p><a href="https://drive.google.com/file/d/1KIZlrqZFNoUAnntM7wyVjTTVNM3ZvdEe/view?usp=sharing">See Certificate</a></p>
          </div>
        </div>
		</div>
		
<div id="services">
    <div class="container">
        <h1 class="sub-title">My Services</h1>
        <div class="services-list">
            <div> 
                <i class="fa-solid fa-code"></i>
                <h2>Web/Frontend</h2>
                <p>With a passion for crafting visually stunning and highly responsive websites, I 
                  specialize in frontend development using the latest technologies like React, 
                  Tailwind CSS, and JavaScript. I create user-centric designs that are both intuitive 
                  and aesthetically pleasing, ensuring a seamless experience across all devices.</p>
                   
            </div>

            <div> 
                <i class="fa-brands fa-app-store-ios"></i>
                <h2>AI/ML/Cloud</h2>
                <p>Harnessing the power of artificial intelligence and machine learning, I
                   develop intelligent solutions that drive innovation and efficiency. 
                   My expertise extends to cloud computing, where I design scalable architectures 
                   that support data-driven applications, ensuring optimal performance and security.</p>
                    
            </div>

            <div> 
                <i class="fa-solid fa-crop"></i>
                <h2>Automotive</h2>
                <p>At the intersection of technology and mobility, I bring cutting-edge 
                  solutions to the automotive industry. My work in automotive tech involves 
                  developing software that enhances vehicle functionality, safety, and user experience, pushing the boundaries of what's possible in modern transportation.</p>
                    
            </div>
        </div>
    </div>  
</div>

    
    </section>
  );
};

export default Experience;
