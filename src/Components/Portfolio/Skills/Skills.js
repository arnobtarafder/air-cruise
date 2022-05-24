import React from 'react';

const Skills = () => {
    return (
        <div>
            <h3 className="text-2xl lg:text-4xl text-center mb-10">
                <span className="font-semibold ">Skills.</span> I have
            </h3>
            <div className="hero mb-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="bg-base-100 lg:bg-transparent">
                        <div className="lg:flex lg:gap-2">
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                className="card w-auto max-w-lg shadow-2xl mb-2"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">Expertise</h2>
                                    <div className=" flex flex-wrap gap-2">
                                        <button className="btn">React.js</button>
                                        <button className="btn">ES6</button>
                                        <button className="btn">JavaScript</button>
                                        <button className="btn">HTML5</button>
                                        <button className="btn">CSS3</button>
                                        <button className="btn">Bootstrap</button>
                                        <button className="btn">Tailwind</button>
                                        <button className="btn">DaisyUI</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:gap-2">
                            <div
                                data-aos="fade-left"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="card w-auto max-w-lg shadow-2xl mb-2"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">Comfortable</h2>
                                    <div className=" flex flex-wrap gap-2">
                                        <button className="btn">npm</button>
                                        <button className="btn">Node.js</button>
                                        <button className="btn">Express.js</button>
                                        <button className="btn">Mongodb</button>
                                    </div>
                                </div>
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-delay="1000"
                                data-aos-duration="1000"
                                className="card w-auto max-w-lg shadow-2xl mb-2"
                            >
                                <div className="card-body">
                                    <h2 className="card-title">Familier</h2>
                                    <div className=" flex flex-wrap gap-2">
                                        <button className="btn">Context API</button>
                                        <button className="btn">Rest API</button>
                                        <button className="btn">Python</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;