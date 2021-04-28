import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { makeStyles } from '@material-ui/core/styles';

import { 
    Typography,
    IconButton,
    Box 
} from "@material-ui/core"

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const Header = () => {
    const classes = useStyles();

    return ( 
        <Box className={classes.root}>
            <IconButton>
                <PersonIcon fontSize='large' />
            </IconButton>
            <Typography variant='h5'>FIGHT</Typography>
            <IconButton>
                <ChatBubbleIcon fontSize='large' />
            </IconButton>
        </Box>
     );
}
 
export default Header;