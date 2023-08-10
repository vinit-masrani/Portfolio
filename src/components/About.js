import React from "react";
import resume from "../assets/resume.pdf"

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Vinit Masrani.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
          I am a new grad from Virginia Tech University, graduated in 2023. 
          I have over 9 years of academic experience with computer science, 
          having started it in high school. 
          I have worked on various profiles, including Data Analysis, 
          Software Engineering and Web Development. I am a team player, 
          never shy away from taking initiatives 
          and would love to be a part of your team to learn and collaborate!
          </p>
          <div className="flex justify-center">
            <a
              href={resume}
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Resume
            </a>
            <a
              href="mailto:vinitmasrani@gmail.com"
              className="ml-4 inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 hover:text-white rounded text-lg">
              Contact Me
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}