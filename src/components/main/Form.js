import React, { Component } from "react";

class Form extends Component {
    render() {
        return(
            <form>
                <input type="text" id="inputPlayer" placeholder="Player" />
                <input type="number" id="inputScore" placeholder="Score" />
                <button id="addPlayerBtn">Add Player</button>
            </form>
        );
    };
};

export default Form;
