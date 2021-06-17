import React from "react";
import Header from "./components/header/header";
import PlayerInfo from "./components/main/PlayerInfo";

class App extends React.Component {

    render() {
        return (
            <>
                <Header />
                <PlayerInfo />                                
            </>
        );
    };
};

export default App;