import React, { Component } from "react";

class Form extends Component {

    state = {
        inputPlayer:this.props.inputPlayer,
        inputScore:this.props.inputScore,
    }

    onChange = (evt) => {
        console.log("upptäckte en ändring");
    }

    render() {
        return(
            <form>
                <input type="text" id="inputPlayer" placeholder="Player" value={this.state.inputPlayer} onChange={this.onChange} />
                <input type="number" id="inputScore" placeholder="Score" value={this.state.inputScore} onChange={this.onChange}/>
                <button id="addPlayerBtn">Add Player</button>
            </form>
        );
    };
};

export default Form;
