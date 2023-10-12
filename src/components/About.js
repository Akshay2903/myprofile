import React from "react";
import AboutImg from "../assets/about-img.png";

const About = () => {
  return (
    <section className="bg-secondery text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
          I am Akshay Pal, a passionate software developer and dedicated technical trainer with expertise in 
          HTML, CSS, JavaScript, Python, React.js, Redux.js, Node.js, Express.js, MySQL, MongoDB, and a strong 
          proficiency in solving over 500 problems on platforms like LeetCode, GeeksforGeeks, HackerRank, 
          InterviewBit, and CodingNinja.
          </p>
          <p className="pb-5">
          I've also had the privilege of training over 50 students in HTML, 
          CSS, JavaScript, and fundamental Data Structures and Algorithms.
          </p>

          <p>
          In addition, I enjoy sharing my 
          knowledge and experiences by writing technical blogs on platforms like Medium and Hashnode, 
          where I discuss programming and showcase my projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
