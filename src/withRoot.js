import React from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

const white = '#1565c0';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#5e92f3',
      main: '#1565c0',
      dark: '#003c8f',
    },
    secondary: {
      light: white,
      main: white,
      dark: white,
    }
  }
});

function withRoot(Component) {

  function WithRoot(props) {
  
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
