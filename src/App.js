import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

class App extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main />
            </>
        );
    };
};

export default App;