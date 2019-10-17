import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RangeSlider from './RangeSlider'
import Container from '@material-ui/core/Container';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { FormattedMessage } from 'react-intl';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import ResultSearch from './ResultSearch';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    }
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  formControl: {
    margin: "auto",
    minWidth: 250,
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#07d3b5"
    },
    secondary: {
      main: "#6383ea"
    }
  }
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
export default function FilterPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChanges = (event, newValue) => {
    setValues(newValue);
  };
  const [selectedValue, setSelectedValue] = React.useState('a');


  const radioChange = event => {
    setSelectedValue(event.target.value);
  };
  const [values, setValues] = React.useState({
    ville: '',
    poids: '',
    quantite: '',
    qualite: '',
    livraison: ''
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Container className="mb-5">
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label={<FormattedMessage id="prix.label"
              defaultMessage="Acceuil"
              description="Link on react page" />} icon={<Icon className="fas fa-coins" />} value="one" />
            <Tab label={<FormattedMessage id="type.label"
              defaultMessage="Acceuil"
              description="Link on react page" />} icon={<Icon className="fas fa-trash-restore-alt" />} value="two" />
            <Tab label={<FormattedMessage id="ville.label"
              defaultMessage="Acceuil"
              description="Link on react page" />} icon={<Icon className="fas fa-map-marked-alt" />} value="three" />
            <Tab label={<FormattedMessage id="details.label"
              defaultMessage="Acceuil"
              description="Link on react page" />} icon={<Icon className="fas fa-cogs" />} value="four" />
          </Tabs>
          <TabPanel value={value} index="one" className="heighfix">
            <RangeSlider />
          </TabPanel>
          <TabPanel value={value} index="two" className="heighfix">
            <div className="row p-5">
              <div className="border rounded text-center p-3 col mr-3" id="parent" >
                <img src="images/plastique.png" alt="" id="child" width="100px" height="100px" />
                <p className="text-center mt-2 mb-2"><FormattedMessage id="plastique.label"
                  defaultMessage="plastique"
                  description="Link on react page" /></p>
                <GreenRadio
                  checked={selectedValue === 'c'}
                  onChange={radioChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </div>
              <div className="border rounded text-center p-3 col mr-3" id="parent" >
                <img src="images/bread.png" alt="" id="child" width="100px" height="100px" />
                <p className="text-center mt-2 mb-2"><FormattedMessage id="pain.label"
                  defaultMessage="pain"
                  description="Link on react page" /></p>
                <GreenRadio
                  checked={selectedValue === 'c'}
                  onChange={radioChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </div>
              <div className="border rounded text-center p-3 col mr-3" id="parent" >
                <img src="images/glasses.png" alt="" id="child" width="100px" height="100px" />
                <p className="text-center mt-2 mb-2"><FormattedMessage id="verre.label"
                  defaultMessage="Verre"
                  description="Link on react page" /></p>
                <GreenRadio
                  checked={selectedValue === 'c'}
                  onChange={radioChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </div>
              <div className="border rounded text-center p-3 col mr-3" id="parent" >
                <img src="images/paper.png" alt="" id="child" width="100px" height="100px" />
                <p className="text-center mt-2 mb-2"><FormattedMessage id="papier.label"
                  defaultMessage="Papier"
                  description="Link on react page" /></p>
                <GreenRadio
                  checked={selectedValue === 'c'}
                  onChange={radioChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </div>
              <div className="border rounded text-center p-3 col mr-3" id="parent" >
                <img src="images/other.png" alt="" id="child" width="100px" height="100px" />
                <p className="text-center mt-2 mb-2"><FormattedMessage id="autre.label"
                  defaultMessage="Autre"
                  description="Link on react page" /></p>
                <GreenRadio
                  checked={selectedValue === 'c'}
                  onChange={radioChange}
                  value="c"
                  name="radio-button-demo"
                  inputProps={{ 'aria-label': 'C' }}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index="three" className="heighfix">
            <div className="row">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  <FormattedMessage id="ville.label"
                    defaultMessage="Acceuil"
                    description="Link on react page" />
                </InputLabel>
                <Select
                  value={values.ville}
                  onChange={handleChanges}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </TabPanel>
          <TabPanel value={value} index="four" className="heighfix">
            <div className="row">
              <div className="col">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Poids
        </InputLabel>
                  <Select
                    value={values.poids}
                    onChange={handleChanges}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Quantité
        </InputLabel>
                  <Select
                    value={values.quantite}
                    onChange={handleChanges}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Qualité
        </InputLabel>
                  <Select
                    value={values.qualite}
                    onChange={handleChanges}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="col">
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                    Livraison
        </InputLabel>
                  <Select
                    value={values.livraison}
                    onChange={handleChanges}
                    labelWidth={labelWidth}
                    inputProps={{
                      name: 'age',
                      id: 'outlined-age-simple',
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </TabPanel>
          <div className="row">
            <div className="col-8"></div>
            <div className="col-4">
              <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Qualité
        </InputLabel>
                <Select
                  value={values.qualite}
                  onChange={handleChanges}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: 'age',
                    id: 'outlined-age-simple',
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

          </div>
          <ResultSearch />
        </Paper>
      </Container>
    </MuiThemeProvider>
  );
}

// class FilterPage extends Component {
//   state = {
//     activeItem: "1",
//     value4: {
//       min: 5,
//       max: 10,
//     },
//   };

//   toggle = tab => e => {
//     if (this.state.activeItem !== tab) {
//       this.setState({
//         activeItem: tab
//       });
//     }
//   };

//   render() {
//     return (
//       <MDBContainer >
//         <MDBRow>
//           <MDBCol md="12" >
//             <MDBNav className="nav-tabs mt-5 justify-content-center font-weight-bold">
//               <MDBNavItem>
//                 <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
//                   <MDBIcon icon="coins" className="mr-3" />
//                 </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
//                   <MDBIcon icon="trash-restore-alt" className="mr-3" /> Type
//               </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
//                   <MDBIcon icon="map-marked-alt" className="mr-3" />Ville
//               </MDBNavLink>
//               </MDBNavItem>
//               <MDBNavItem>
//                 <MDBNavLink to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab" >
//                   <MDBIcon icon="cogs" className="mr-3" />Details
//               </MDBNavLink>
//               </MDBNavItem>
//             </MDBNav>
//             <MDBTabContent activeItem={this.state.activeItem} >
//               <MDBTabPane tabId="1" role="tabpanel">
//                 <RangeSlider />
//               </MDBTabPane>
//               <MDBTabPane tabId="2" role="tabpanel">
//                 <p className="mt-2">
//                   Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                   voluptate odit minima. Lorem ipsum dolor sit amet,
//                   consectetur adipisicing elit. Nihil odit magnam minima,
//                   soluta doloribus reiciendis molestiae placeat unde eos
//                   molestias.
//               </p>
//                 <p>
//                   Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                   voluptate odit minima. Lorem ipsum dolor sit amet,
//                   consectetur adipisicing elit. Nihil odit magnam minima,
//                   soluta doloribus reiciendis molestiae placeat unde eos
//                   molestias.
//               </p>
//               </MDBTabPane>
//               <MDBTabPane tabId="3" role="tabpanel">
//                 <p className="mt-2">
//                   Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                   voluptate odit minima. Lorem ipsum dolor sit amet,
//                   consectetur adipisicing elit. Nihil odit magnam minima,
//                   soluta doloribus reiciendis molestiae placeat unde eos
//                   molestias.
//               </p>
//               </MDBTabPane>
//               <MDBTabPane tabId="4" role="tabpanel">
//                 <p className="mt-2">
//                   Quisquam aperiam, pariatur. Tempora, placeat ratione porro
//                   voluptate odit minima. Lorem ipsum dolor sit amet,
//                   consectetur adipisicing elit. Nihil odit magnam minima,
//                   soluta doloribus reiciendis molestiae placeat unde eos
//                   molestias.
//               </p>
//               </MDBTabPane>
//             </MDBTabContent>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     );
//   }
// }

// export default FilterPage;