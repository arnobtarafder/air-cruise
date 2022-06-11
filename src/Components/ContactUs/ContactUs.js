import React from "react";

const ContactUs = () => {
  return (
    <section className="body-font relative h-screen lg:py-12 md:mt-20 ">
      <h1 className="text-3xl font-medium title-font text-primary text-center">
        Contact Us
      </h1>
      <div className="container md:px-0 px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-base-100 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-base-100 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold  tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                54, Gulshan 2
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold  tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="/" className=" leading-relaxed">
                example@email.com
              </a>
              <h2 className="title-font font-semibold  tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">017741451</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-base-100 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 px-8 py-6 rounded-lg shadow-xl">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="btn btn-primary flex mx-auto text-white rounded px-10">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
