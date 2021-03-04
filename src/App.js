import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './style.css';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const useNewStyles = makeStyles({
  root: {
    background: 'black',
    border: 0,
    borderRadius: 3,
    color: '#D8AB3AB3',
    height: 48,
    padding: '0 30px',
  },
  header:{
    textAlign:'center',
    color:'#D8AB3A',
    fontSize:'15rem',
    lineHeight: '15rem',
    marginBottom: 0,
  },
  subtitle:{
    textAlign: 'center',
    color:'#D8AB3A',
    fontSize:'1.5rem',
    fontFamily:'asap, sans-serif',
    letterSpacing:'4pt',
  },
  center:{
    textAlign: 'center',
  },
  chips:{
    backgroundColor:'#FFFFFF0A',
    color:'white',
    marginRight:'1em',
  }
 
});

  


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
}));


export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classCustom = useNewStyles();

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const handleClick = () => {
    
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classCustom.root}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Introduction" href="#intro" {...a11yProps(0)} />
          <Tab label="Specimin" href="#specimin" {...a11yProps(1)} />
          <Tab label="Weights" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    
      <Grid container justify="center" >
        <Grid item  xs={12}>
          <h1 className={classCustom.header}>NIAGARA SOLID</h1>
          <h3 className={classCustom.subtitle}>A DECORATIVE FONT</h3>
        </Grid>
      </Grid>
      
      <section id="intro" className="black-background">
        <Grid container justify="center" >
          <Grid item  xs={8}>
            <h1>About Niagara</h1>
              <p>While not a revival in the strictest sense of the word, Niagara recalls the crisp, elegant geometry found in some of the best American styles from the thirties and forties. The four condensed weights were designed by Tobias Frere-Jones, who found inspiration in the straight-sided geometric fonts from that era.
                <br></br>
                <br></br>
              Frere-Jones Type is an independent type design practice in New York City, founded and led by Tobias Frere-Jones. With twenty-six years of experience in print and digital environments, we create original typefaces for retail licensing and client commissions. We believe that type exists to solve problems, and beauty is always part of the solution.
            </p>
          </Grid>
        </Grid>
      </section>

      <section id="specimin">
      <Grid container justify="center" >
          <Grid item  xs={8}>
            <h1 className={classCustom.center}>NIAGARA SPECIMIN</h1>
              <hr/>
              <div className={classCustom.center}>
             
              <Chip className={classCustom.chips} label="lowercase" component="a" href="#chip" clickable color="primary"/>
              <Chip className={classCustom.chips} label="UPPERCASE" clickable />
               <Chip className={classCustom.chips} label="Special Character" component="a" href="#chip" clickable />
               <Chip className={classCustom.chips} label="Compare" component="a" href="#chip" clickable />
            </div>
          </Grid>
        </Grid>
      </section>
    </div>
    

  );
}
