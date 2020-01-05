import React, { Component } from 'react';
import clsx from 'clsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import './../css/headerportfolio.css';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import TextureIcon from '@material-ui/icons/Texture';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import { withStyles, useTheme } from "@material-ui/core/styles";
import DraftsIcon from '@material-ui/icons/Drafts';
import ListItemLink from './ListItemLink';
const drawerWidth = 240;
const styles = theme => ({
    mobileDisp: {

        [theme.breakpoints.down('xs')]: {
            display: 'none!important'
        },
        [theme.breakpoints.up('sm')]: {
            // display: 'inherit!important '
        },
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    hambugerColor: {
        color: 'white',
        [theme.breakpoints.down('xs')]: {
            display: 'inherit!important',
            textAlign:'left'
        },
        [theme.breakpoints.up('sm')]: {
            display: 'none  !important'
        },
    },
    menuItemFix : {
        display: 'inline-flex!important'
    },
    companyTitle:{
        paddingLeft: '20px'
    }
});


class HeaderPFDesk extends Component {

    constructor() {
        super();

        this.state = {
            black: true,
            open: false,
            menuitems: [
                { idx: 1, class: '', link: '/resume', text: 'About Me' },
                { idx: 2, class: '', link: '/portfolio', text: 'Blog' },
                { idx: 3, class: '', link: '/contact', text: 'Contact Me' }
            ]
        }
    }
    setOpen(val) {
        this.setState({ open: !this.state.open })
    }
    handleDrawerOpen = () => {
        this.setOpen(!this.state.open);
    };

    navigate = (idxx) => {
        
    };

    handleDrawerClose = () => {
        this.setOpen(false);
    };
    changeColor(s, id) {
        let temp = this.state.menuitems;
        temp.forEach(item => {
            if (item.idx === s) {
                item.class = 'current'
            } else {
                item.class = ''
            }
        });
        this.state.menuitems = temp;
        this.setState({ menuitems: temp })
    }

    render() {
        const { classes } = this.props;
        let btn_class = this.state.black ? "current" : "";
        return (
            <React.Fragment>
                <header id="home">
                    <nav id="nav-wrap">
                        <ul id="nav" className={classes.nav}>
                        <li className={classes.mobileDisp}>  <Link to='/' >Tara Inc.</Link></li>
                            {
                                this.state.menuitems && this.state.menuitems.map((item) => {
                                    return (
                                        <li key={item.idx.toString()} className={`${item.class} ${classes.mobileDisp}`} onClick={this.changeColor.bind(this, item.idx)}>
                                            <Link to={item.link} >{item.text}</Link>
                                        </li>
                                    )
                                })
                            }
                           
                            <li className={classes.hambugerColor}>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={this.handleDrawerOpen}
                                    className={clsx(this.state.open)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <span className={classes.companyTitle}> <Link to='/' >Tara Inc.</Link></span>
                            </li>
                        </ul>
                    </nav>
                </header>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={this.state.open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List >
                        {       
                    this.state.menuitems.map((item) => (
                            <ListItem button key={item.idx.toString()} className={classes.menuItemFix} onClick={this.handleDrawerOpen}>
                                <ListItemLink to={item.link} primary={item.text} icon={<TextureIcon />} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Drawer>
            </React.Fragment>
        );
    }
}

export default withStyles(styles, { withTheme: true })(HeaderPFDesk);