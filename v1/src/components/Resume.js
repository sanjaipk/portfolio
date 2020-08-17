import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ResumeCardSkills from './ResumeCardSkill';
import ResumeCardRoles from './ResumeCardRole';
import ResumeCardTrainings from './ResumeCardTrainings';
import ResumeCardProjects from './ResumeCardProjects';
import Grid from '@material-ui/core/Grid';
import Intro from './intro';
import Youtube from './youtube';

const styles = () => ({
  card: {
    minWidth: 275,
    // height: '100%'
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
    return (
      <div>
        <Grid container >
          <Grid item sm={12}>
            <ResumeCardRoles />
          </Grid>
          <Grid item sm={12}>
            <ResumeCardSkills />
          </Grid>
          <Grid item sm={12}>
            <ResumeCardTrainings />
          </Grid>
          <Grid item sm={12}>
            <Youtube/>
      
          </Grid>
        </Grid>
        {/* <Grid container >
          <Grid item xs={12}>
            <ResumeCardProjects />
          </Grid>
        </Grid> */}
      </div>
    );
  }
}

export default withStyles(styles)(Resume);