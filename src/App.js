import React from 'react';
import { HomePage } from './Components/HomePage';
import { FreeDemoRegistration } from './Components/shared/FreeDemoRegistration.js';
import { CourseDetail } from './Components/shared/CourseDetail';
import ScrollTop from './Components/shared/ScrollToTop';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { AboutUs } from './Components/AboutUs';
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
  const isDesktop = window.innerWidth >= 1200;
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollTop>
          <Switch>
            <Route path="/free-demo-registration">
              <FreeDemoRegistration isDesktop={isDesktop} />
            </Route>
            <Route path="/course/:name">
              <CourseDetail isDesktop={isDesktop} />
            </Route>
            <Route path="/about-us">
              <AboutUs isDesktop={isDesktop} />
            </Route>
            <Route path="/home">
              <HomePage isDesktop={isDesktop}/>
            </Route>
            <Route path="/#ourcourses">
              <HomePage isDesktop={isDesktop}/>
            </Route>
            <Route path="/">
              <HomePage isDesktop={isDesktop}/>
            </Route>
          </Switch>
        </ScrollTop>
      </Router>
    </ThemeProvider>
  );
}

export default App;
