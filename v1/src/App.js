import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Skills from './components/Skills';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HeaderPublic from './components/HeaderPublic';
import HeaderPF from './components/HeaderPortFolio';
import TwoColLayout from './components/two-col-layout';
import ResumeSkills from './components/ResumeSkills';
import Home from './components/Home';
import TimeLine from './components/TimeLine';
import ComingSoon from './components/ComingSoon'
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />
        <Router>     
        <Container fixed>
        <HeaderPF /> 
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >        
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about-me">
                <About />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="/resume-skills">
                <ResumeSkills />
              </Route>
              <Route path="/portfolio">
                <ComingSoon />
              </Route>
              <Route path="/testimonials">
                <Skills />
              </Route>
              <Route path="/contact">
                <ComingSoon />
              </Route>
            </Switch>
            </Typography>         
        </Container>
        </Router>
      </React.Fragment>
    </div>
  );
}

export default App;
