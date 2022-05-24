import React from "react";
import CountUp from "react-countup";
import { BiWorld} from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import "./Statistics.css";

const Statistics = () => {
    return (
        <div className="stats w-full stats-vertical lg:stats-horizontal shadow statistics-background">

            <div className="stat place-items-center">
                <div className="icons stat-title">
                    <BiWorld
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></BiWorld>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={60} duration={7} />
                    </span>
                    +
                </div>
                <div className="stat-title text-2xl text-blue-400">Countries</div>
            </div>


            <div className="stat place-items-center">
                <div className="icons stat-title">
                    <FaShoppingBasket
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></FaShoppingBasket>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={7980} duration={778} />
                    </span>
                    +
                </div>
                <div className="stat-title text-2xl text-yellow-400">Products</div>
            </div>


            <div className="stat place-items-center">
                <div className="icons stat-title">
                    <BsFillPeopleFill
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></BsFillPeopleFill>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={112500} duration={177} />
                    </span>
                    +
                </div>
                <div className="stat-title text-2xl text-green-400">Happy Clients</div>
            </div>


            <div className="stat place-items-center">
                <div className="icons stat-title">
                    <VscFeedback
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></VscFeedback>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={4890000} duration={399999} />
                    </span>
                    +
                </div>
                <div className="stat-title text-2xl text-red-400">Reviews</div>
            </div>

        </div>
    );
};

export default Statistics;
