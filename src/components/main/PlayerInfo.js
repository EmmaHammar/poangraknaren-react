import React, { Component } from "react";
import AddPlayer from "./AddPlayer";
import PrintPlayer from "./PrintPlayer";

class PlayerInfo extends Component {

    state = {
        //gör en multidimensionell array:
        players: {
            1: {pName: "Pippi", score: 11},
            2: {pName: "Tommy", score: 5},
            3: {pName: "Annika", score: 8},
        }
    }
   
    //sparar nya statet med ny spelare i PlayerInfo-state
    saveNewPlayer = (myName, myScore) => {
        
        //initial players:
        // console.log("playersArray:", this.state.players);

        //sätta ett nytt state som initialt är players-arrayen (senare kommer newState vara players-arrayen + nya spelare)
        const newState = {...this.state.players}
        // console.log("newState:", newState);

        //dynamiskt skapa löpnummer:
        let pKey = Object.keys(this.state.players).length+1
        // console.log("pKey", pKey);

        //lägga till ny spelare till players-arrayen som då skriver över/uppdaterar newState:
        //parseInt för att siffran ska bli en number och inte string
        newState[pKey] = {pName: myName, score: parseInt(myScore)} 
       
        //sätter players-arrayen som newState:
        this.setState ({
            players: newState
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
        //Janne skrev: 
        // const playerList = this.state.players;
        // playerList.sort((a, b) => b.score - a.score);

        //hämta players state:
        const getPlayers = {...this.state.players}

        // convert players (object) to an array:
        const playersArray = Object.keys(getPlayers).map((key) => getPlayers[key]);
        // console.log("convertPlayersToArray:", playersArray);

        //sort:
        playersArray.sort( (a, b) => b.score - a.score );
    
        return(
            <>
                <AddPlayer getNewPlayer={this.saveNewPlayer} />

                <ul className="playerList">

                    {/* printar osorterad players: */}
                    {/* {Object.keys(this.state.players).map( (item, i) => 
                        <PrintPlayer 
                            key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore}
                        />
                    )} */}


                    {Object.keys(this.state.players).map( (item, i) => 
                        <PrintPlayer 
                            key={i} id={item} pName={playersArray[i].pName} score={playersArray[i].score} updateScore={this.updateScore}
                        />
                    )}

                    {/* den sorterar men buggit samt får error: Warning: Each child in a list should have a unique "key" prop. */}
                    {/* {Object.keys(this.state.players).map( (item, i) => 
                        <PrintPlayer 
                            key={playersArray[i].id} id={i} pName={playersArray[i].pName} score={playersArray[i].score} updateScore={this.updateScore}
                        />
                    )} */}

                </ul>
            </>
        )
    }
}

export default PlayerInfo;