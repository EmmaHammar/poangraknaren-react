import { logDOM } from "@testing-library/dom";
import React from "react";

class Print extends React.Component {

    render() {
        return (
            <div className="playerInfoDiv">

                <h2>{this.props.showPlayer}</h2>
                <h3>{this.props.showScore}</h3>
                <button id="minus-btn" className="btn">-</button>
                <button id="plus-btn" className="btn">+</button>

            </div>
        )
    }
}


export default Print;