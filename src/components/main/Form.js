import React, { Component } from "react";

class Form extends Component {

    state = {
        inputPlayer:this.props.inputPlayer,
        inputScore:this.props.inputScore,
    }

    onChange = (evt) => {        
        this.setState( {
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        this.props.getNewPlayer(this.state.inputPlayer)
        this.props.getNewScore(this.state.inputScore)

    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" id="inputPlayer" name="inputPlayer" placeholder="Player" value={this.state.inputPlayer} onChange={this.onChange} />
                <input type="number" id="inputScore" name="inputScore" placeholder="Score" value={this.state.inputScore} onChange={this.onChange}/>
                <button id="addPlayerBtn" className="btn">Add Player</button>
            </form>
        );
    };
};

export default Form;
