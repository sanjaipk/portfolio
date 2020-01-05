import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import HeaderPFDesk from './HeaderPFDesk';
import HeaderPFMobile from './HeaderPFMobile';

const styles = theme => ({
    desktop: {        
        [theme.breakpoints.down('sm')]: {
             display:'none'
          },
          [theme.breakpoints.up('md')]: {
            display:'inherit'
          }
      },
      mobile: {        
        [theme.breakpoints.down('sm')]: {
             display:'inherit'
          },
          [theme.breakpoints.up('md')]: {
            display:'none'
          }
      },
});


class HeaderPF extends Component {
    
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                {/* <div className={classes.desktop}> */}
                <HeaderPFDesk/>
                {/* </div>
                <div className={classes.mobile}>
                <HeaderPFMobile/>
                </div> */}
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(HeaderPF);