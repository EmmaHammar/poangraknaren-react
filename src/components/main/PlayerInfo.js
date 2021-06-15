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
    // state = {
    //     inputPlayer: "",
    //     inputScore: "",
    // }


    saveNewPlayer = (getPlayer) => {
        this.setState( {inputPlayer: getPlayer} )
    }

    saveNewScore = (getScore) => {
        this.setState( {inputScore: getScore} )
    }

    printAllPlayers = () => {
        const newState = {...this.state.players}
        console.log("newState", newState);
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
                            pName={this.state.players[item].pName} score={this.state.players[item].score}
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