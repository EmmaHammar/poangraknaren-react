import React, { Component } from "react";
import Form from "./Form";

class Main extends Component {

    state = {
        inputPlayer: "",
        inputScore: "",
        // inputScore: "skriv score", //varför syns inte detta medan om jag skriver inputPlayer: "skriv player", syns det?
    }

    render() {
        return(
        <>
            <Form 
                inputPlayer={this.state.inputPlayer}

                inputScore={this.state.inputScore}
            />
        </>
        );
    };
};

export default Main;