import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ResumeCardTrainingsMobile from './ResumeCardTrainings-mobile';
import ResumeCardTrainingsDesk from './ResumeCardTrainings-desk';
const styles = theme => ({
  SupressInMobile: {
    [theme.breakpoints.down('xs')]: {
      display: 'none!important'
    },
    [theme.breakpoints.up('sm')]: {
      // display: 'inherit!important '
    },
  },
  SupressInDesk: {
    [theme.breakpoints.down('xs')]: {
      // display: 'inherit!important '
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none!important'
    },
  }
});
class ResumeCardTrainings extends Component {
  constructor() {
    super();
    this.state = {
      certifications: [
        {
          idx: 1, class: '',
          image: '/azure.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: 'Develop Azure Infrastructure as a Service compute solution, Develop Azure Platform as a Service compute solution, Develop for Azure storage, Implement Azure security, Monitor, troubleshoot, and optimize solutions, Connect to and consume Azure and third-party services',
          id: 'About Me'
        },
        {
          idx: 2,
          class: '',
          image: '/aws.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: 'Demonstrate an understanding of core AWS services, uses, and basic AWS architecture best practices, Demonstrate proficiency in developing, deploying, and debugging cloud-based applications using AWS.',
          id: 'About Me'
        },
        {
          idx: 3,
          class: '',
          image: '/MCSA.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: '/resume',
          id: 'About Me'
        },
        {
          idx: 4,
          class: '',
          image: '/mcts.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: '/resume',
          id: 'About Me'
        },
        {
          idx: 5,
          class: '',
          image: '/togaf.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: '/resume',
          id: 'About Me'
        },
        {
          idx: 6,
          class: '',
          image: '/ITIL.png',
          title: 'Microsoft® Certified Solutions Associate: Universal Windows Platform',
          subtitle: '/resume',
          id: 'About Me'
        },
      ]
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.SupressInDesk}>
          <ResumeCardTrainingsMobile certdata={this.state.certifications}/>
        </div>
        <div className={classes.SupressInMobile}>
          <ResumeCardTrainingsDesk certdata={this.state.certifications}/>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(ResumeCardTrainings);