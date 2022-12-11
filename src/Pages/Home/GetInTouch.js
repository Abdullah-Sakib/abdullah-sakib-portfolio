import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaGithub } from "react-icons/fa";

const GetInTouch = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EmailJS_service_id,
        process.env.REACT_APP_EmailJS_template_id,
        form.current,
        process.env.REACT_APP_EmailJS_public_key
      )
      .then(
        (result) => {
          toast.success("Message send successfully. You will get response very soon.")
        },
        (error) => {
          toast.error("Something went wrong. Please try again.")
        }
      );
      e.target.reset();
  };

  return (
    <section
      className="bg-gray-900 dark:bg-gray-900 px-4 py-10  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-16  min-h-[90vh] items-center grid"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="lg:flex lg:items-center lg:-mx-6">
          <div className="lg:w-1/2 lg:mx-6 ">
            <h1 className="text-3xl  capitalize text-white lg:text-4xl  font-extrabold leading-2">
              Get in touch_
            </h1>

            <div className="mt-6 space-y-8 md:mt-8">
              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-yellow-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span className="mx-2 00 truncate w-72 text-gray-400">
                  Comilla, Bangladesh
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-yellow-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span className="mx-2 truncate w-72 text-gray-400">
                  (+880) 1403492031
                </span>
              </p>

              <p className="flex items-start -mx-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-yellow-300 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="mx-2 truncate w-72 text-gray-400">
                  abdullahsakib888@gmail.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-white">Follow me on_</h3>

              <div className="flex mt-4 -mx-1.5 ">
                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-300 transition-colors duration-300 transform hover:text-yellow-300"
                  href="https://www.linkedin.com/in/abdullah-sakib-266361244/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                      fill="currentColor"
                    />
                    <path
                      d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-300 transition-colors duration-300 transform hover:text-yellow-300"
                  href="https://www.facebook.com/abdullah.sakib.77715"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <a
                  className="mx-1.5 dark:hover:text-blue-400 text-gray-300 transition-colors duration-300 transform hover:text-yellow-300 "
                  href="https://github.com/Abdullah-Sakib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="h-7 w-7"></FaGithub>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:w-1/2 lg:mx-6">
            <div className="md:w-full px-8 py-10 mx-auto overflow-hidden bg-base-100 rounded-lg dark:bg-gray-900 lg:max-w-xl dark:shadow-black/50 border">
              <h1 className="text-lg font-medium text-gray-700">
                Or just write me a letter here_
              </h1>

              <form className="mt-6 " ref={form} onSubmit={sendEmail}>
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-blue-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-blue-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    className="block w-full h-20 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-24 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-yellow-300 dark:focus:border-blue-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-yellow-300 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring focus:ring-black text-black focus:ring-opacity-50"
                >
                  get in touch_
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
