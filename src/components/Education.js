import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AcademicCapIcon } from "@heroicons/react/solid";
import { all_education } from '../data'


export default function Education() {
    return (
        <section id="education" className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
            <AcademicCapIcon className="inline-block w-10 text-gray-500 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
            Education
          </h1>
            </div>
          
            <VerticalTimeline>
            {all_education.map((education) => (
              <VerticalTimelineElement
              key={education.degree}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(31, 41, 55)', color: 'gray-500', boxShadow:'none'}}
              date={education.duration}
              iconStyle={{ background: 'rgb(31, 41, 55)', color: '#fff'}}
              icon={<AcademicCapIcon />}
              contentArrowStyle={{border:'none'}}
              >
                  <h3 className="vertical-timeline-element-title">{education.college}</h3>
                  <h3 className="vertical-timeline-element-title">Major: {education.field}</h3>
                  <h3 className="vertical-timeline-element-title">Level: {education.degree}</h3>
                  <h4 className="vertical-timeline-element-subtitle">GPA: {education.gpa}</h4>
                  <h4 className="vertical-timeline-element-subtitle">{education.location}</h4>
              </VerticalTimelineElement>
            ))}
</VerticalTimeline>
</div>
        </section>
    );
}