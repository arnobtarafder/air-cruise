import React, { useEffect, useState } from "react";


const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <section>

            <h3 className=" text-2xl lg:text-4xl text-center my-20">
                <span className="font-semibold ">Personal.</span> Projects
            </h3>
            <div className="max-w-7xl mx-auto mb-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects?.map((project) => (
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
                                {project?.features?.map((feature) => (
                                    <li key={feature._tid}>- {feature.name}</li>
                                ))}
                            </ul>
                            <p className="text-bold">Technologies Used:</p>
                            <ul>
                                {project?.technologies?.map((technology) => (
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
                    <span className="font-semibold">rmtarnob@gmail.com</span>
                </p>
            </div>
        </section>

    );
};

export default Project;



// <div className="px-3 my-3 grid" xs={12} md={6} lg={4}>
// <Fade bottom>
//   <div className="bg-secondary min-h-[480px] px-2">
//     <div className="work-img-container">
//       <img className="work-img" src={work.photo} alt={work.name} />
//     </div>
//     <div className="p-2">
//       <h4 className="text-2xl font-medium py-2">{work.name}</h4>
//       <p className="text-neutral">{work.description}</p>
//     </div>

//     {work.technologies.map((item, index) => (
//       <div className="font-medium relative inline-block px-2 m-1 tracking-tighter" key={index}>
//         {item.name}
//       </div>
//     ))}

//     <div>
//       <div className="text-center py-3" xs={12}>
//         <a href={work.github} rel="noopener noreferrer" target="_blank">
//           <FontAwesomeIcon
//             className="work-icon"
//             title="Go to Github"
//             icon={faGithub}
//           />
//         </a>
//         <a href={work.website} rel="noopener noreferrer" target="_blank">
//           <FontAwesomeIcon
//             className="work-icon"
//             title="Visit Website"
//             icon={faExternalLinkAlt}
//           />
//         </a>
//       </div>
//     </div>
//   </div>
// </Fade>
// </div>