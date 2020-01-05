import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import React, { Component } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width:'100%',
  },
  imgCenter:{
    textAlign: 'center',
    height: '200px',
    display:'block',
    margin:'1px auto'
  },
}));

export default function Banners() {
  const [index, setIndex] = useState(0);
  const classes = useStyles();
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
     
      <Carousel.Item>
        <img
          className={classes.imgCenter}
          src="0.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className={classes.imgCenter}
          src="1.jpeg"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}