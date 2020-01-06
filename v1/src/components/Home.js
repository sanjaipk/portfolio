import React, { Component } from 'react';
import TimeLine from './TimeLine';
import Banners from './Banner';
import Intro from './intro';
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