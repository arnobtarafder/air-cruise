import React from 'react';

const Technologies = () => {
    return (
        <div>
            <h3 className="md:hidden text-2xl text-center mt-20">
                <span className="font-semibold ">Technologies.</span> I know
            </h3>
            <div className="lg:bg-base-100 px-6">
                <h3 className="hidden md:block text-2xl lg:text-4xl text-center pt-10">
                    <span className="font-semibold ">Technologies.</span> I know
                </h3>
                <div className="mb-10 py-20 lg:py-10 max-w-7xl mx-auto flex flex-col lg:flex-row lg:flex-wrap justify-center lg:justify-between items-center lg:items-baseline gap-10 lg:gap-0">
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLEuy1HlLh96fLvB6_ZTXywcQoVHNgK7BKBrP_e9PJw&s" alt="git" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">git</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXqDKyfbUJ3bsDc5tPovwsAHicZqq5HIMDYPvmRzpdmg&s" alt="github " className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">github</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://github.com/heroku/favicon/raw/master/favicon.iconset/icon_32x32.png" alt="heroku " className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">heroku</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCs7_EKbgALLq-gRSjih3SyFRSRX7uVa9Xzag8G_JIIQ&s" alt="vscode " className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">VS Code </p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_tN4Dw-zN7Oljk7l8YmWvFvMB4M3XA2PgjPECLmiEsA&s" alt="figma" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">Figma</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img src="https://www.gstatic.com/devrel-devsite/prod/vda9a852fe58dc4f0a77df9bfbfef645e053a541851391590524ef926ac0c5e1c/firebase/images/lockup.svg" alt="firebase" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">firebase</p>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="card">
                        <figure className="w-24 mx-auto">
                            <img
                                src="https://w7.pngwing.com/pngs/425/124/png-transparent-google-chrome-icon-google-chrome-web-browser-logo-computer-icons-chrome-orange-chrome-os-internet-explorer.png"
                                alt="chromedevtool"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <p className="text-2xl">Chrome DevTool</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;