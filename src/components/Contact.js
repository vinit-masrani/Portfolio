import React from "react";
import { PhoneIcon, MailIcon, TerminalIcon, GlobeIcon, LocationMarkerIcon } from "@heroicons/react/solid";


export default function Contact() {
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "test", name, email, message }),
  //   })
  //     .then(() => alert("Message sent!"))
  //     .catch((error) => alert(error));
  // }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto sm:flex-nowrap flex-wrap">
          <div className="text-center mb-20">
          <PhoneIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 text-center">
            Contact Information
          </h1>
        </div>
        {/* <div className="lg:w-full md:w-full bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-evenly relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=97+warren+st+new+york+city&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          </div> */}
        {/* <form
          netlify
          name="test"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Hire Me
          </h2>
          <p className="leading-relaxed mb-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
            suscipit officia aspernatur veritatis. Asperiores, aliquid?
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form> */}
        {/* Linkendin, Gmail, Phone, Email */}
      </div>
      {/* Linkendin, Gmail, Phone, Email */}
      <div className="bg-gray-900 relative flex flex-wrap px-4 py-6 justify-center rounded shadow-md">
            <div className="lg:w-1/3 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <LocationMarkerIcon className="w-4 inline-block mb-1 mr-1" />ADDRESS
              </h2>
              <p className="mt-1">
                Blacksburg <br />
                Virginia, VA 24060
              </p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <MailIcon className="w-5 inline-block mb-1 mr-1" />EMAIL
              </h2>
              <a 
              href="mailto:vinitmasrani@gmail.com"
              className="text-indigo-400 leading-relaxed">
                vinitmasrani@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
              <PhoneIcon className="w-4 inline-block mb-1 mr-1" />PHONE
              </h2>
              <p className="leading-relaxed">540-824-8695</p>
            </div>
            <div className="lg:w-1/3 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-sm">
              <GlobeIcon className="w-4 inline-block mb-1 mr-1" />LINKEDIN
              </h2>
              <a 
              href="https://www.linkedin.com/in/vinitmasrani/"
              target="_blank"
              className="text-indigo-400 leading-relaxed">
                vinitmasrani
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-sm mt-4">
              <TerminalIcon className="w-4 inline-block mb-1 mr-1" />GITHUB
              </h2>
              <a 
              href="https://github.com/vinit-masrani"
              target="_blank"
              className="text-indigo-400 leading-relaxed">
                vinit-masrani
              </a>
            </div>
          </div>
    </section>
  );
}
