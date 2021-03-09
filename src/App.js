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
  },
  left:{
    float:'left',
  },
 
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
          <Tab label="Display" href="#display" {...a11yProps(2)} />
          <Tab label="Body Copy" href="#body" {...a11yProps(3)} />
          <Tab label="Weights" href="#weights" {...a11yProps(4)} />
          <Tab label="Info Fragments" href="#fragments" {...a11yProps(5)} />
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
             
              <Chip className={classCustom.chips} label="lowercase" href="#lower-case" component="a"  clickable color="primary"/>
              <Chip className={classCustom.chips} label="UPPERCASE" href="#upper-case" clickable />
            </div>
            <div className={classCustom.center}>
              <ul className="lower-case" id="lower-case">
                <li className="specimin">a</li>
                <li className="specimin">b</li>
                <li className="specimin">c</li>
                <li className="specimin">d</li>
                <li className="specimin">e</li>
                <li className="specimin">f</li>
                <li className="specimin">g</li>
                <li className="specimin">h</li>
                <li className="specimin">i</li>
                <li className="specimin">j</li>
                <li className="specimin">k</li>
                <li className="specimin">l</li>
                <li className="specimin">m</li>
                <li className="specimin">n</li>
                <li className="specimin">o</li>
                <li className="specimin">p</li>
                <li className="specimin">q</li>
                <li className="specimin">r</li>
                <li className="specimin">s</li>
                <li className="specimin">t</li>
                <li className="specimin">u</li>
                <li className="specimin">v</li>
                <li className="specimin">w</li>
                <li className="specimin">x</li>
                <li className="specimin">y</li>
                <li className="specimin">z</li>
              </ul>
              <br/><br/>
              <ul className="upper-case gold" id="upper-case">
                <li className="specimin">a</li>
                <li className="specimin">b</li>
                <li className="specimin">c</li>
                <li className="specimin">d</li>
                <li className="specimin">e</li>
                <li className="specimin">f</li>
                <li className="specimin">g</li>
                <li className="specimin">h</li>
                <li className="specimin">i</li>
                <li className="specimin">j</li>
                <li className="specimin">k</li>
                <li className="specimin">l</li>
                <li className="specimin">m</li>
                <li className="specimin">n</li>
                <li className="specimin">o</li>
                <li className="specimin">p</li>
                <li className="specimin">q</li>
                <li className="specimin">r</li>
                <li className="specimin">s</li>
                <li className="specimin">t</li>
                <li className="specimin">u</li>
                <li className="specimin">v</li>
                <li className="specimin">w</li>
                <li className="specimin">x</li>
                <li className="specimin">y</li>
                <li className="specimin">z</li>
              </ul>
            </div>
          </Grid>
        </Grid>
      </section>

      <section id="display" className="black-background">
        <Grid container justify="center" >
          <Grid item xs={8}>
            <h1  className={classCustom.center}>DISPLAY FOCUS</h1>
            <hr/>
          </Grid>
        </Grid>
        <Grid container justify="center" >
          <Grid item  xs={2}>
            <ul>
              <li>Playgrounds</li>
              <li>Shaded walking trails</li>
              <li>Picnic shelters</li>
              <li>Campgrounds</li>
              <li>Amphitheater</li>
              <li>Swimming pool</li>
              <li>Dog park</li>
              <li>Clean restrooms</li>
            </ul>
          </Grid>
          <Grid item  xs={2}>
            <ul>
              <li>Arboretum</li>
              <li>4 lakes</li>
              <li>Perennial gardens</li>
              <li>Rock garden</li>
              <li>Rolling hills</li>
              <li>Mature trees</li>
            </ul>
          </Grid>
          <Grid item  xs={2}>
            <ul>
              <li>Basketball Courts</li>
              <li>Bike trails</li>
              <li>Kayaking</li>
              <li>Tennis</li>
              <li>Golf</li>
              <li>Swimming</li>
              <li>Volleyball</li>
              <li>Yoga on the Lawn</li>
            </ul>
          </Grid>
        </Grid>
      </section>

      <section id="body">
        <Grid container justify="center" >
            <Grid item xs={8}>
              <h1  className={classCustom.center}>BODY COPY</h1>
              <hr/>
            </Grid>
        </Grid>
        <Grid container justify="center" >
            <Grid item xs={4} className="columns">
              <p className="niagara">
              I recently had the opportunity to record an oral history of New York City’s parks for a high-tech start- up. The software wizards there created a Web-based map of the world and asked people near and far comedians, bartenders, professors, city servants— to talk about their pieces of the world. Mine involves approximately five thousand pieces of property under the jurisdiction of the NYC Department ofParks & Recreation, our parks, playgrounds, beaches, recreation facilities, meadows, and woodlands covering more than twenty- nine thousand acres, about 14 percent of the city. Yet I found myself telling not one, not two, but three tales of Central Park. The first described a few of the park’s quirky characters, the second discussed the amazing temporary art installation known as The Gates, and the third covered the great statues and monuments featured along Literary Walk and throughout the park’s great expanse.
              <br/>
              When I was in college, I had a summer job, perhaps my most interesting summer job, as a pushcart vendor in Central Park. It was an enormous pushcart that belonged to the Front Porch restaurant on the West Side of Manhattan. This was in the summer of 1976, the summer of the Bicentennial celebration, the tall ships, and fireworks, when disco was ascendant and A Chorus Line opened on Broadway. It was a summer when NYC was mostly grimy and decrepit, with stifling subway cars covered in graffiti, but there were signs that all was not lost. It was also a summer when a girl I had just met at Middlebury College came to visit from her home in California, and Charlotte Glasser fell in love with New York, and would later marry me in Central Park.
              <br/>
              Every day, I would get my cart and fill it up with tureens of cold soup and interesting fruit breads and push it— all six hundred pounds of it— from West Eighty- second Street to Fifty- ninth Street. I sold food at lunchtime at the south end of the park, and then, after lunch, I pushed the cart to the Delacorte Theater, outside of which I sold food at dinnertime. Though the cart lacked a Parks permit and the restaurant did not inform me that I needed one, no one enforced the rules at the time. 
              </p>
            </Grid>
            <Grid item xs={4} className="columns">
              <p className="niagara">
              There was a passel of other vendors selling creative food, and a few classic hot dog/pretzel guys who likely had real permits. Every once in a while a police officer would show up and shoo us away, but we would come back and sell our soup, falafel, or tacos. (The charismatic guy who sold falafel would shout out to prospective customers, “Falafel— Will Not Make You Feel . . . Awful!”) We banded together and enjoyed friendly competition, except for the two hot dog guys, who once had a fight that ended with one stabbing the other in his arm with a large hot dog fork. During this time, I came to know a lot of the people who seem slightly unreal to me now.
              <br/>
              When we refer to the “bad old days” of Central Park, we are usually talking about the days of rampant crime, graffiti, abandoned buildings, bare lawns, and dead trees. And yet I miss some aspects of those old days. In particular, Central Park was home to a lot of “characters” who added to the atmosphere, but who, for the most part, are not there anymore.
              <br/>
              One of the characters I met, the Poet O, trundled around Central Park with a shopping cart. He had a bushy white beard and he would ring a handbell. If you gave him money, he thanked you by reciting a poem that he composed on the spot, a sort of blank verse. He made promises to cure paying listeners of sexual diseases by ringing his bell. I talked with him often, and once he realized that I didn’t have the means to pay him for his wisdom, he dispensed it for free. Among other things, he explained to me the value of Central Park as a large, outdoor sanitorium. He said he was mentally ill, and the park enabled him to get out of his single room in a West Side hotel and be out in nature— not elbow to elbow with people— where he could experience what he called “the natural medication of nature.” The park, he explained, was saving the government huge amounts of money by allowing mentally ill people to “self- medicate” through the intoxicants of the romantic landscape and avoid expensive mental hospitals and drugs.
              <br/>
              </p>
            </Grid>
        </Grid>
      </section>

      <section id="weights" className="black-background">
        <Grid container justify="center" >
            <Grid item xs={8}>
              <h1  className={classCustom.left}>NIAGARA WEIGHTS</h1>  
              <hr className={classCustom.left}/>
              <h1 className="thin weights">Almost before we knew it, we had left the ground.</h1>
              <p>Thin</p>
                <br/>
              <h1 className="light weights">Almost before we knew it, we had left the ground.</h1>
              <p>Light</p>
                <br/>
              <h1 className="Regular weights">Almost before we knew it, we had left the ground.</h1>
              <p>Regular</p>
                <br/>
            </Grid>
        </Grid>
      </section>
      
      <section id="fragments">
        <Grid container justify="center" >
          <Grid item xs={8}>
            <h1  className={classCustom.left}>INFO FRAGMENTS</h1>  
            <hr className={classCustom.left}/>
          </Grid>
        </Grid>
        <Grid container justify="center" >
          <Grid item xs={4}>
            <h1 className="n-margin">KiteFest 2021</h1>
            <span className="span">Competition & Sale</span>
            <p className="n-margin">April 29, 2021 | starts at 10:00 a.m.</p>
            <p className="gold fade n-margin">Celebrate National Kite Month with the first major outdoor event of the season. Free activities will include kite flying, kite design competition, children’s games, kite sale and more. Free sunscreen will be available provided by Dermatology Associates.</p>
          </Grid>
          <Grid item xs={4}>
            <h1 className="n-margin">Spring Blooms Tour</h1>
            <span className="span">The People’s Garden</span>
            <p className="n-margin">Saturday, May 5, 2021 | 9:00 a.m.</p>
            <p className="gold fade n-margin">Viverra, purus ullamcorper ultrices venenatis, nisi nulla viverra libero, ac luctus lectus odio non augue.</p>
          </Grid>
        </Grid>
      </section>

      <section id="footer" className="black-background">
        <Grid container justify="center" >
          <Grid item  xs={12}>
            <h1 className={classCustom.header}>NIAGARA SOLID</h1>
            <br/>
            <br/>
          </Grid>
        </Grid>
      </section>

    </div>
    

  );
}
