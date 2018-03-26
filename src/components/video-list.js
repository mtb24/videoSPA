import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List from 'material-ui/List';
import withRoot from '../withRoot';
import VideoItem from './video-item';

const styles = theme => ({
    root: {
        marginLeft: theme.spacing.unit * 2,
        marginTop: '0px',
        paddingTop: '0px',
    },
});

function VideoList(props) {

        const videos = props.videos.map((video, index) => (
            <VideoItem key={ index } video={ video } />
        ));
        const { classes } = props;
        
        return (
            <List className={ classes.root }> { videos } </List>
        );

}

VideoList.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withRoot(withStyles(styles)(VideoList));
  