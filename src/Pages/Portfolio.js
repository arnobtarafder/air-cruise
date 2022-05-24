import React, { useEffect, useState } from "react";
import LandBanner from "../Components/Portfolio/LandBanner/LandBanner";
import Skills from "../Components/Portfolio/Skills/Skills";
import Project from "../Components/Portfolio/Projects/Project/Project";

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

            <Project />


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
        </div>
    );
};

export default Portfolio;
