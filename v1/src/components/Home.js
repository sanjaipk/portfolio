import React, { Component } from 'react';
import TimeLine from './TimeLine';
import Banners from './Banner';
import Intro from './intro';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <Banners/>
      <Intro/>
      {/* <TimeLine /> */}
      </React.Fragment>       
    );
  }
}