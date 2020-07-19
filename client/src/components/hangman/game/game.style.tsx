import {createStyles, Theme} from '@material-ui/core';

const colors = {
    red: 'rgba(197, 0, 50, 0.86)',
    lightRed: 'rgba(197, 0, 50, 0.15)',
    lightGrey: 'rgba(93,92,95,0.27)',
    green: 'rgba(5,197,83,0.86)',
    lightGreen: 'rgba(5,197,83,0.15)',
};

const buttonStyle = {
    width: 'fit-content' as 'fit-content',
    color: 'lightgrey',
    backgroundColor: colors.lightRed,
    borderColor: colors.red,
    fontWeight: 'bolder' as 'bolder',
    letterSpacing: '0.1em',
    '&:hover': {
        background: colors.red,
    },
};

const GameStyle = ({spacing}: Theme) => createStyles({
    main: {
        color: 'lightgrey',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
        padding: spacing(2),
    },
    backButton: {
        ...buttonStyle,
        float: 'left',
    },
    hintButton: {
        ...buttonStyle,
        float: 'right',
        borderColor: colors.green,
        backgroundColor: colors.lightGreen,
        '&:hover': {
            background: colors.green,
        },
    },
    hangman: {
        width: 'fit-content',
        display: 'table',
        margin: 'auto',
        backgroundColor: colors.lightRed,
        border: '2px solid rgba(197, 0, 50, 0.86)',
        borderRadius: spacing(0.5)
    },
    word: {
        fontSize: spacing(3),
        textAlign: 'center',
        display: 'block',
        letterSpacing: '0.4em',
        padding: `${spacing(2)}px ${spacing(0)}px ${spacing(2)}px`,
    },
    keyboard: {
        padding: spacing(2),
        textAlign: 'center',
    },
    keyboardButton: {
        height: spacing(4),
        width: spacing(2),
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'lightgrey',
        backgroundColor: colors.lightGrey,
        borderColor: 'rgb(0,0,0)',
        fontWeight: 'bolder',
        "&:hover": {
            background: "rgb(0,0,0)"
        },
    },
    keyboardButtonSuccess: {
        height: spacing(4),
        width: spacing(2),
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'lightgrey',
        backgroundColor: colors.lightGreen,
        borderColor: colors.green,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.green
        },
    },
    keyboardButtonDanger: {
        height: spacing(4),
        width: spacing(2),
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'lightgrey',
        backgroundColor: colors.lightRed,
        borderColor: colors.red,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.red
        },
    }
});

export {
    GameStyle,
}
