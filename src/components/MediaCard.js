import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginLeft: 20
    },
    media: {
        height: 140,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="images/plastique.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <div style={{ display: "inline-flex" }}>
                        <Avatar alt="Remy Sharp" src="images/pdp.jpg" className={classes.avatar} />
                        <div>
                            <Typography component="legend" className="ml-2"><strong>mdichkou</strong></Typography>
                            <Rating value={3} readOnly />
                        </div>


                    </div>
                    <Typography gutterBottom variant="h5" component="h2">
                        <strong>2000</strong>.00 Dirham
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    );
}