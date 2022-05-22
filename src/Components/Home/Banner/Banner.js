import React from "react";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-16 lg:mt-0 px-16">
            <div className="hero-content flex-col lg:flex-row-reverse gap-y-12 lg:gap-x-32 py-12 lg:py-0">
                <img
                    src="https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1440x1440/public/2022-05/HIGH%20-%20MUC%20CityAirbus%20NextGen%20Illustration%20-%20Copyright%20Airbus%20Helicopters.jpg?itok=t--8SJSh"
                    className="lg:w-1/2 w-full lg:h-auto h-100 object-cover object-center rounded-lg"
                    alt=""
                />
                <div className="lg:w-1/2 w-full lg:py-20 mb-6 lg:mb-0">
                    <h1 className="text-5xl font-bold mb-2">Air Cruise</h1>
                    <h1 className="text-5xl font-bold">Corporation</h1>
                    <p className="py-12 leading-loose">
                        With the goal of developing advanced air mobility in Germany, leading companies, universities, research institutions and municipalities are joining forces under the leadership of Airbus to form the Air Mobility Initiative (AMI).</p>
                    <button className="btn btn-primary text-white rounded px-10">
                        Get an Appointment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;