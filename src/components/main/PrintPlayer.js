import { logDOM } from "@testing-library/dom";
import React from "react";

class PrintPlayer extends React.Component {

    addScore = (evt) => {
        console.log("add score");
        console.log("evt.target.id:", evt.target.id);
        this.props.updateScore(this.props.score + 1, evt.target.id)
    }

    removeScore = (evt) => {
        console.log("remove score");
    }

    render() {
        return (
            <div className="playerInfoDiv">

                <h2>{this.props.pName}</h2>
                <h3>{this.props.score} poäng</h3>
                <button onClick={this.removeScore} id="minus-btn" className="btn" id={this.props.id}>-</button>
                <button onClick={this.addScore} id="plus-btn" className="btn" id={this.props.id}>+</button>

            </div>
        )
    }
}


export default PrintPlayer;