import React from "react";

const Header = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-[90vh] items-center grid">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:pr-10 ">
            <h5 className="mb-4 text-4xl font-extrabold leading-2">
              Hi, I'm Abdullah Sakib
              <br className="hidden md:block" />
              <span className="inline-block text-deep-purple-accent-400">
                A Web Developer
              </span>
            </h5>
            <p className="mb-6 text-gray-800 font-semibold">
              I am able to build a Web presence from the ground up - from
              concept, navigation, layout and programming to UX. Skilled at
              writing well-designed, testable and efficient code using current
              best practices in Web development. Fast learner, hard worker and
              team player who is proficient in an array of scripting languages
              and multimedia Web tools.
            </p>
            <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-black hover:bg-yellow-200 focus:shadow-outline focus:outline-none">
              {" "}
              Hire Me
            </button>
            <a href="https://drive.google.com/file/d/1caTfB_oYhCvb309IUlqlsLrPwP2wpoIz/view?usp=sharing">
              <button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-yellow-300 text-black hover:bg-yellow-200 focus:shadow-outline focus:outline-none ml-4">
                See Resume
              </button>
            </a>
          </div>

          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src="https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
