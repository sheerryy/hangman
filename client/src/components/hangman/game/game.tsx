import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    withStyles
} from '@material-ui/core';

import {GameStyle} from './game.style';
import {getAlphabetMap, getServerPrefix, socket} from '../../../utils';

const SERVER_PREFIX = getServerPrefix();

interface PropTypes {
    classes: {
        main: string,
        backButton: string,
        hintButton: string
        hangman: string,
        word: string,
        keyboard: string,
        keyboardButton: string,
        keyboardButtonSuccess: string,
        keyboardButtonDanger: string,
        dailog: string,
        dialogTitle: string,
        dialogTitleText: string,
        dialogContent: string,
        dialogContentText: string,
        dialogActions: string,
        dialogActionsButtonSuccess: string,
        dialogActionsButtonDanger: string,
    }
    match: {
        params: {
            difficulty: 'easy' | 'medium' | 'hard' | 'almost-impossible',
        }
    }
}

function Game({classes, match}: PropTypes) {
    const [tries, setTries] = useState<number>(0);
    const [gameEnd, setGameEnd] = useState<boolean>(false);
    const [alphabetMap, setAlphabetMap] = useState<any>(getAlphabetMap());
    const [hangmanWord, setHangmanWord] = useState<string | undefined>('loading...');

    useEffect(() => {
        const getWord = () =>
            socket.emit('get-word', match.params.difficulty === 'almost-impossible' ? 'superHard' : match.params.difficulty);

        const setSocketListeners = () => {
            socket.on('word', (msg: string) => {
                setHangmanWord(msg);
            });

            socket.on('hint', (msg: string) => {
                setAlphabetMap((t: any) => ({...t, [msg]: 1}))
            });

            socket.on('word-complete', (msg: string) => {
                setGameEnd(true);
                setHangmanWord(msg);
            });

            socket.on('check-word', (msg: { correct: boolean, character: string }) => {
                if (msg.correct) {
                    setAlphabetMap((t: any) => ({...t, [msg.character]: 1}));
                } else {
                    setAlphabetMap((t: any) => ({...t, [msg.character]: 2}));
                    setTries((t) => (t === 6 ? 6 : (t + 1)))
                }
            });
        };

        getWord();
        setSocketListeners();
    }, [match]);

    useEffect(() => {
        if (tries === 6) {
            setGameEnd(true);
        }
    }, [tries]);

    const getHint = () => {
        socket.emit('hint', 'hint');
    };

    const checkAlphabet = (alphabet: string) => {
        socket.emit('check-word', alphabet);
    };

    return (
        <Grid container
              justify='center'
              className={classes.main}>
            <Grid item xs={12}>
                <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/`}>
                    <Button size={'large'} variant='outlined' className={classes.backButton}>
                        Go Back
                    </Button>
                </Link>
                <Button size={'large'} variant='outlined' onClick={getHint} className={classes.hintButton}>
                    hint
                </Button>
            </Grid>
            <Grid item xs={12} className={classes.word}>
                <div className={classes.hangman}>
                    <img src={`${SERVER_PREFIX}/hangman-${tries}.png`} height={'180'} width={'150'} alt='Hangman not fount :('/>
                </div>
            </Grid>
            <Grid item xs={12} className={classes.word}>
                {hangmanWord}
            </Grid>
            <Grid item xs={12} className={classes.keyboard}>
                {Object.keys(alphabetMap).length ? Object.keys(alphabetMap)
                    .map((key, value: number) =>
                        <Button key={`${key}-${value}`}
                                size={'small'}
                                variant='outlined'
                                onClick={() => checkAlphabet(key)}
                                disabled={(alphabetMap[key] === 1 || alphabetMap[key] === 2)}
                                className={alphabetMap[key] === 0 ? classes.keyboardButton : alphabetMap[key] === 1 ?
                                    classes.keyboardButtonSuccess : classes.keyboardButtonDanger}>
                            {key}
                        </Button>) : <></>
                }
            </Grid>
            <Dialog className={classes.dailog} maxWidth={"lg"} open={gameEnd} aria-labelledby="form-dialog-title">
                <DialogTitle className={classes.dialogTitle}>
                    <span className={classes.dialogTitleText}>GAME OVER</span>
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <DialogContentText className={classes.dialogContentText}>
                        {tries === 6 ?
                            match.params.difficulty === 'almost-impossible' ? 'TOLD YOU' : 'BETTER LUCK NEXT TIME'
                            : match.params.difficulty === 'almost-impossible' ? 'The Legend Has Arrived'.toUpperCase() : 'YOU WIN!!'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.dialogActions}>
                    <Grid justify={'center'} container>
                        <Grid item md={7} xs={12}>
                            <Link style={{textDecoration: 'none'}} to={`${SERVER_PREFIX}/`}>
                                <Button size={'medium'}
                                        variant='outlined'
                                        className={classes.dialogActionsButtonDanger}>
                                    Change Difficulty
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item md={5} xs={12}>
                            <Button size={'medium'}
                                    onClick={() => window.location.reload()}
                                    variant='outlined'
                                    className={classes.dialogActionsButtonSuccess}>
                                Try again
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}

export default withStyles(GameStyle, {withTheme: true})(Game);
