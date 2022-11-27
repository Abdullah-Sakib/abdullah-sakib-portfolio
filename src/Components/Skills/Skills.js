import React from "react";

//https://preview.themeforest.net/item/spirit-portfolioresume-html-template-for-developers-programmers-and-freelancers/full_screen_preview/17094383?_ga=2.34388065.1778816661.1669474020-987944383.1657089544

const Skills = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 min-h-[90vh] items-center grid">
      <h2 className="text-4xl font-extrabold leading-2 mb-5">Skills</h2>
      <div className="flex justify-between">
        <div className="w-[45%] ">
          <label className="label font-semibold">
            <span className="label-text">HTML</span>
            <span className="label-text">92%</span>
          </label>
          <progress
            className="progress progress-warning w-full "
            value="92"
            max="100"
          ></progress>

          <label className="label font-semibold ">
            <span className="label-text">CSS3</span>
            <span className="label-text">85%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="85"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">JavaScript</span>
            <span className="label-text">80%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">Bootstrap</span>
            <span className="label-text">90%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="90"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">Tailwind CSS</span>
            <span className="label-text">95%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="95"
            max="100"
          ></progress>
        </div>
        <div className="w-[45%] ">
          <label className="label font-semibold">
            <span className="label-text">HTML</span>
            <span className="label-text">92%</span>
          </label>
          <progress
            className="progress progress-warning w-full "
            value="92"
            max="100"
          ></progress>

          <label className="label font-semibold ">
            <span className="label-text">CSS3</span>
            <span className="label-text">85%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="85"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">JavaScript</span>
            <span className="label-text">80%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="80"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">Bootstrap</span>
            <span className="label-text">90%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="90"
            max="100"
          ></progress>

          <label className="label font-semibold">
            <span className="label-text">Tailwind CSS</span>
            <span className="label-text">95%</span>
          </label>
          <progress
            className="progress progress-warning w-full"
            value="95"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
