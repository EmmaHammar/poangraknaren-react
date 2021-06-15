import React, { Component } from "react";
import AddPlayer from "./AddPlayer";
import PrintPlayer from "./PrintPlayer";



class PlayerInfo extends Component {

    state = {
        //gör en multidimensionell array:
        players: {
            1: {pName: "Pippi", score: 0},
            2: {pName: "Tommy", score: 5},
            3: {pName: "Annika", score: 8},
        }
    }
  

    // saveNewPlayer = (getPlayer) => {
    //     this.setState( {inputPlayer: getPlayer} )
    // }

    // saveNewScore = (getScore) => {
    //     this.setState( {inputScore: getScore} )
    // }

   
    updateScore = (newScore, id) => {
        console.log("Update score", newScore, "id", id);

        const newState = {...this.state.players} 
        console.log("newState", newState);
        newState[id].score = newScore;
        // console.log("newState[id]", newState[id]);

        this.setState(
            {players: newState}
        )
    }

    render() {
        return(
            <>
                <AddPlayer 
                        inputPlayer={this.state.inputPlayer}
                        getNewPlayer={this.saveNewPlayer}
                        
                        inputScore={this.state.inputScore}
                        getNewScore={this.saveNewScore}
                />

                <ul className="playersList">
                    {Object.keys(this.state.players).map( (item, i) => 
                        <PrintPlayer 
                            key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore}
                            // showPlayer={this.state.inputPlayer}
                            // showScore={this.state.inputScore} 
                        />
                    )}
                </ul>

                
            </>
            
        )
    }
    

}

export default PlayerInfo;