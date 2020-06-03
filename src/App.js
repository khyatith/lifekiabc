import React from 'react';
import { HomePage } from './Components/HomePage';
import { AboutUs } from './Components/AboutUs';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Gelasio',
      'serif'
    ].join(','),
  }
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about-us" component={AboutUs} />
          {/* <Route exact path="/our-content" component={OurContent} /> */}
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
