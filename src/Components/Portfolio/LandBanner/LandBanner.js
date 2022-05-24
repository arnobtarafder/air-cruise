import React from 'react';
import { BsGithub, BsGoogle, BsLinkedin } from 'react-icons/bs';

const LandBanner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://zipgrip-tooling.web.app/static/media/developer.d33781fae61329526ad2.png"
            className="w-full max-w-lg hidden lg:block"
            alt="hero-img"
          />
          <div className="px-3">
            <div className="flex gap-5 items-center">
              <h2 className="text-2xl lg:text-4xl">Hi! I'm</h2>{" "}
              <img
                className="w-16 lg:w-20 rounded-full"
                src="https://zipgrip-tooling.web.app/static/media/hand.28d740f9bc96c47722bb.gif"
                alt="handShake"
              />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">Rafid Mahmud Tarafder</h1>
            <p className="py-6 text-2xl">
              A driven individual that thrives on working on end-to-end products
              that generate sustainable and scalable social and technical
              systems to make a difference.
            </p>
            <div className="mb-5 flex items-center gap-5">
              <a
                href="https://github.com/arnobtarafder"
                rel="noreferrer"
                target={"_blank"}
                className="rounded-full bg-black px-3 py-2 text-3xl"
              >
                <BsGithub className=" text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/rafid-mahmud-tarafder-0386b122a/"
                rel="noreferrer"
                target={"_blank"}
                className="rounded-full bg-blue-900 px-3 py-2 text-3xl"
              >
                <BsLinkedin className=" text-white" />
              </a>
              <a
                href="https://www.google.com/"
                rel="noreferrer"
                target={"_blank"}
                className="rounded-full bg-red-500 px-3 py-2 text-3xl"
              >
                <BsGoogle className="  text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandBanner;