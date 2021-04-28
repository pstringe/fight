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
        display: 'flex',
        width: 500,
        height: 500,
        flexDirection: 'column',

    },
    img: {
        width: 520,
        height: 520
    }
});

const OpponentView = ({opponent}) => {
    
    const classes = useStyles();
    console.log('img', opponent.imgUrl);
    return ( 
        <Box className={classes.root}>
            <Card className={classes.card}>
                <img className={classes.img} src={opponent.imgUrl}/>
                <Typography variant='h6'>{opponent.name}</Typography>
            </Card>
        </Box> 
    );
}
 
export default OpponentView;