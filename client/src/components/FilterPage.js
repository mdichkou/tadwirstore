import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { FormattedMessage } from "react-intl";
import Slider from "@material-ui/core/Slider";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";
import ResultSearch from "./ResultSearch";
import Button from "@material-ui/core/Button";
import axios from "axios";
import villes from "./ville.json";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600]
    }
  },
  checked: {}
})(props => <Radio color="default" {...props} />);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    position: "relative"
  },
  formControl: {
    margin: "auto",
    minWidth: 250
  },
  floatRight: {
    position: "absolute",
    right: 10
  },
  rootSlide: {
    width: 500,
    margin: "auto",
    marginTop: 10
  },
  textFieldSlide: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80,
    [theme.breakpoints.down("sm")]: {
      float: "right"
    }
  },
  floatRightSlide: {
    float: "right",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 80,
    [theme.breakpoints.down("sm")]: {
      float: "left"
    }
  }
}));
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#07d3b5"
    },
    secondary: {
      main: "#6383ea"
    },
    error: {
      main: "#ff5b76",
      contrastText: '#fff',
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
  value: PropTypes.any.isRequired
};
function valuetext(value) {
  return `${value}MAD`;
}
export default function FilterPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState("one");
  const [page, setPage] = React.useState(1);
  const [count, setCount] = React.useState(0);
  const [articles, setArticles] = React.useState([]);
  const [valueSlide, setValueSlide] = React.useState([1000, 50000]);

  const handleChangeSlide = (event, newValue) => {
    setPage(1);
    setValueSlide(newValue);
  };
  const handleChange = (event, newValue) => {
    setPage(1);
    setValue(newValue);
  };
  const handleChangeInput = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleChanges = event => {
    setPage(1);
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };
  const onClickPage = () => {
    setPage(page + 1);
  };
  const [selectedValue, setSelectedValue] = React.useState("5");
  const [values, setValues] = React.useState({
    ville: "",
    poids: "",
    quantite: "",
    qualite: "",
    livraison: "",
    sort: ""
  });
  const radioChange = event => {
    setPage(1);
    setSelectedValue(event.target.value);
  };
  React.useEffect(() => {
    var poids = values.poids;
    var quantite = values.quantite;
    var ville = values.ville;
    var livraison = values.livraison;
    var qualite = values.qualite;
    if (values.poids === "") poids = "none";
    if (values.quantite === "") quantite = "none";
    if (values.ville === "") ville = "none";
    if (values.livraison === "") livraison = "none";
    if (values.qualite === "") qualite = "none";
    axios
      .get(
        "http://localhost:5000/api/articles/" +
        page +
        "/" +
        valueSlide[0] +
        "/" +
        valueSlide[1] +
        "/" +
        selectedValue +
        "/" +
        ville +
        "/" + poids +
        "/" + quantite +
        "/" + qualite +
        "/" + livraison
      )
      .then(res => {
        const data = res.data;
        setCount(data.length);
        setArticles(data);
      });
  }, [page, valueSlide, selectedValue, values]);

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Container className="mt-5 mb-5" style={{
        backgroundColor: "#fff",
        boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label={
              <FormattedMessage
                id="prix.label"
                defaultMessage="Acceuil"
                description="Link on react page"
              />
            }
            icon={<Icon className="fas fa-coins" />}
            value="one"
          />
          <Tab
            label={
              <FormattedMessage
                id="type.label"
                defaultMessage="Acceuil"
                description="Link on react page"
              />
            }
            icon={<Icon className="fas fa-trash-restore-alt" />}
            value="two"
          />
          <Tab
            label={
              <FormattedMessage
                id="ville.label"
                defaultMessage="Acceuil"
                description="Link on react page"
              />
            }
            icon={<Icon className="fas fa-map-marked-alt" />}
            value="three"
          />
          <Tab
            label={
              <FormattedMessage
                id="details.label"
                defaultMessage="Acceuil"
                description="Link on react page"
              />
            }
            icon={<Icon className="fas fa-cogs" />}
            value="four"
          />
        </Tabs>
        <TabPanel value={value} index="one" className="heighfix">
          <form>
            <div className="row mt-3">
              <div className="col">
                <TextField
                  id="input1"
                  label="Min"
                  value={valueSlide[0] + "DH"}
                  className={classes.floatRightSlide}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </div>
              <div className="col">
                <div className={classes.rootSlide} id="sliderRange">
                  <Typography
                    color="primary"
                    id="range-slider"
                    gutterBottom
                    className="text-center"
                  >
                    10 000<sup>DH</sup> - 500 000<sup>DH</sup>
                  </Typography>
                  <Slider
                    min={1000}
                    max={50000}
                    value={valueSlide}
                    onChange={handleChangeSlide}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
              </div>
              <div className="col">
                <TextField
                  id="input2"
                  label="Max"
                  value={valueSlide[1] + "DH"}
                  className={classes.textFieldSlide}
                  margin="normal"
                  InputProps={{
                    readOnly: true
                  }}
                />
              </div>
            </div>
          </form>
        </TabPanel>
        <TabPanel value={value} index="two" className="heighfix">
          <div className="row p-5">
            <div
              className="border rounded text-center p-3 col mr-3"
              id="parent"
            >
              <img
                src="images/plastique.png"
                alt=""
                id="child"
                width="50px"
                height="50px"
              />
              <p className="text-center mt-2 mb-2">
                <FormattedMessage
                  id="plastique.label"
                  defaultMessage="plastique"
                  description="Link on react page"
                />
              </p>
              <GreenRadio
                checked={selectedValue === "1"}
                onChange={radioChange}
                value="1"
                name="radio-button-demo"
                inputProps={{ "aria-label": "1" }}
              />
            </div>
            <div
              className="border rounded text-center p-3 col mr-3"
              id="parent"
            >
              <img
                src="images/bread.png"
                alt=""
                id="child"
                width="50px"
                height="50px"
              />
              <p className="text-center mt-2 mb-2">
                <FormattedMessage
                  id="pain.label"
                  defaultMessage="pain"
                  description="Link on react page"
                />
              </p>
              <GreenRadio
                checked={selectedValue === "0"}
                onChange={radioChange}
                value="0"
                name="radio-button-demo"
                inputProps={{ "aria-label": "0" }}
              />
            </div>
            <div
              className="border rounded text-center p-3 col mr-3"
              id="parent"
            >
              <img
                src="images/glasses.png"
                alt=""
                id="child"
                width="50px"
                height="50px"
              />
              <p className="text-center mt-2 mb-2">
                <FormattedMessage
                  id="verre.label"
                  defaultMessage="Verre"
                  description="Link on react page"
                />
              </p>
              <GreenRadio
                checked={selectedValue === "2"}
                onChange={radioChange}
                value="2"
                name="radio-button-demo"
                inputProps={{ "aria-label": "2" }}
              />
            </div>
            <div
              className="border rounded text-center p-3 col mr-3"
              id="parent"
            >
              <img
                src="images/paper.png"
                alt=""
                id="child"
                width="50px"
                height="50px"
              />
              <p className="text-center mt-2 mb-2">
                <FormattedMessage
                  id="papier.label"
                  defaultMessage="Papier"
                  description="Link on react page"
                />
              </p>
              <GreenRadio
                checked={selectedValue === "3"}
                onChange={radioChange}
                value="3"
                name="radio-button-demo"
                inputProps={{ "aria-label": "3" }}
              />
            </div>
            <div
              className="border rounded text-center p-3 col mr-3"
              id="parent"
            >
              <img
                src="images/other.png"
                alt=""
                id="child"
                width="50px"
                height="50px"
              />
              <p className="text-center mt-2 mb-2">
                <FormattedMessage
                  id="autre.label"
                  defaultMessage="Autre"
                  description="Link on react page"
                />
              </p>
              <GreenRadio
                checked={selectedValue === "4"}
                onChange={radioChange}
                value="4"
                name="radio-button-demo"
                inputProps={{ "aria-label": "4" }}
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index="three" className="heighfix">
          <div className="row">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-ville-simple">
                <FormattedMessage
                  id="ville.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </InputLabel>
              <Select
                value={values.ville}
                onChange={handleChanges}
                labelWidth={labelWidth}
                inputProps={{
                  name: "ville",
                  id: "outlined-ville-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {villes.ville.map((element, index) => (
                  <MenuItem value={element.ville} key={index}>
                    {element.ville}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </TabPanel>
        <TabPanel value={value} index="four" className="heighfix">
          <div className="row">
            <div className="col mt-2">
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-poids"
                  label={<FormattedMessage
                    id="poids.label"
                    defaultMessage="Acceuil"
                    description="Link on react page"
                  />}
                  className={classes.textField}
                  value={values.poids}
                  onChange={handleChangeInput('poids')}
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="col mt-2">
              <FormControl variant="outlined" className={classes.formControl}>
                <TextField
                  id="outlined-quantite"
                  label={<FormattedMessage
                    id="quantite.label"
                    defaultMessage="Acceuil"
                    description="Link on react page"
                  />}
                  className={classes.textField}
                  value={values.quantite}
                  onChange={handleChangeInput('quantite')}
                  variant="outlined"
                />
              </FormControl>
            </div>
            <div className="col mt-2">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Qualité
                  </InputLabel>
                <Select
                  value={values.qualite}
                  onChange={handleChanges}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "qualite",
                    id: "outlined-qualite-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>basse qualité</MenuItem>
                  <MenuItem value={2}>moyenne qualité</MenuItem>
                  <MenuItem value={3}>haute qualité</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col mt-2">
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Livraison
                  </InputLabel>
                <Select
                  value={values.livraison}
                  onChange={handleChanges}
                  labelWidth={labelWidth}
                  inputProps={{
                    name: "livraison",
                    id: "outlined-livraison-simple"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="No">No</MenuItem>
                  <MenuItem value="Oui">Oui</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </TabPanel>
        <div className="row">
          <div className="col-8">
            <div className="ml-5">
              <strong>{count}</strong>{" "}
            </div>
          </div>
          <div className="col-4">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                Trier par
                </InputLabel>
              <Select
                value={values.sort}
                onChange={handleChanges}
                labelWidth={labelWidth}
                inputProps={{
                  name: "sort",
                  id: "outlined-sort-simple"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>le plus récent</MenuItem>
                <MenuItem value={2}>le moin cher</MenuItem>
                <MenuItem value={3}>le plus cher</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        {articles.length > 0 && <ResultSearch data={articles} />}
        <div className="row">
          <div className="col text-center">
          <Button
            onClick={onClickPage}
            variant="contained"
            color="primary"
            className="p-2 m-2"
            endIcon={<Icon className="fas fa-spinner" />}
          >
            Afficher autre
          </Button>
          </div>
        </div>
      </Container>
    </MuiThemeProvider>
  );
}
