import React from "react";
import { GiftIcon } from "@heroicons/react/solid";
import { achievements } from "../data";

export default function Achievements() {
    return (
        <section id="achievements" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <GiftIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
            Achievements & Publications
          </h1>
        </div>
        <div className="flex flex-wrap m-4 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {achievements.map((achievement) => (
            <div key={achievement.title} className="p-2 sm:w-full w-full text-center">
              <div className="bg-gray-800 rounded p-4 h-full items-center title-font font-medium text-white font-large text-xl">
                <a href={achievement.url} target="_blank">
                  {achievement.title}
                </a>
                <span className="title-font text-base text-gray-500">
                  <p className="mb-2 mt-3">
                    {achievement.description}
                  </p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
        </section>
    );
}