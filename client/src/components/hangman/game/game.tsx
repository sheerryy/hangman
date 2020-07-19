import React, {useEffect, useState} from "react";
import {Button, Grid, withStyles} from "@material-ui/core";
import {GameStyle} from "./game.style";
import {Link} from "react-router-dom";

interface PropTypes {
    classes: {
        main: string,
        backButton: string,
        hintButton: string
        hangman: string,
        word: string,
        keyboard: string,
        keyboardButton: string,
    }
    match: {
        params: {
            difficulty: string,
        }
    }
}

function Game({classes, match}: PropTypes) {
    const [hangmanImage, setHangmanImage] = useState('/Hangman-0.png');


    useEffect(() => {

    }, []);

    const getAlphabetMap = () => {
        let alphabetMap = {};

        for (let i = 0; i < 26; ++i) {
            alphabetMap = {...alphabetMap, [String.fromCharCode(65 + i)]: 0}
        }

        return alphabetMap;
    };

    return (
        <Grid container
              justify="center"
              className={classes.main}>
            <Grid item xs={12}>
                <Link style={{textDecoration: 'none'}} to={'/'}>
                    <Button size={'large'} variant="outlined" className={classes.backButton}>
                        Go Back
                    </Button>
                    <Button size={'large'} variant="outlined" className={classes.hintButton}>
                        hint
                    </Button>
                </Link>
            </Grid>
            <Grid item xs={12} className={classes.word}>
                <div className={classes.hangman}>
                    <img src={hangmanImage} height={'180'} width={'150'} alt='Hangman not fount :('/>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.word}>
                {match.params.difficulty}
            </Grid>
            <Grid item xs={12} className={classes.keyboard}>
                {Object.keys(getAlphabetMap())
                    .map((key, value) => <Button key={`${key}-${value}`} size={'small'}
                                                 variant="outlined" onClick={() => setHangmanImage('/Hangman-6.png')}
                                                 className={classes.keyboardButton}>{key}</Button>)
                }
            </Grid>
        </Grid>
    );
}

export default withStyles(GameStyle, {withTheme: true})(Game);
