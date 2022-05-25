import React from "react";

const Contact = () => {
  return (
    <div className="py-24 px-6 lg:px-24 bg-base-200">
      <h1 className="text-3xl lg:text-4xl text-center font-bold pb-20 font-mono">
        Let us inform your<br />
        Any feedback
      </h1>
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap -m-2">
          <div className="p-2 w-full md:w-1/2 lg:w-1/2">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-base-100 bg-opacity-50 rounded focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Full Name"
              />
            </div>
          </div>

          <div className="p-2 w-full md:w-1/2 lg:w-1/2">
            <div className="relative">
              <input
                type="text"
                id="text"
                name="text"
                className="w-full bg-base-100 bg-opacity-50 rounded  focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-1/2 lg:w-1/2">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Email Address"
              />
            </div>
          </div>

          <div className="p-2 w-full md:w-1/2 lg:w-1/2">
            <div className="relative">
              <input
                type="number"
                id="number"
                name="number"
                className="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Phone Number"
              />
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                className="w-full bg-base-100 bg-opacity-50 rounded focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="p-2 w-full">
            <button className="btn btn-primary flex mx-auto text-white rounded px-10">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
