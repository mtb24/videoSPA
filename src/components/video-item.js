import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
    root: {
        width: '100%',
        margin: '.5vh auto',
        // backgroundColor: theme.palette.primary.light,
        border: '1px solid lightgrey',
        [ theme.breakpoints.down('sm') ]: {},
    },
    anchor: {
        textDecoration: 'none',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'right',
        padding: '0px',
        [ theme.breakpoints.down('sm') ]: {
            textAlign: 'center',
        },
    }
});

function VideoItem(props) {
    const { classes } = props;
    const styles = {
        backgroundImage: "url('"+props.video.imgsrc+"')",
        backgroundPosition: 'left',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        borderRadius: '3px',
    }

    return (            
        <ListItem className={ classes.root } style={ styles }>
            <Link className={ classes.anchor } to={ `/videos/${props.video.id}` }>
                <ListItemText className={ classes.text } primary={ props.video.title } />
            </Link>
        </ListItem>
    );
}

VideoItem.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRoot(withStyles(styles)(VideoItem));
  