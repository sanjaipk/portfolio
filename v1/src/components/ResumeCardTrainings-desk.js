import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
  putcenter: {
    textAlign: 'center'
  },
  putright: {
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
            {
              this.props.certdata && this.props.certdata.map((item) => {
                return (<Grid item xs={6} container direction="row" key={item.idx.toString()} >
                  <Grid item xs={3} >
                    <ButtonBase className={classes.image}>
                      <img className={classes.img} alt="complex" src={item.image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={9} >
                    <Grid item xs container direction="column">
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle2">
                          {item.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          {item.subtitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {item.id}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>)
              })
            }  
            </Grid>         
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(ResumeCardTrainingsDesk);