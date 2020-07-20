import {createStyles, Theme} from '@material-ui/core';

const colors = {
    darkRed: '#251818',
    red: 'rgba(197, 0, 50, 0.86)',
    lightRed: 'rgba(197, 0, 50, 0.15)',
    lightGrey: 'rgba(93,92,95,0.27)',
    green: 'rgba(5,197,83,0.86)',
    lightGreen: 'rgba(5,197,83,0.15)',
};

const buttonStyle = {
    width: 'fit-content' as 'fit-content',
    color: 'white',
    backgroundColor: colors.lightRed,
    borderColor: colors.red,
    fontWeight: 'bolder' as 'bolder',
    letterSpacing: '0.1em',
    '&:hover': {
        background: colors.red,
    },
};

const GameStyle = ({spacing, breakpoints}: Theme) => createStyles({
    main: {
        color: 'white',
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
        [breakpoints.down('md')]: {
            fontSize: spacing(2),
        },
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
        color: 'white',
        backgroundColor: colors.lightGrey,
        borderColor: 'rgb(0,0,0)',
        fontWeight: 'bolder',
        "&:hover": {
            background: "rgb(0,0,0)"
        },
        [breakpoints.down('md')]: {
            height: spacing(3),
            width: spacing(2),
            fontSize: spacing(1),
        },
    },
    keyboardButtonSuccess: {
        height: spacing(4),
        width: spacing(2),
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'white',
        backgroundColor: colors.lightGreen,
        borderColor: colors.green,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.green
        },
        "&:disabled": {
            background: colors.green,
            color: 'white'
        },
        [breakpoints.down('md')]: {
            height: spacing(3),
            width: spacing(2),
            fontSize: spacing(1),
        },
    },
    keyboardButtonDanger: {
        height: spacing(4),
        width: spacing(2),
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'white',
        backgroundColor: colors.lightRed,
        borderColor: colors.red,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.red
        },
        "&:disabled": {
            background: colors.red,
            color: 'white'
        },
        [breakpoints.down('md')]: {
            height: spacing(3),
            width: spacing(2),
            fontSize: spacing(1),
        },
    },
    dailog: {
        padding: spacing(1),
        background: `linear-gradient(180deg, rgba(0, 30, 41, 0.75), rgba(197, 0, 50, 0.65))`,
    },
    dialogTitle: {
        minwidth: '20em',
        background: colors.red,
        textAlign: 'center'
    },
    dialogTitleText: {
        color: 'white',
        fontSize: spacing(4),
    },
    dialogContent: {
        paddingTop: spacing(4),
        backgroundColor: colors.darkRed,
        textAlign: 'center'
    },
    dialogContentText: {
        color: 'white',
        fontSize: spacing(2)
    },
    dialogActions: {
        backgroundColor: colors.darkRed,
        display: 'inline-blocks',
        padding: spacing(2),
        textAlign: 'center'
    },
    dialogActionsButtonSuccess: {
        height: '85%',
        width: 'fit-content',
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'white',
        backgroundColor: colors.lightGreen,
        borderColor: colors.green,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.green
        },
        "&:disabled": {
            background: colors.green,
            color: 'white'
        }
    },
    dialogActionsButtonDanger: {
        height: '85%',
        width: 'fit-content',
        fontSize: spacing(1.5),
        margin: spacing(1),
        color: 'white',
        backgroundColor: colors.lightRed,
        borderColor: colors.red,
        fontWeight: 'bolder',
        "&:hover": {
            background: colors.red
        },
        "&:disabled": {
            background: colors.red,
            color: 'white'
        }
    }
});

export {
    GameStyle,
}
