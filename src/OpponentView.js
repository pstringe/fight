import {useState} from 'react';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { 
    Typography,
    IconButton,
    Box 
} from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        width: '100vw',
    },
    card: {
        width: 500,
        height: 500
    }
});

const OpponentView = ({opponent}) => {
    
    const classes = useStyles();

    return ( 
        <Box className={classes.root}>
            <Card className={classes.card}>
                <Typography variant='h6'>{opponent.name}</Typography>
            </Card>
        </Box> 
    );
}
 
export default OpponentView;