import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BriefcaseIcon } from "@heroicons/react/solid";
import { experiences } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto lg:px-40">
        <div className="text-center mb-20">
        <BriefcaseIcon className="inline-block w-10 text-gray-500 mb-4" />
      <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
            Experience
          </h1>
        </div>
      
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
              key={experience.role + experience.company}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(31, 41, 55)', color: 'gray-500', boxShadow:'none'}}
              date={experience.duration}
              iconStyle={{ background: 'rgb(31, 41, 55)', color: '#fff'}}
              icon={<BriefcaseIcon />}
              contentArrowStyle={{border:'none'}}
              >
                <p className="text-white" style={{fontSize: "1.25rem", fontWeight: "bolder"}}>{experience.role}</p>
                <p className="text-white">{experience.company}</p>
                <p className="text-white">{experience.location}</p>
                  {experience.description_points.map((point) => (
                    <p key={point.description_point}>
                      {point.description_point}
                    </p>
                  ))}
              </VerticalTimelineElement>
            ))}
</VerticalTimeline>
</div>
    </section>
  );
}
