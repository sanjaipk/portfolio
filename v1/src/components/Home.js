import React, { Component } from 'react';
import TimeLine from './TimeLine';
import Banners from './Banner';
export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
      <Banners/>
      <TimeLine />
      </React.Fragment>
    );
  }
}