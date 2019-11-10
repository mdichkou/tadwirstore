import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Rating from "@material-ui/lab/Rating";
import Icon from "@material-ui/core/Icon";
import { FormattedMessage } from "react-intl";
import Badge from "@material-ui/core/Badge";
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    minWidth: 330,
    maxWidth: 372,
    position: "relative"
  },
  media: {
    height: 140
  },
  floatRight: {
    position: "absolute",
    right: "20%"
  }
});
function MediaCard(props) {
  const classes = useStyles();
  const [images, setImages] = React.useState(JSON.parse(props.images));
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
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={() => {
        props.history.push('/article/' + props.id);
      }}>
        <CardMedia
          className={classes.media}
          image={images.image_1}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div style={{ display: "inline-flex" }}>
            <Avatar
              alt="Remy Sharp"
              src="/images/pdp.jpg"
            />
            <div>
              <Typography component="legend" className="ml-2">
                <strong>{props.title}</strong>
              </Typography>
              <Rating value={3} readOnly />
            </div>
            {props.enchere === 1 && (
              <div className="ml-2">
                {" "}
                <Badge badgeContent="ENCHÈRE" color="error"></Badge>
              </div>
            )}
          </div>
          <Typography gutterBottom variant="h5" component="h2">
            <strong>{props.prix}</strong> Dirham
          </Typography>
          <div className="mt-3">
            <div
              className="mr-1 text-center"
              style={{
                display: "inline-block",
                backgroundColor: "#efefef",
                padding: "5px",
                fontSize: "13px"
              }}
            >
              {types[props.type]}
              <br />
              <small className="text-muted">
                <FormattedMessage
                  id="type.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </small>
            </div>
            <div
              className="mr-1 text-center"
              style={{
                display: "inline-block",
                backgroundColor: "#efefef",
                padding: "5px",
                fontSize: "13px"
              }}
            >
              {props.poids}
              <br />
              <small className="text-muted">
                <FormattedMessage
                  id="poids.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </small>
            </div>
            <div
              className="mr-1 text-center"
              style={{
                display: "inline-block",
                backgroundColor: "#efefef",
                padding: "5px",
                fontSize: "13px"
              }}
            >
              {props.quantite}
              <br />
              <small className="text-muted">
                <FormattedMessage
                  id="quantite.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </small>
            </div>
            <div
              className="mr-1 text-center"
              style={{
                display: "inline-block",
                backgroundColor: "#efefef",
                padding: "5px ",
                fontSize: "13px"
              }}
            >
              {props.livraison}
              <br />
              <small className="text-muted">
                <FormattedMessage
                  id="livraison.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </small>
            </div>
            <div
              className="mr-1 text-center"
              style={{
                display: "inline-block",
                backgroundColor: "#efefef",
                padding: "5px",
                fontSize: "13px"
              }}
            >
              {props.ville}
              <br />
              <small className="text-muted">
                <FormattedMessage
                  id="ville.label"
                  defaultMessage="Acceuil"
                  description="Link on react page"
                />
              </small>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Icon className="fas fa-eye" style={{ width: "auto" }} />
        <span>({props.vues})</span>
        <span className={classes.floatRight}>3 jours</span>
      </CardActions>
    </Card>
  );
}

export default withRouter(MediaCard);
