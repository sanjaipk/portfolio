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
import purple from '@material-ui/core/colors/purple';
import pink from '@material-ui/core/colors/pink';

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
  putright:{
    float: 'right'
  },
  marginChip:{
    margin: '3px 5px'
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
});


 class ResumeCardSkills extends Component {
 
  render() {
    const { classes } = this.props;
    let bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card} variant="outlined">
      <CardContent>
       
        <h5>Skills:</h5>

        <Chip avatar={<Avatar>A</Avatar>} label="Angular" color="primary" variant="outlined" className={classes.marginChip}/>
        <Chip avatar={<Avatar>N</Avatar>} label=".Net" color="secondary" variant="outlined" className={classes.marginChip}/>
        <Chip avatar={<Avatar>A</Avatar>} label="AWS" color="default" variant="outlined" className={classes.marginChip}/>
        <Chip avatar={<Avatar>A</Avatar>} label="Azure" color="default" variant="outlined" className={classes.marginChip}/>
        <Chip avatar={<Avatar>V</Avatar>} label="VBA" color="default" variant="outlined" className={classes.marginChip}/>
  
      </CardContent>
      <CardActions className={classes.putright}>
        <Button size="small" href='/resume-skills'>Learn More</Button>
      </CardActions>
    </Card>
    );
  }
}

export default  withStyles(styles)(ResumeCardSkills);