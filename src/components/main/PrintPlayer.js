import { logDOM } from "@testing-library/dom";
import React from "react";

class PrintPlayer extends React.Component {

    addScore = (evt) => {
        console.log("add score");
    }

    removeScore = (evt) => {
        console.log("remove score");
    }

    render() {
        return (
            <div className="playerInfoDiv">

                <h2>{this.props.pName}</h2>
                <h3>{this.props.score} poäng</h3>
                <button onClick={this.removeScore} id="minus-btn" className="btn">-</button>
                <button onClick={this.addScore} id="plus-btn" className="btn">+</button>

            </div>
        )
    }
}


export default PrintPlayer;