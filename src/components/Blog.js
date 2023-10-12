import React from "react";
import akshayblogmedium from "../assets/akshayblogmedium.png";
import akshaybloghashnode from "../assets/akshaybloghashnode.png";

const Blog = () => {
  
  const blogs = [
    {
      img: akshayblogmedium,
      title: "akshayblogmedium",
      url: "http://medium.com/@akshaypal2903",
      desc:"My Medium blog, where I share programming articles.",
    },
    {
      img: akshaybloghashnode,
      title: "akshaybloghashnode",
      url: "https://akshya.hashnode.dev/",
      desc:"Explore programming knowledge on my Hashnode blog.",
    }]

  return (
    <section className="bg-primary text-white px-5 py-32" id="blog">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[100px] border-indigo-600 pb-2">
            Blogs
          </h2>

          <p className="pb-5">Explore my insightful blogs on Medium and Hashnode, 
          covering a variety of topics including basic programming and tech tools.</p>
        </div>

        <div></div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((item) => {
          console.log(item);

          return (
            <div>
              <img src={item.img} alt={item.title} />
              <h3 className="py-5 text-2xl">{item.desc}</h3>
              <a
                href={item.url}
                className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
              >
                Read More
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
