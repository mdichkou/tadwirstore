import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
});
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

  return (
    <MuiThemeProvider theme={theme}>
      <Container>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Prix" icon={<Icon className="fas fa-coins" />} value="one" />
            <Tab label="Type" icon={<Icon className="fas fa-trash-restore-alt" />} value="two" />
            <Tab label="Ville" icon={<Icon className="fas fa-map-marked-alt" />} value="three" />
            <Tab label="Details" icon={<Icon className="fas fa-cogs" />} value="four" />
          </Tabs>
          <TabPanel value={value} index="one">
            <RangeSlider />
          </TabPanel>
          <TabPanel value={value} index="two">
            Item Two
      </TabPanel>
          <TabPanel value={value} index="three">
            Item Three
      </TabPanel>
          <TabPanel value={value} index="four">
            Item four
      </TabPanel>
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