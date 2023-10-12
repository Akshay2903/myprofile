import React from "react";
import HeroImg from "../assets/hero-img.png";

import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineMedium,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am <span className="text-accent">a</span>kshay <span className="text-accent">p</span>al,<br />
            Software Developer and<br/>
            a Technical Trainer
          </h1>

          <p className="py-5">
          <b>Debugging life, one line at a time</b>
          </p>

          <div className="flex py-5 ">
            <a
              href="https://twitter.com/AkshayP26768700"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineTwitter size={40} />{" "}
            </a>
            <a
              href="http://github.com/Akshay2903"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineGithub size={40} />{" "}
            </a>
            <a
              href="http://medium.com/@akshaypal2903"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              {" "}
              <AiOutlineMedium size={40} />{" "}
            </a>
          </div>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
