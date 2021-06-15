import { logDOM } from "@testing-library/dom";
import React from "react";

class PrintPlayer extends React.Component {

    render() {
        return (
            <div className="playerInfoDiv">

                <h2>{this.props.pName}</h2>
                <h3>{this.props.score} poäng</h3>
                <button id="minus-btn" className="btn">-</button>
                <button id="plus-btn" className="btn">+</button>

            </div>
        )
    }
}


export default PrintPlayer;