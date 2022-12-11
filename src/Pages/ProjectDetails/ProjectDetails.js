import React from "react";
import { useLoaderData } from "react-router-dom";


const ProjectDetails = () => {
  const project = useLoaderData();
  return (
    <div className="my-10">
      <div className="card rounded-lg card-compact text-white bg-gray-900 mx-3 md:mx-16">
        <div className="card-body mt-10 ">
          <h2 className="card-title">{project?.name}</h2>
          <p className="text-base font-semibold">{project?.type}</p>
          <p>
            {project?.bulletPoients?.map((list, i) => (
              <li key={i}>{list}</li>
            ))}
          </p>
          <div className="card-actions  md:justify-between gap-x-10 md:gap-0 mt-3">
            <a href={project?.liveSite} rel="noreferrer" target="_blank">
              <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-900 hover:bg-yellow-400 focus:shadow-outline focus:outline-none">
                {" "}
                View Site
              </button>
            </a>
            <a
              href={project?.clientSide}
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-900 hover:bg-yellow-400 focus:shadow-outline focus:outline-none">
                {" "}
                Client Side code
              </button>
            </a>
            <a
              href={project?.serverSide}
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-900 hover:bg-yellow-400 focus:shadow-outline focus:outline-none">
                {" "}
                Server Side code
              </button>
            </a>
          </div>
        </div>

        <div className="md:flex items-start gap-10 bg-base-200 md:py-10 md:px-10 rounded-b-lg">
          <figure className="my-7 md:my-0">
            <img src={project?.large} alt="FLYTOGRAPHER" />
          </figure>
          <figure className="my-7 md:my-0">
            <img src={project?.medium} alt="FLYTOGRAPHER" />
          </figure>
          <figure className="my-7 md:my-0">
            <img src={project?.small} alt="FLYTOGRAPHER" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
