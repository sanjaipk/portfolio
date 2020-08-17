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
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
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
  }
});

class ResumeCardTrainingsMobile extends Component {
  render() {
    const { classes } = this.props;
    let bull = <span className={classes.bullet}>•</span>;
    return (
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <h6>Certifications:</h6>
          <Grid container spacing={1} className={classes.putcenter}>
            {
              this.props.certdata && this.props.certdata.map((item) => {
                return (
                  <Grid item xs={4} sm={2} >
                    <Badge color="primary">
                      <Avatar src={item.image} />
                    </Badge>
                  </Grid>
                )
              })
            }
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ResumeCardTrainingsMobile);