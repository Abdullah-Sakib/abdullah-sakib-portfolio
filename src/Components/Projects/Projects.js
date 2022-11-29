import React from "react";

const Projects = () => {
  return (
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-4xl font-extrabold leading-2 mb-10">
        {"<projects/>"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-14 mb-28 ">
        <div className="card rounded-lg card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/gSqXd0J/Screenshot-49.png"
              alt="FLYTOGRAPHER"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">FLYTOGRAPHER</h2>
            <p>This is a photographer services selling application.</p>
            <p>
              <li>
                Dynamic cards, CRUD operations, JWT token verification, Privet
                route, Conditional rendering.
              </li>
              <li>
                Functionalities allow adding reviews and services which will
                show in the application.
              </li>
              <li>
                Implemented features like updating/deleting reviews, Sign up,
                Sign in, Google Sign in, and Sign Out. Authentication was
                handled using Firebase.
              </li>
            </p>
            <div className="card-actions justify-center md:justify-between gap-x-10 md:gap-0 mt-3">
              <a
                href="https://flytographer-4cc6d.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/Abdullah-Sakib/Flytographer-client-side"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  Client Side
                </button>
              </a>
              <a
                href="https://github.com/Abdullah-Sakib/Flytographer-server-side"
                rel="noreferrer"
                target="_blank"
              >
                {" "}
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  Server Side
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="card rounded-lg card-compact  bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/6PwY6JJ/Screenshot-50.png"
              alt="LEARN PHYSICS"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">LEARN PHYSICS</h2>
            <p>This is a physics courses selling application.</p>
            <p>
              <li>
                Firebase authentication, Course details pdf, and by clicking
                course cards user will be redirected to the course details page.
              </li>
              <li>
                Users can Sign in and Sign up using email and password, and Sign
                out. Users can also Sign in with google and GitHub.
              </li>
              <li>
                Responsive and well-designed for both mobile and desktop.
                Implemented a private route so that users can not visit the
                checkout route before Sign-in.
              </li>
            </p>
            <div className="card-actions justify-center md:justify-between gap-x-10 md:gap-0 mt-3">
              <a
                href="https://learn-physics-f2810.web.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/Abdullah-Sakib/Learn-Physics-Client-side"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  Client Side
                </button>
              </a>
              <a
                href="https://github.com/Abdullah-Sakib/Learn-Physics-sever-side"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  Server Side
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="card rounded-lg card-compact bg-base-100 shadow-xl">
          <figure>
            <img src="https://i.ibb.co/805X1kr/Screenshot-48.png" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">PROGRAMMING QUIZ</h2>
            <p>Quiz app for practice programming concepts</p>
            <p>
              <li>
                An application for practicing programming concepts where people
                can test their knowledge.
              </li>
              <li>
                Users can see their results after answering each quiz. By
                clicking the eye icon on the quiz card users can see the correct
                answer.
              </li>
              <li>
                This application counts all the wrong attempts and right
                attempts and shows them in the sidebar.
              </li>
            </p>
            <div className="card-actions justify-between mt-3">
              <a
                href="https://thriving-stardust-a28e7a.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  View Site
                </button>
              </a>
              <a
                href="https://github.com/Abdullah-Sakib/Programming-quiz"
                rel="noreferrer"
                target="_blank"
              >
                <button className="inline-flex items-center justify-center h-9 px-3 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-gray-700 hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
                  {" "}
                  Source
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
