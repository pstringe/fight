import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import ReplayIcon from '@material-ui/icons/Replay';
import ClearIcon from '@material-ui/icons/Clear';

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
    tools: {
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 500,
    }
});

const Tools = ({left, right, back}) => {
    const classes = useStyles();
    return ( 
        <Box className={classes.root}>
            <Box className={classes.tools}>
                <IconButton onClick={back}>
                    <ReplayIcon fontSize='large'/>
                </IconButton>
                <IconButton onClick={left}>
                    <ClearIcon fontSize='large'/>
                </IconButton>
                <IconButton onClick={right}>
                    <CheckIcon fontSize='large'/>
                </IconButton>
            </Box>
        </Box> 
    );
}
 
export default Tools;