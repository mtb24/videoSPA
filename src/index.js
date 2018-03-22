import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

ReactDOM.render(
    <div>
        <AppBar position='static' color='primary'>
            <Toolbar>
                <Typography variant="display1">Video SPA</Typography>
            </Toolbar>
        </AppBar>
        <App/>
    </div>, 
    document.querySelector('#root')
);
