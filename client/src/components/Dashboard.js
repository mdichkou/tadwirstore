import React from 'react';
import PropTypes from 'prop-types';
import "./indicator.css"
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import ResultSearch from "./ResultSearch";
import Modal from '@material-ui/core/Modal';
import AddArticle from "./AddArticle"


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#03d2b4"
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: 224,
    height: "auto"
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  }
}));

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export default function Dashboard(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [isTrue, setIsTrue] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onAdd = () => {
    setIsTrue(!isTrue);
  };
  const onClickPage = () => {
    setPage(page + 1);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/articles/myarticle/" + props.match.params.id + "/" + page
      )
      .then(res => {
        setData(res.data);
      });
  }, [props.match.params.id,page]);
  return (
    <Container className="mt-5 mb-5 p-3" style={{
      backgroundColor: "#fff",
      boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }}>
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab style={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
            minWidth:"250px",
            minHeight: '60px'
        }} label="Déchets" {...a11yProps(0)} />
        <Tab style={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
            minWidth:"250px",
            minHeight: '60px'
        }} label="Profile" {...a11yProps(1)} />
        <Tab style={{
            border: '1px solid rgba(0, 0, 0, 0.12)',
            minWidth:"250px",
            minHeight: '60px'
        }} label="Contact" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}  style={{
        width:"80%"
      }}>
      <div className="row">
        <Button
          variant="contained"
          color="primary"
          onClick={onAdd}
          className={classes.button}
          startIcon={<AddIcon />}
          >
        {isTrue ? ("Annuler") : ("Ajouter des dechets")}
        </Button>
      </div>
      {
        isTrue && <AddArticle />
      }
      {data.length > 0 && <ResultSearch data={data} />}
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
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
    </Container>
  );
}
