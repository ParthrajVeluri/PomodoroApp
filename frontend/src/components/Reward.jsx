import { useState, useRef, useEffect } from "react";
import "../styles/Reward.css";
import points from "../assets/points.webp";
import {AutoTextSize} from "auto-text-size";

function Reward({ name }) {
    let name_placeholder = "Play video games ";
    let cost_placeholder = 23;

    return (
        <div className="reward-container">
            <div className="reward-title-container">
                <AutoTextSize minFontSizePx={24} maxFontSizePx={80}>{name_placeholder}</AutoTextSize>
            </div>
            <div className="redeem-container">
                <div className="points-label">
                    <img src={points}></img>
                    <h2>{cost_placeholder}</h2>
                </div>
                <button>Redeem</button>
            </div>
        </div>
    );
}

export { Reward };
