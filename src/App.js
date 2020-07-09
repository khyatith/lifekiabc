import React from 'react';
import { HomePage } from './Components/HomePage';
import { TimeManagement } from './Components/modules/TimeManagement';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'serif'
    ].join(','),
  }
});

function App() {
  const isDesktop = window.innerWidth > 1200;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/time-management">
            <TimeManagement isDesktop={isDesktop} />
          </Route>
          <Route path="/">
              <HomePage isDesktop={isDesktop}/>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
