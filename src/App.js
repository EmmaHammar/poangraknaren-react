import React from "react";
import Header from "./components/header/header";
import Form from "./components/main/Form";
import Print from "./components/main/Print";

// import Main from "./components/main/main";

class App extends React.Component {

    state = {
        inputPlayer: "",
        inputScore: "",
        // inputScore: "skriv score", //varför syns inte detta medan om jag skriver inputPlayer: "skriv player", syns det?
    }

    saveNewPlayer = (getPlayer) => {
        this.setState( {inputPlayer: getPlayer} )
    }

    saveNewScore = (getScore) => {
        this.setState( {inputScore: getScore} )
    }

    render() {
        return (
            <>
                <Header />
                <Form 
                    inputPlayer={this.state.inputPlayer}
                    getNewPlayer={this.saveNewPlayer}
                    
                    inputScore={this.state.inputScore}
                    getNewScore={this.saveNewScore}

                />
                <Print 
                    showPlayer={this.state.inputPlayer}
                    showScore={this.state.inputScore} 
                />
                {/* <Main /> */}
            </>
        );
    };
};

export default App;