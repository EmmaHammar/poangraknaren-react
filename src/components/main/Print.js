import { logDOM } from "@testing-library/dom";
import React from "react";

class Print extends React.Component {

    //lifecyclemetoder:
    addScore = (evt) => {
        console.log("öka score");
        //lägga till +1
        this.props.updateScore(this.props.score + 1, evt.target.id);
    }

    removeScore = (evt) => {
        console.log("minska score");
    }

    render() {
        return (
            <div className="playerInfoDiv">

                <h2>{this.props.showPlayer}</h2>
                <h3>{this.props.showScore}</h3>
                <button id="minus-btn" className="btn">-</button>
                <button id="plus-btn" className="btn">+</button>

            </div>
            
            // return <li>{this.props.pName}: {this.props.score} poäng <button onClick={this.addScore}>+</button> <button onClick={this.removeScore} id={this.score.id}???>-</button> </li>

            //skriva lifecyclemetoderna för buttons här i child:
                //veta vilken knapp vi tryckt - onClick
                //veta vilken spelare detta har gjorts för(därav id för spelare) - addScore resp removeScore
        )
    }
}


export default Print;


//Lägga i game.js - min motsvarighet är?


    // state = {
    //     players: {
    //         1: {pName: "Kalle", score: 0}
    //         1: {pName: "Anna", score: 5}
    //         3: {pName: "Johan", score: 8}
    //     }
    // }

    // ovanför render: 
    // updateScore =(newScore) => {
    //     console.log("update score", newScore, "id", id);
    //     const newState = {...this.state.players}
    //     console.log("newState", newState)
    // }

    // i render:

{/* <ul className="playersList">

{/* öppnar upp vårt objekt o hämtar nycklar från det. Tar in vilket state vi ska hämta=this.state.players  */}
{/* map() skapar ny iteration av array.  inuti map() så är det en namnlös funktion, står eg function x(item, i)  */}
{/* hämtar från en array, behöver [item] i players[item] */}
// sätter key={i}
// sätter id
//göra en callback sist

// {Object.keys(this.state.players).map( (item, i) => 
//     <Player key={i} id={item} pName={this.state.players[item].pName} score={this.state.players[item].score} updateScore={this.updateScore} />

//     )}

// </ul> */}

//Nästa steg: uppdatera statet i app.js - så att alla som har det statet omrenderas
// hämta ut players-objektet från statet o ändra rätt score från spelare o spara över statet.