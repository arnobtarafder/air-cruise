import React from "react";
import CountUp from "react-countup";
import { VscShield } from "react-icons/vsc";
import { GiSteeringWheel, GiTrophyCup } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import "./Statistics.css";

const Statistics = () => {
    return (
        <div class="stats w-full stats-vertical lg:stats-horizontal shadow statistics-background">

            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <GiSteeringWheel
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></GiSteeringWheel>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={1238} duration={5} />
                    </span>
                    +
                </div>
                <div class="stat-desc">Countries</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <GiSteeringWheel
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></GiSteeringWheel>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={1238} duration={5} />
                    </span>
                    +
                </div>
                <div class="stat-title">Products</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <GiSteeringWheel
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></GiSteeringWheel>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={1238} duration={5} />
                    </span>
                    +
                </div>
                <div class="stat-title">Happy Clients</div>
            </div>


            <div class="stat place-items-center">
                <div className="icons stat-title">
                    <GiSteeringWheel
                        style={{ fontSize: "5rem", color: "#fff" }}
                    ></GiSteeringWheel>
                </div>
                <div className="number stat-value">
                    <span>
                        <CountUp delay={5} end={1238} duration={5} />
                    </span>
                    +
                </div>
                <div class="stat-title">Feedback</div>
            </div>

        </div>
    );
};

export default Statistics;
