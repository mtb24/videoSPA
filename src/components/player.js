import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import VideoList from './video-list';
import { Card } from 'material-ui';
import ClapprPlayer from './clapper-player';

const styles = theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '40vw 200px',
        gridTemplateAreas: '"player list"', // quoting hack
        [ theme.breakpoints.down('sm') ]: {
            gridTemplateColumns: '100%',
            gridTemplateRows: '60vh auto',
            gridTemplateAreas: '"player""list"', // quoting hack
            width: '95%',
        },
    },
    list: {
        gridArea: 'list',
        marginRight: theme.spacing.unit * 2,
        backgroundColor: 'inherit',
    },
    player: {
        gridArea: 'player',
        width: '40vw',
        height: '22.5vw',
        [ theme.breakpoints.down('sm') ]: {
            margin: '0 auto',
            width: '100%',
            height: '100%',
        },
    },
    clappr: {
        width: 'inherit',
        height: 'inherit'
    }
});

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [
                {id: 1, title: "Video 1", src: "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8", imgsrc: '/images/avatar1.png'},
                {id: 2, title: "Video 2", src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8", imgsrc: '/images/avatar2.png'},
                {id: 3, title: "Video 3", src: "https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8", imgsrc: '/images/avatar3.png'},
                {id: 4, title: "Video 4", src: "http://184.72.239.149/vod/smil:BigBuckBunny.smil/playlist.m3u8", imgsrc: '/images/avatar4.png'},
                {id: 5, title: "Video 5", src: "http://www.streambox.fr/playlists/test_001/stream.m3u8", imgsrc: '/images/avatar5.png'}
            ],
            currentVideoIndex: 0
        };
    }

    handleUrlChange() {
        const path = window.location.pathname.split('/').slice(1);
        const videoId = path[1];
        if ( videoId ) {
          this.setState({ currentVideoIndex: videoId-1 });
        }
    }

    handleResize() {
        const video = document.querySelector('#clapprplayer > div');
        const fluidEl = document.querySelector('#video');
        const elBox = fluidEl.getBoundingClientRect();
        video.dataset.aspectRatio = elBox.height / elBox.width;
        video.style['width'] = elBox.width + 'px';
        video.style['height'] = elBox.width * video.dataset.aspectRatio + 'px';
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('recieveing props...', nextProps);
        this.handleUrlChange();
    }

    render() {

        const { classes } = this.props;
        const currentVideo = this.state.videos[ this.state.currentVideoIndex ].src;
        window.onresize = this.handleResize;

        return (
            <div className={ classes.root }>
                <VideoList className={ classes.list } videos={ this.state.videos } />
                <Card id='video' className={ classes.player }>
                    <ClapprPlayer className={ classes.clappr } source={ currentVideo } />
                </Card>
            </div>
        );
    }
}

Player.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Player));
