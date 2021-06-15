import React, { Component } from "react";

class AddPlayer extends Component {

    state = {
        pName: "",
        score: "",
    }

    onChange = (evt) => {        
        this.setState( {
            [evt.target.name]: evt.target.value
        })
    }

    onSubmit = (evt) => {
        evt.preventDefault();

        //skicka tillbaka nya statet till App.js:
        this.props.getNewPlayer(this.state.pName, this.state.score)
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input type="text" id="pName" name="pName" placeholder="Add player name" value={this.state.pName} onChange={this.onChange} />
                
                <input type="number" id="score" name="score" placeholder="Add score" value={this.state.score} onChange={this.onChange} />

                <button id="addPlayerBtn" className="btn">Add Player</button>
            </form>
        );
    };
};

export default AddPlayer;
