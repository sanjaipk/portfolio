import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ResumeSkills from './ResumeSkills';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width:'100%',
  },
  putright:{
    float: 'right'
  },
}));

function createData(name, calories) {
  return { name, calories };
}

const rows1 = [
  createData('Frozen yoghurt', 159),
  createData('Ice cream sandwich', 237),
  createData('Eclair', 262),
  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];
const rows2 = [

  createData('Cupcake', 305),
  createData('Gingerbread', 356),
];
const rows3 = [

  createData('Gingerbread', 356),
];

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
     
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Planned" {...a11yProps(0)} />
          <Tab label="WIP" {...a11yProps(1)} />
          <Tab label="Completed" {...a11yProps(2)} />
        </Tabs>
  
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <ResumeSkills  data={rows1} />
          <br/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ResumeSkills data={rows2}/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ResumeSkills data={rows3}/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}