import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
// import { projects } from "../data";
import { TerminalIcon } from "@heroicons/react/solid";
import { projects } from "../data";


export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="text-center  mb-20">
          <CodeIcon className="inline-block w-10 text-gray-500 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Projects
          </h1>
        </div>
        <div className="flex flex-wrap m-4">
          {projects.map((project) => (
            <div className="p-4 md:w-1/2 w-full" key={project.title}>
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="inline-flex items-center">
                  <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                    {project.title}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                    {project.duration}
                    </span>
                  </span>
                </div>
                {project.description_points.map((point) => (
                  <p className="leading-relaxed mb-6" key={point.description_point}>
                    {point.description_point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
