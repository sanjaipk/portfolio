import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  putright: {
    float: 'right'
  },
  marginChip: {
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


class ResumeCardRoles extends Component {

  render() {
    const { classes } = this.props;
    let bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card} variant="outlined">
        <CardContent>
          Resume:-
          <a href="https://www.youtube.com/embed/kGLu4BEJUjc?Rel=0&Modestbranding=1&Controls=1&autoplay=1"> Animated</a> | 
          <a href="https://www.youtube.com/embed/kGLu4BEJUjc?Rel=0&Modestbranding=1&Controls=1&autoplay=1"> PDF</a> | 
          <a href="https://www.youtube.com/embed/kGLu4BEJUjc?Rel=0&Modestbranding=1&Controls=1&autoplay=1"> Linkedin</a><br/><br/>
          <Chip avatar={<Avatar>Ar</Avatar>} label="Application Architect" color="primary" variant="outlined" className={classes.marginChip} />
          <Chip avatar={<Avatar>FS</Avatar>} label="Full Stack Developer" color="secondary" variant="outlined" className={classes.marginChip} />
          <Chip avatar={<Avatar>Fw</Avatar>} label="Framework Developer" color="default" variant="outlined" className={classes.marginChip} />
          <Chip avatar={<Avatar>TS</Avatar>} label="Technology Specialist" color="default" variant="outlined" className={classes.marginChip} />
          <Chip avatar={<Avatar>S</Avatar>} label="Team Lead / supervisor" color="default" variant="outlined" className={classes.marginChip} />
        </CardContent>
        {/* <CardActions className={classes.putright}>
          <Button size="small" href='/resume-skills'>Learn More</Button>
        </CardActions> */}
      </Card>
    );
  }
}

export default withStyles(styles)(ResumeCardRoles);