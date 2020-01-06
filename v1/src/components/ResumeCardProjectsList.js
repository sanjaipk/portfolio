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

const planned = [
  createData('Shcema.org DB creator', '31-Jan-2018'),
  createData('Cross Timezone alarm', '28-Jan-2018'),
  createData('4 Pic Quiz', '07-Apr-2019'),
];
const wip = [
  createData('Punarchi', '12-Jan-2019'),
  createData('Complan', '26-Jan-2019'),
];
const completed = [
  createData('Droid Simple Tools App', '31-Jan-2018'),
  createData('Indian MP Lister', '28-Jan-2018'),
  createData('Tamil Quiz', '07-Apr-2019'),
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
          <Tab label="Completed" {...a11yProps(0)} />
          <Tab label="WIP" {...a11yProps(1)} />
          <Tab label="Planned" {...a11yProps(2)} />
        </Tabs>
  
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <ResumeSkills  data={completed} />
          <br/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <ResumeSkills data={wip}/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
        <ResumeSkills data={planned}/>
          <Button className={classes.putright} size="small" href='/resume-skills'>Learn More</Button>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}