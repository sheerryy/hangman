import {createStyles, Theme} from '@material-ui/core';

const TitleScreenStyle = ({spacing}: Theme) => createStyles({
    main: {
      color: 'lightgrey',
      textTransform: 'uppercase',
        boxSizing: 'border-box',
        padding: spacing(4),
    },
    title: {
        backgroundColor: 'rgba(197, 0, 50, 0.56)',
        borderRadius: spacing(0.5),
        fontSize: spacing(5),
        textAlign: 'center',
        display: 'block',
        padding: `${spacing(2)}px ${spacing(0)}px`,
        fontWeight: 'bolder',
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
        color: 'lightgrey',
        backgroundColor: 'rgba(197, 0, 50, 0.15)',
        borderColor: 'rgba(197, 0, 50, 0.86)',
        fontWeight: 'bolder',
        letterSpacing: '0.1em',
        "&:hover": {
            background: "rgba(197, 0, 50, 0.86)"
        },
    }

});

export {
    TitleScreenStyle,
}
