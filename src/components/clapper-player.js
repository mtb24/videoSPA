import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import Clappr from 'clappr';

const styles = theme => ({
    player: {
        width: 'inherit',
        height: 'inherit',
        [ theme.breakpoints.down('sm') ]: {}
    },
});

class ClapprPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    shouldComponentUpdate(nextProps, nextState) {
        let changed = (nextProps.source !== this.props.source);
        this.props = nextProps;
        this.setState = nextState;
        if (changed) {
            this.change(nextProps.source);
        }
        return false;
    }

    componentDidMount() {
        this.change(this.props.source);
    }

    componentWillUnmount() {
        this.destroyPlayer();
    }
    
    destroyPlayer() {
        if (this.player) {
            this.player.destroy();
        }
        this.player = null;
    }

    change(source) {
        if (this.player) {
            this.destroyPlayer();
        }
        
        //Clappr.Log.setLevel(0);

        this.player = new Clappr.Player({
            parent: this.refs.player,
            source: source,
            poster: '/images/world_2093x2094.png', //hardcoded image
            autoPlay: true,
            width: this.refs.player.getBoundingClientRect().width + 'px',
            height: this.refs.player.getBoundingClientRect().height + 'px',
            hlsjsConfig: {
                enableWorker: true
            }
        });
    }

    render() {

        const { classes } = this.props;
        return (
            <div id='clapprplayer' className={ classes.player } ref="player"></div>
        );
    }
};

ClapprPlayer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(ClapprPlayer));