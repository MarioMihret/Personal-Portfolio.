import React from 'react';
import image1 from '../assets/original.jpg'
import image2 from '../assets/movie demo mario.png'
import image3 from '../assets/mario.png'
import { FaGithub } from 'react-icons/fa';
const ProjectsSection = () => {
    
  const projects = [
    {
      id: 1,
      title: 'Tin-Dog Website',
      description: ' .',
      image : image1,
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      title: 'Watch Movies',
      description: ' .',
      image : image2,
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      title: 'Esty E-Commerce Clone ',
      description: '.',
      image: image3, 
      link: 'https://example.com/project3',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 text-3xl font-bold">Our Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="overflow-hidden bg-white rounded-lg shadow-md">
              <img src={project.image } alt={project.title} className="object-cover w-full h-48" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <a href={project.link} className="inline-block px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                <FaGithub size={24} color="#333" /> Show On GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;