import React from 'react';

const projects = [
  {
    title: "Hospitel Management System",
    description: "This is digitizing patient records, scheduling appointments, and managing administrative tasks.",
    technologies: ["HTML","CSS","PHP","MySQL", "BootStrap", "JavaScript"],
    link: "https://github.com/Hareesh061/Hospital-Management-Database-System", 
    image: "https://lvivity.com/wp-content/uploads/2021/06/hospital-CRM.jpg", 
  },
  {
    title: "Diabetic Retinopathy",
    description: "Diabetic retinopathy is a progressive eye condition resulting from diabetes, causing damage to the retina's blood vessels.",
    technologies: ["Python","HTML","CSS","JS","Keras","Tensorflow"],
    link: "https://github.com/Hareesh061/Diabetic_Retina",
    image: "https://www.thindeyehospital.org/wp-content/uploads/2022/08/diabetic-retinopathy.jpg",
  },
  {
    title: "Meme's App",
    description: "It's a simple memes application where you get a n number of memes which helps to relax and have fun.",
    technologies: ["HTML","JS", "API Calling", "CSS"],
    link: "https://659a7ec3d5ec3e76dec89d7e--imaginative-cat-0ba4c6.netlify.app",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Purple1/v4/f2/86/b4/f286b453-c8e4-949f-e107-421e65463048/pr_source.jpg/1200x630wa.png",
  },
  {
    title: "Archery Game",
    description: "Sharpen your aim and embrace the thrill of precision in our archery game. Unleash your inner marksman, hit the bullseye, and conquer the virtual bow-and-arrow challenge!",
    technologies: ["HTML","CSS","JS"],
    link: "https://hareesh061.github.io/ARCHERY-GAME",
    image: "https://store-images.s-microsoft.com/image/apps.23602.13600080337888457.82a2478a-919d-45f3-9372-6b92f6771014.ad2e1672-40d2-4e85-8cc5-28764e2b1eb1?mode=scale&q=90&h=300&w=300",
  },
  {
    title: "JS CRUD Operation",
    description: "It's a simple javascript project to perform Create Read Update Delete operation on JSON data.",
    technologies: ["HTML","CSS","JS"],
    link: "https://hareesh061.github.io/JS_CRUD_OPERATION",
    image: "https://www.atatus.com/glossary/content/images/size/w960/2021/07/CRUD.jpeg",
  },
  {
    title: "Music App",
    description: "Immerse yourself in a world of melodies with our music app powered by APIs.",
    technologies: ["React", "CSS","BootStrap","HTML", "JavaScript"],
    link: "https://scintillating-swan-7e5b8a.netlify.app",
    image: "https://cdn.shopify.com/app-store/listing_images/a82167e02b45cadf681efc6c17c35f3a/icon/CMmMjb30lu8CEAE=.jpg",
  },

  {
    title: "My Portfolio",
    description: "Created the application where my skill stands out",
    technologies: ["React", "Tailwind CSS","BootStrap","HTML", "JavaScript"],
    link: "https://65d4746f927c9bb35022283a--candid-frangollo-d21c96.netlify.app",
    image: "https://s3-alpha.figma.com/hub/file/2740305477/d3034efa-c68e-42c4-9050-d37b150540b2-cover.png",
  },
];

const project = () => {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className=" text-4xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-gray-800 font-medium">Technologies:</h4>
                  <ul className="list-disc list-inside">
                    {project.technologies.map((tech, i) => (
                      <li key={i} className="text-gray-600">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default project;
  