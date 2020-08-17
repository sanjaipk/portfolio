import React, { Component } from 'react';
import { withStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';

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
  putcenter:{
    textAlign: 'center'
  },
  putright:{
    float: 'right'
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});


 class ResumeCardTrainingsDesk extends Component {
 
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card} variant="outlined">
      <CardContent>    
        <h6>Certifications:</h6>
        <Grid container spacing={2}>
        <Grid item xs={6}><Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/azure.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                
                </Typography>
                <Typography variant="body2" gutterBottom>
                AZ-203: Developing Solutions for Microsoft Azure
                Develop Azure Infrastructure as a Service compute solution, Develop Azure Platform as a Service compute solution, Develop for Azure storage, Implement Azure security,
                Monitor, troubleshoot, and optimize solutions, Connect to and consume Azure and third-party services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/aws.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                AZ-203: Developing Solutions for Microsoft Azure
                </Typography>
                <Typography variant="body2" gutterBottom>
                Demonstrate an understanding of core AWS services, uses, and basic AWS architecture best practices, Demonstrate proficiency in developing, deploying, and debugging cloud-based applications using AWS.</Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/MCSA.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Microsoft® Certified Solutions Associate: Universal Windows Platform
                </Typography>
                <Typography variant="body2" gutterBottom>
                70-483: Programming in C#, Developing Mobile Apps 
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/mcts.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Exam AZ-203: Developing Solutions for Microsoft Azure
                </Typography>
                <Typography variant="body2" gutterBottom>
                Develop Azure Infrastructure as a Service compute solution, Develop Azure Platform as a Service compute solution, Develop for Azure storage, Implement Azure security,
                Monitor, troubleshoot, and optimize solutions, Connect to and consume Azure and third-party services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/togaf.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Exam AZ-203: Developing Solutions for Microsoft Azure
                </Typography>
                <Typography variant="body2" gutterBottom>
                Develop Azure Infrastructure as a Service compute solution, Develop Azure Platform as a Service compute solution, Develop for Azure storage, Implement Azure security,
                Monitor, troubleshoot, and optimize solutions, Connect to and consume Azure and third-party services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/ITIL.png" />
            </ButtonBase>
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Exam AZ-203: Developing Solutions for Microsoft Azure
                </Typography>
                <Typography variant="body2" gutterBottom>
                Develop Azure Infrastructure as a Service compute solution, Develop Azure Platform as a Service compute solution, Develop for Azure storage, Implement Azure security,
                Monitor, troubleshoot, and optimize solutions, Connect to and consume Azure and third-party services
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: 1030114
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>    
      </CardContent>
    </Card>
    );
  }
}

export default  withStyles(styles)(ResumeCardTrainingsDesk);