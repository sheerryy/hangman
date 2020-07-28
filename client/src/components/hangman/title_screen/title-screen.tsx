import React from "react";
import {Button, Grid, withStyles} from "@material-ui/core";
import {Link} from "react-router-dom";

import {TitleScreenStyle} from "./title-screen.style";
import {getServerPrefix} from "../../../utils";

const SERVER_PREFIX = getServerPrefix();

interface PropTypes {
    classes: {
        main: string,
        title: string,
        description: string,
        difficultyText: string,
        difficultyArea: string,
        difficultyButton: string,
        bottomText: string,
    }
}

function TitleScreen({classes}: PropTypes) {
    return (
        <Grid container
              justify="center"
              className={classes.main}>
            <Grid item xs={12} className={classes.title}>
                hangman
            </Grid>
            <Grid item xs={12} className={classes.description}>
                May the odds be ever in your favor
            </Grid>
            <Grid item xs={12} className={classes.difficultyText}>
                Select Difficulty Level
            </Grid>
            <Grid item xs={12} className={classes.difficultyArea}>
                <Grid container spacing={1} justify="center">
                    <Grid item sm={7} xs={10}>
                        <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/game/easy`}>
                            <Button size={'large'} variant="outlined" className={classes.difficultyButton}>Easy</Button>
                        </Link>
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/game/medium`}>
                        <Button size={'large'} variant="outlined" className={classes.difficultyButton}>Medium</Button>
                        </Link>
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/game/hard`}>
                        <Button size={'large'} variant="outlined" className={classes.difficultyButton}>Hard</Button>
                        </Link>
                    </Grid>
                    <Grid item sm={7} xs={10}>
                        <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/game/almost-impossible`}>
                        <Button size={'large'} variant="outlined" className={classes.difficultyButton}>Almost
                            Impossible</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.bottomText}>
                    Multiplayer coming soon!
                </Grid>
            </Grid>
        </Grid>
    );
}

export default withStyles(TitleScreenStyle, {withTheme: true})(TitleScreen);
