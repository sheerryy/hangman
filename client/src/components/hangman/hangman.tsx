import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import TitleScreen from "./title_screen";
import Game from "./game";
import {getServerPrefix} from "../../utils";

const SERVER_PREFIX = getServerPrefix();

function Hangman() {
    return (
        <Router>
            <Switch>
                <Route exact path={`${SERVER_PREFIX}/game/:difficulty`} component={Game} />
                <Route exact path={`${SERVER_PREFIX}/*`}>
                    <TitleScreen/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Hangman;
