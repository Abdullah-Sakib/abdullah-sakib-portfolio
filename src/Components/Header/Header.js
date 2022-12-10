import React from "react";

const Header = () => {
  return (
    <div id="header"> 
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  items-center grid min-h-[90vh]">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:pr-10 ">
            <h5 className="mb-4 text-3xl md:text-4xl font-extrabold leading-2">
              Hi, I'm Abdullah Sakib
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400">
                A Web Developer_
              </span>
            </h5>
            <p className="mb-6 text-gray-800 font-semibold">
              For the past 6 months, I am learning and building web applications. Now I have strong knowledge
              of Web development for both Front-end, Back-end, and the Database. I build applications using MERN stack.
              I also completed some full-stack projects.
            </p>
            <a href="#contact">
            <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-black hover:bg-yellow-400 focus:shadow-outline focus:outline-none">
              {" "}
              <span>{"<hire_me/>"}</span>
            </button>
            </a>
            <a href="https://drive.google.com/file/d/1caTfB_oYhCvb309IUlqlsLrPwP2wpoIz/view?usp=sharing"  rel="noreferrer"
                target="_blank">
              <button className="inline-flex  items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-black hover:bg-yellow-400 focus:shadow-outline focus:outline-none ml-4">
                <span>{"<see_resume/>"}</span>{" "}
              </button>
            </a>
          </div>

          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-gray-900"
              src="https://i.ibb.co/PwLgBSp/IMG-20211009-182539-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
