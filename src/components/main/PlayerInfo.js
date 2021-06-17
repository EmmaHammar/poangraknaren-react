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
   
    //sparar nya statet med ny spelare i PlayerInfo-state
    saveNewPlayer = (myName, myScore) => {
        
        //initial players:
        // const playersArray = this.state.players;
        console.log("playersArray:", this.state.players);

        //skapa ny spelare:
        // let newPlayer = {4: {pName: myName, score: myScore} };
        // let newPlayer = {pName: myName, score: myScore};
        
        // let newPlayer = { 
        //     pKey: {pName: myName, score: myScore} 
        // };
        // console.log("newPlayer:", newPlayer);

        //lägga till nya spelaren till players-arrayen: - HUR?
        // [this.state.players].push(newPlayer);
        // [this.state.players].concat(newPlayer);
        // console.log("updaterad players:", this.state.players);


        //sätta uppdaterade arrayen players istället?? newState blir uppdaterade players 
        const newState = {...this.state.players}
        console.log("newState:", newState);

        let pKey = Object.keys(this.state.players).length+1
        console.log("pKey", pKey);
        newState[pKey] = {pName: myName, score: parseInt(myScore)} 
       
        this.setState ({
            players: newState
            
            // newState = ([...this.state.players, newPlayer])
            // this.props.saveNewPlayer([...this.props.players, newPlayer]);
            // newPlayer: {
            //     4: {pName: myName, score: myScore}
            // }
        })
    }
    updateScore = (newScore, id) => {
        // console.log("Update score", newScore, "id", id);
        const newState = {...this.state.players} 
        // console.log("newState", newState);
        newState[id].score = newScore;
        // console.log("newState[id]", newState[id]);

        this.setState(
            {players: newState}
        )
    }

    render() {
        return(
            <>
                <AddPlayer getNewPlayer={this.saveNewPlayer} />

                <ul className="playerList">
                    {Object.keys(this.state.players).map( (item, i) => 
                        <PrintPlayer 
                            key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore}
                        />
                    )}
                </ul>
            </>
            
        )
    }
}

export default PlayerInfo;