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
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  card: {
    minWidth: 275,
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
  }
});


 class ResumeCardTrainings extends Component {
 
  render() {
    const { classes } = this.props;
    let bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card} variant="outlined">
      <CardContent>
    
        <h5>Certifications:</h5>
      
        <Grid container spacing={1} className={classes.putcenter}>
      <Grid item xs={3} sm={2} >
      <Badge  color="primary">
      <Avatar alt="Remy Sharp" src="/azure.png" />
      </Badge>
      </Grid>
      <Grid item xs={3} sm={2}>
      <Badge color="primary">
      <Avatar alt="Remy Sharp" src="/aws.png" />
      </Badge>
      </Grid>
      <Grid item xs={3} sm={2}>
      <Badge color="primary">
      <Avatar alt="Remy Sharp" src="/MCSA.png" />
      </Badge>
      </Grid>
      <Grid item xs={3} sm={2}>
      <Badge color="primary">
      <Avatar alt="Remy Sharp" src="/mcts.png" />
      </Badge>
      </Grid>
      <Grid item xs={6} sm={2}>
      <Badge color="primary">
      <img alt="Remy Sharp" src="/togaf.png" width="42px" />
      </Badge>
      </Grid>
      <Grid item xs={6} sm={2} >
      <Badge color="primary">
      <img alt="Remy Sharp" src="/ITIL.png" width="100px" />
      </Badge>
      </Grid>
      </Grid>
     
      </CardContent>
      <CardActions className={classes.putright}>
        <Button size="small" href='/resume-skills'>Learn More</Button>
      </CardActions>
    </Card>
    );
  }
}

export default  withStyles(styles)(ResumeCardTrainings);