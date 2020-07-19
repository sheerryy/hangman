import React from 'react'
import 'normalize.css';
import {createMuiTheme, Grid, MuiThemeProvider, withStyles} from '@material-ui/core';

import './App.scss';
import {AppStyle} from './App.style';
import {Hangman} from './components';

interface PropTypes {
    classes: {
        game: string,
        gameWrap: string,
    }
}

const THEME = createMuiTheme({
    typography: {
        "fontFamily": `"Lexend Zetta", sans-serif`,
        "fontSize": 11,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});

function App({classes}: PropTypes) {
    return (
        <MuiThemeProvider theme={THEME}>
            <Grid container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  className="App">
                <Grid item xl={6} md={6} sm={10} xs={11}>
                    <div className={classes.gameWrap}>
                        <div className={classes.game}>
                            <Hangman></Hangman>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </MuiThemeProvider>
    );
}

export default withStyles(AppStyle, {withTheme: true})(App);
