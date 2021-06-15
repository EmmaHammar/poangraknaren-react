import React from "react";
import Header from "./components/header/header";
import PlayerInfo from "./components/main/PlayerInfo";

// import Main from "./components/main/main";

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <PlayerInfo />                
                {/* <Player showPlayers={this.state.players}/>  */}
                
            </>
        );
    };
};

export default App;