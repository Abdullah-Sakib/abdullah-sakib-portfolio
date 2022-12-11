import React from 'react';

const AboutMe = () => {
  return (
    <div>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20  items-center grid min-h-[90vh]">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:pr-10 ">
            <h5 className="mb-4 text-3xl md:text-4xl font-extrabold leading-2">
              I'm Abdullah Sakib
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400 text-3xl">
                A Web Developer_
              </span>
            </h5>
            <p className="mb-6 text-gray-800 font-semibold">
              For the past 6 months, I am learning and building web applications. Now I have strong knowledge
              of Web development for both Front-end, Back-end, and the Database. I build applications using MERN stack.
              I also completed some full-stack projects.
            </p>

            <p className="mb-6 text-gray-800 font-semibold">
            For the past 6 months, I am learning and building web applications. Now I have strong knowledge
              of Web development for both Front-end, Back-end, and the Database. I build applications using MERN stack.
              I also completed some full-stack projects.
            </p>
         
           
          </div>

          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96 bg-gray-900"
              src="https://i.pinimg.com/originals/81/17/8b/81178b47a8598f0c81c4799f2cdd4057.gif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;