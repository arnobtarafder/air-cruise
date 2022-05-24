import React, { useEffect, useState } from "react";
import heroImg from "../../images/background/developer.png";
import handShake from "../../images/background/hand.gif";
import skills from "../../images/background/skills.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { BsGithub, BsGoogle } from "react-icons/bs";
import git from "../../images/logo/git.png";
import github from "../../images/logo/github.png";
import heroku from "../../images/logo/heroku.png";
import vscode from "../../images/logo/vscode.png";
import figma from "../../images/logo/figma.png";
import chromedevtool from "../../images/logo/chromedevtool.jpg";
import firebase from "../../images/logo/firebase.png";
import iub from "../../images/logo/iub.jpg";
import LandBanner from "../Components/Portfolio/LandBanner/LandBanner";
import Skills from "../Components/Portfolio/Skills/Skills";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);


  return (
    <div className=" bg-[#eff0f3]">

        <LandBanner />

        <Skills />


      <div className="max-w-7xl mx-auto mb-20 px-6">
        <h3 className="text-2xl lg:text-4xl mb-10">
          <span className="font-semibold ">Educational.</span> background
        </h3>
        {/* <div className="card lg:card-side bg-base-100">
          <div className="avatar justify-center md:justify-start">
            <div className="w-52 rounded-xl p-5">
              <img src="http://eusc.edu.bd/media/logos/qMPXEAczusk44bZa27MytL21UhALI8HykceMjbkl.png" alt="iub" />
            </div>
          </div>
          <div className="card-body text-center md:text-left">
            <h2 className="card-title text-2xl">
            ইনজিনিয়ারিং ইউনিভারসিটি স্কুল এন্ড কলেজ
            </h2>
            <p className="font-semibold">
            </p>
            <p>Jan'-Sep'21</p>
          </div>
        </div> */}
      </div>
      <h3 className=" text-2xl lg:text-4xl text-center my-20">
        <span className="font-semibold ">Personal.</span> Projects
      </h3>
      <div className="max-w-7xl mx-auto mb-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="card w-full bg-base-100">
            <div className="card-body">
              <h2 className="card-title text-2xl">{project.name}</h2>
              <p className="text-xl">{project.type}</p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={project.liveSite}
                  rel="noreferrer"
                  target={"_blank"}
                  className="btn btn-primary text-white btn-sm"
                >
                  Live Site
                </a>
                <a
                  href={project.gitClient}
                  rel="noreferrer"
                  target={"_blank"}
                  className="btn btn-primary text-white btn-sm"
                >
                  Git Client
                </a>
                <a
                  href={project.gitServer}
                  rel="noreferrer"
                  target={"_blank"}
                  className="btn btn-primary text-white btn-sm"
                >
                  Git Server
                </a>
              </div>
              <p className="text-bold">Features:</p>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature._tid}>- {feature.name}</li>
                ))}
              </ul>
              <p className="text-bold">Technologies Used:</p>
              <ul>
                {project.technologies.map((technology) => (
                  <li key={technology._uid}>- {technology.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-base-100 text-base-content my-20 py-5">
        <p className="text-center">
          For more query please email at{" "}
          <span className="font-semibold">mahiralkamal.mak@gmail.com</span>
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
