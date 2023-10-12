import React from "react";
import akshaymeals from "../assets/akshaymeals.png";
import akshaygpt from "../assets/akshaygpt.png";
import akshaycontacts from "../assets/akshaycontacts.png";
import akshaycommunity from "../assets/akshaycommunity.png";


const Projects = () => {
  const projects = [
    {
      img: akshaymeals,
      title: "akshaymeals",
      desc: "One-page Restaurant Order App with React.js, featuring an interactive menu, and intuitive cart management.",
      live: "https://akshaymeals.netlify.app/",
      code: "https://github.com/Akshay2903/Restaurant-website",
    },
    {
      img: akshaygpt,
      title: "akshaygpt",
      desc: "An interactive Gpt-3 Web Application build using React.js, JavaScript and CSS.",
      live: "https://chatgpt3akshay.netlify.app/",
      code: "https://github.com/Akshay2903/gpt3_gsm-reactjs-",
    },
    {
      img: akshaycontacts,
      title: "akshaycontacts",
      desc: "A contact tracker made using React, Vite, and React Router for easy management.",
      live: "https://contactstracker.netlify.app/",
      code: "https://github.com/Akshay2903/Contacts-Tracker",
    },
    {
      img: akshaycommunity,
      title: "akshaycommunity",
      desc: "A knowledge-sharing community app, powered by React.js, with Google account login facilitated by Firebase.",
      live: "https://chatapplication12.netlify.app/",
      code: "https://github.com/Akshay2903/chat-group",
    },
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
          "These projects are some of my best works.
           I've built them using JavaScript, React.js,  Node.js, Express.js, MongoDB, and MySQL. Take a look!
          </p>
        </div>

        <div className="about-img"></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img} alt={project.title} />
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
