import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills_categories } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills_categories.map((skills_category) => (
            <div key={skills_category.category} className="p-2 sm:w-full w-full text-center">
              <div className="bg-gray-800 rounded p-4 h-full items-center title-font font-medium text-white font-large text-xl">
                {skills_category.category}
                <br></br>
                <br></br>
                <span className="title-font text-xs text-white">
                  {skills_category.skills.map((skill) => (
                    <div key={skill.skill} className="inline-block">
                      <img style={{height: 80, width: 80}} className="mx-5" src={skill.icon} alt={skill.skill}>
                      </img>
                      <p className="mb-10">
                        {skill.skill}
                      </p>
                    </div>
                  ))}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
