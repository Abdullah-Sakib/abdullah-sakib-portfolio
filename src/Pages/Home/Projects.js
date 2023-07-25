import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    name: "MAKE BETTER USE",
    type: "This is a camera reselling application.",
    img: "https://i.ibb.co/K7fZNd8/Screenshot-61.png",
  },
  {
    id: 2,
    name: "FLYTOGRAPHER",
    type: "This is a photographer services selling application.",
    img: "https://i.ibb.co/gSqXd0J/Screenshot-49.png",
  },
  {
    id: 3,
    name: "LEARN PHYSICS",
    type: " This is a physics courses selling application.",
    img: "https://i.ibb.co/6PwY6JJ/Screenshot-50.png",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 mt-24" id="projects">
      <h2 className="text-4xl font-extrabold leading-2 mb-10 dark:text-gray-200">
        {"<projects/>"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 mb-28 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card rounded-lg card-compact text-white bg-gray-900"
          >
            <figure>
              <img src={project?.img} alt={project?.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project?.name}</h2>
              <p className="text-base font-semibold">{project?.type}</p>
              <Link to={`/projectDetails/${project?.id}`}>
                <button className="btn bg-yellow-300 hover:bg-yellow-400 w-full text-gray-900 font-semibold mt-5">
                  View details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
