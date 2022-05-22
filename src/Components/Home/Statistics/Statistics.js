import React from "react";
import CountUp from "react-countup";
import { BiWorld} from "react-icons/bi";
import { FaShoppingBasket } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import "./Statistics.css";

const Statistics = () => {
    return (
        <div class="stats w-full stats-vertical lg:stats-horizontal shadow statistics-background">

            <div class="stat place-items-center">
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
                <div class="stat-desc">Countries</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <FaShoppingBasket
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></FaShoppingBasket>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={78} duration={7} />
                    </span>
                    +
                </div>
                <div class="stat-title">Products</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <BsFillPeopleFill
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></BsFillPeopleFill>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={1125} duration={9} />
                    </span>
                    +
                </div>
                <div class="stat-title">Happy Clients</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <VscFeedback
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></VscFeedback>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={48900} duration={11} />
                    </span>
                    +
                </div>
                <div class="stat-title">Feedback</div>
            </div>

        </div>
    );
};

export default Statistics;
