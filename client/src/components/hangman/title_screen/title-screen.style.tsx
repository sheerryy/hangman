import {createStyles, Theme} from '@material-ui/core';

const colors = {
    red: 'rgba(197, 0, 50, 0.86)',
    lightRed: 'rgba(197, 0, 50, 0.15)',
    lightGrey: 'rgba(93,92,95,0.27)',
    green: 'rgba(5,197,83,0.86)',
    lightGreen: 'rgba(5,197,83,0.15)',
};

const TitleScreenStyle = ({spacing, breakpoints}: Theme) => createStyles({
    main: {
        color: 'white',
        textTransform: 'uppercase',
        boxSizing: 'border-box',
        padding: spacing(4),
    },
    title: {
        backgroundColor: colors.red,
        borderRadius: spacing(0.5),
        fontSize: spacing(5),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(2)}px ${spacing(0)}px`,
        fontWeight: 'bolder',
        [breakpoints.down('sm')]: {
            margin: 0,
            padding: 0,
            width: '100%',
            display: 'inline-table'
        },
    },
    description: {
        fontSize: spacing(2),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(2)}px ${spacing(0)}px`,
    },
    difficultyText: {
        fontSize: spacing(3),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(6)}px ${spacing(0)}px ${spacing(2)}px`,
    },
    difficultyArea: {
        fontSize: spacing(3),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(2)}px ${spacing(0)}px`,
    },
    difficultyButton: {
        minWidth: '100%',
        backgroundColor: colors.lightRed,
        borderColor: colors.red,
        fontWeight: 'bolder',
        color: 'white',
        letterSpacing: '0.1em',
        "&:hover": {
            background: colors.red
        },
    },
    bottomText: {
        fontSize: spacing(2),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(6)}px ${spacing(0)}px ${spacing(0)}px`,
    },
});

export {
    TitleScreenStyle,
}
