import React from "react";

//https://preview.themeforest.net/item/spirit-portfolioresume-html-template-for-developers-programmers-and-freelancers/full_screen_preview/17094383?_ga=2.34388065.1778816661.1669474020-987944383.1657089544

const Skills = () => {
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mb-20 items-center grid ">
      <h2 className="text-4xl font-extrabold leading-2  mb-10">
        {"<skills/>"}
      </h2>
      <div className="md:flex justify-between ">
        <div className="md:w-[45%] ">
          <label className="label font-semibold">
            <span className="label-text">HTML</span>
            <span className="label-text">92%</span>
          </label>
          <progress
            className="progress progress-warning w-full "
            value="92"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">CSS3</span>
            <span className="label-text">85%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="85"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">JavaScript</span>
            <span className="label-text">80%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">Bootstrap</span>
            <span className="label-text">90%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="90"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">Tailwind CSS</span>
            <span className="label-text">95%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="95"
            max="100"
          ></progress>
        </div>

        <div className="md:w-[45%] ">
          <label className="label font-semibold ">
            <span className="label-text">React.js</span>
            <span className="label-text">85%</span>
          </label>
          <progress
            className="progress progress-warning w-full "
            value="85"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">Git</span>
            <span className="label-text">80%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">Node.js</span>
            <span className="label-text">60%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="60"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">Express.js</span>
            <span className="label-text">80%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>

          <label className="label font-semibold mt-2">
            <span className="label-text">MongoDB</span>
            <span className="label-text">82%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="82"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
