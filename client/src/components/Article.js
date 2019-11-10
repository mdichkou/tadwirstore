import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SlideShow from 'react-image-show';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Badge from "@material-ui/core/Badge";
import Slider from "react-slick";
import MediaCard from "./MediaCard"
import axios from "axios"
import { FormattedMessage } from "react-intl";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import NumericInput from 'react-numeric-input';
import TextField from "@material-ui/core/TextField";

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

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    top: "50% !important",
    left: "50% !important",
    width: 250,
    backgroundColor: theme.palette.background.paper,
    borderRadius: "10px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: "center"
  },
  root: {
    flexGrow: 1,
    margin: 20,
    position: "relative"
  },
  card: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    color: "#6383ea",
  },
  pos: {
    marginBottom: 12,
    marginTop: 12
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 10
  },
  FloatCenter: {
    margin: "auto",
    width: "100%"
  }
}));
export default function Article(props) {
  const classes = useStyles();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  const types = [
    <FormattedMessage
      id="pain.label"
      defaultMessage="Acceuil"
      description="Link on react page"
    />,
    <FormattedMessage
      id="plastique.label"
      defaultMessage="Acceuil"
      description="Link on react page"
    />,
    <FormattedMessage
      id="verre.label"
      defaultMessage="Acceuil"
      description="Link on react page"
    />,
    <FormattedMessage
      id="papier.label"
      defaultMessage="Acceuil"
      description="Link on react page"
    />,
    <FormattedMessage
      id="autre.label"
      defaultMessage="Acceuil"
      description="Link on react page"
    />
  ];
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [images, setImages] = React.useState(null);
  const [settingsType, setSettingsType] = React.useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: "10px"
  });
  const [settingsVille, setSettingsVille] = React.useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    centerPadding: "10px"
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [info, setInfo] = React.useState(null);
  React.useEffect(() => {
    axios
      .get(
        "http://localhost:5000/api/articles/article/" + props.match.params.id
      )
      .then(res => {
        setInfo(res.data);
        setImages(JSON.parse(res.data.article.images))
        if(res.data.dechetsType.length === 1)
        setSettingsType({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        });
        if(res.data.dechetsVille.length === 1)
        setSettingsVille({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        })
      });
  }, [props.match.params.id]);
  return (
    <Container className="mt-5 mb-5" style={{
      backgroundColor: "#fff",
      boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }}>
      <div className="row">
        <div className="col-8 p-5" style={{
          minWidth: "372px"
        }}>
          <div className="mb-2" style={{
            backgroundColor: "#fff",
            height: "50px",
            boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
            position: "relative"
          }}><div style={{
            position: "absolute",
            left: "20px",
            top: "10px",
            fontSize: "20px"
          }}>{info && info.article.prix + ".00DH"}</div>

            {info && info.article.enchere === 1 && (
              <div style={{
                position: "absolute",
                right: "50px",
                top: "10px",
                fontSize: "20px"
              }}>
                le temps restante:<span style={{
                  color: "#f50057",
                  fontSize: "15px",
                }}>{info && " " + info.article.Creation_Date}</span>
                <Button className="ml-2" onClick={handleOpen} variant="contained" color="secondary">
                  ENCHÈRE
      </Button>
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
                >
                  <div style={modalStyle} className={classes.paper}>
                    <h2 id="simple-modal-title">{info && info.article.prix}.00DH</h2>
                    <NumericInput style={{
                      input: {
                        color: '#07d4b5',
                        fontSize: "20px",
                        fontWeight: 'bold'
                      }
                    }} min={info.article.prix} value={info.article.prix} mobile className="form-control" />
                    <Fab style={{
                      backgroundColor: "#07d4b5",
                      color: "white",
                      fontSize: "10px"
                    }} size="small" className="mt-4 p-3" variant="extended" aria-label="delete" >
                      Envoyer
      </Fab>
                  </div>
                </Modal>
              </div>
            )}

          </div>
          <SlideShow
            images={["/images/plastique.jpg", "/images/plastique.jpg", "/images/plastique.jpg", "/images/plastique.jpg"]}
            width="100%"
            imagesWidth="100%"
            imagesHeight="450px"
            imagesHeightMobile="56vw"
            thumbnailsWidth="100%"
            thumbnailsHeight="12vw"
            arrows={false}
            indicators thumbnails fixedImagesHeight
          />
          <div className="mt-2">
            <Card className={classes.card}>
              <CardContent className="pl-0 pr-0">
                <Typography className={classes.title} style={{ marginLeft: "20px" }} gutterBottom>
                  Dechets de {info && info.article.ville}
                </Typography>
                <div className="ml-4">
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </div>
                <div className="ml-4">
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="filled"
                  />
                </div>
              </CardContent>
              <CardActions>
                <Button className={classes.FloatCenter} size="small">Dechets de {info && info.article.ville}</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mt-2">
            <Card className={classes.card}>
              <CardContent className="pl-0 pr-0">
                <Typography className={classes.title} style={{ marginLeft: "20px" }} gutterBottom>
                  Dechets de {info && info.article.ville}
                </Typography>
                <Slider {...settingsVille} style={{ width: "100%" }}>
                  {info && info.dechetsVille.length > 0 && info.dechetsVille.map((element, index) => (
                    <MediaCard
                      title="mdichkou"
                      key={index}
                      poids={element.poids}
                      type={element.type}
                      prix={element.prix}
                      quantite={element.quantite}
                      livraison={element.livraison}
                      ville={element.ville}
                      vues={element.vues}
                      enchere={element.enchere}
                      id={element.id}
                      images={element.images}
                    />
                  ))}
                </Slider>
              </CardContent>
              <CardActions>
                <Button className={classes.FloatCenter} size="small">Dechets de {info && info.article.ville}</Button>
              </CardActions>
            </Card>
          </div>
          <div className="mt-2">
            <Card className={classes.card}>
              <CardContent className="pl-0 pr-0">
                <Typography className={classes.title} style={{ marginLeft: "20px" }} gutterBottom>
                  {info && types[info.article.type]} Dechets
        </Typography>
                <Slider {...settingsType} style={{ width: "100%" }}>
                  {info && info.dechetsType.length > 0 && info.dechetsType.map((element, index) => (
                    <MediaCard
                      title="mdichkou"
                      key={index}
                      poids={element.poids}
                      type={element.type}
                      prix={element.prix}
                      quantite={element.quantite}
                      livraison={element.livraison}
                      ville={element.ville}
                      vues={element.vues}
                      enchere={element.enchere}
                      id={element.id}
                      images={element.images}
                    />
                  ))}
                </Slider>
              </CardContent>
              <CardActions>
                <Button className={classes.FloatCenter} size="small"> {info && types[info.article.type]} Dechets</Button>
              </CardActions>
            </Card>
          </div>
        </div>
        <div className="col-4 p-5" style={{
          minWidth: "372px"
        }}>
          <div style={{
            backgroundColor: "#6383ea",
            width: "100%",
            height: "50px",
            position: "relative"
          }}>
            <div style={{
              position: "absolute",
              left: "20px",
              top: "10px",
              fontSize: "20px",
              color: "white"
            }}><strong>Chercher</strong></div>
            <div style={{
              position: "absolute",
              right: "20px",
              top: "5px",
            }}>
              <Fab href="/" size="small" style={{
                backgroundColor: "#07d4b5",
                color: "white"
              }} aria-label="add">
                <AddIcon />
              </Fab>
            </div>
          </div>
          <div className="mt-2">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  Vendeur Details
        </Typography>
                <div style={{ display: "inline-flex" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/images/pdp.jpg"
                    className={classes.avatar}
                  />
                  <div>
                    <Typography component="legend" className="ml-2">
                      <strong>{info && info.userDetails[0].username}</strong>
                    </Typography>
                    <Rating value={3} readOnly />
                  </div>
                  {props.enchere === 1 && (
                    <div className="ml-2">
                      <Badge badgeContent="ENCHÈRE" color="error"></Badge>
                    </div>
                  )}
                </div>
                <Typography className={classes.pos} color="textSecondary">
                  Telephone
        </Typography>
                <Typography variant="body2" component="p">
                  0{info && info.userDetails[0].telephone}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Email
        </Typography>
                <Typography variant="body2" component="p">
                  {info && info.userDetails[0].email}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Adresse
        </Typography>
                <Typography variant="body2" component="p">
                  {info && info.userDetails[0].ville + " " + info.userDetails[0].adresse}
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.FloatCenter} size="small">Vendeur Info</Button>
              </CardActions>
            </Card>
            <div className="mt-2">
              <Card className={classes.card}>
                <CardContent className="pl-0 pr-0">
                  <Typography className={classes.title} style={{ marginLeft: "20px" }} gutterBottom>
                    Vendeur Dechets
        </Typography>
                  <Slider {...settings} style={{ width: "100%" }}>
                    {info && info.dechetsUser.length > 0 && info.dechetsUser.map((element, index) => (
                      <MediaCard
                        title="mdichkou"
                        key={index}
                        poids={element.poids}
                        type={element.type}
                        prix={element.prix}
                        quantite={element.quantite}
                        livraison={element.livraison}
                        ville={element.ville}
                        vues={element.vues}
                        enchere={element.enchere}
                        id={element.id}
                        images={element.images}
                      />
                    ))}
                  </Slider>
                </CardContent>
                <CardActions>
                  <Button className={classes.FloatCenter} size="small">Vendeur Dechets</Button>
                </CardActions>
              </Card>
            </div>
            <div className="mt-2">
              <Card className={classes.card}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Vendeur de {info && info.article.ville}
                  </Typography>
                  {info && info.usersVille.length > 0 && info.usersVille.map((element, index) => (
                    <div style={{ display: "inline-flex" }} key={index}>
                      <Avatar
                        alt="pdp"
                        src={element.avatar}
                        className={classes.avatar}
                      />
                      <div>
                        <Typography component="legend" className="ml-2">
                          <strong>{element.username}</strong>
                        </Typography>
                        <Rating value={3} readOnly />
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardActions>
                  <Button className={classes.FloatCenter} size="small">Vendeur de {info && info.article.ville}</Button>
                </CardActions>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
