import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import ResumeCardSkills from './ResumeCardSkill';
import ResumeCardTrainings from './ResumeCardTrainings';
import ResumeCardProjects from './ResumeCardProjects';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    minWidth: 275,
    height: '100%'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


 class Resume extends Component {
 
  render() {
    const { classes } = this.props;
    let bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
        <Grid container >
                <Grid item  sm={12} md={6} >
                <ResumeCardSkills/>
                </Grid>
                <Grid item  sm={12} md={6}>
                <ResumeCardTrainings/>
                </Grid>
                </Grid>
                <Grid container >
                <Grid item xs={12}>
                <ResumeCardProjects/>
               
                </Grid>
            </Grid>
     
  

      
      </div>
    );
  }
}

export default  withStyles(styles)(Resume);