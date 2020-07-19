import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import TitleScreen from "./title_screen";
import Game from "./game";


function Hangman() {
    return (
        <Router>
            <Switch>
                <Route exact path="/game/:difficulty" component={Game} />
                <Route exact path="/*">
                    <TitleScreen/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Hangman;
