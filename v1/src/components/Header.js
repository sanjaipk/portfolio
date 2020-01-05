import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './../css/header.css';
export default class Header extends Component {

 
  
  render() {
  
    return (
      <header class="spk">
    <nav>
      <ul class="menu">
        <li>
          <img src="https://media.licdn.com/dms/image/C4E12AQENzP1qox47eA/article-cover_image-shrink_720_1280/0?e=1579737600&v=beta&t=X9O34gLnV-sAyu6FKKGN7C0qlyw6r4082MUtETTcubU" />
        </li>
        <li>

        </li>
        <li>
          <span class="dropdown">
            <div  class="dropbtn">resume</div>
            <div>தற்குறிப்பு</div>
          </span> 
        </li>
        <li>
        <span class="dropdown">
              <div class="dropbtn">app store</div>
              <div>மென்பொருள்</div>
          </span>
        </li>
      </ul>
    </nav>
    </header>
    );
  }
}