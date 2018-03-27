import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';
import Player from './player';

const viewWidth = document.querySelector('body').getBoundingClientRect().width
const styles = theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRows: viewWidth * 0.43 + 'px',
    justifyItems: 'center',
    paddingTop: theme.spacing.unit * 10,
    [ theme.breakpoints.down('sm') ]: {
      paddingTop: '0',
    }
  }
});

function App(props) {
    const { classes } = props;

    return (
      <Router>
        <div className={ classes.root }>
          <Player />
        </div>
      </Router>
    );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
