import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        marginLeft: 20,
        position: 'relative',
    },
    media: {
        height: 140,
    },
    floatRight: {
        position: 'absolute',
        right: 10
    }
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
          <div className="mt-3">
           <Box component="span" bgcolor="text.hint" p={2} className="mr-2">
                        test
                        </Box>
                        <Box component="span" bgcolor="text.hint" p={2} className="mr-2">
                        test
                        </Box>
                        <Box component="span" bgcolor="text.hint" p={2} className="mr-2">
                        test
                        </Box>
                        <Box component="span" bgcolor="text.hint" p={2} className="mr-2">
                        test
                        </Box>
                          <Box component="span" bgcolor="text.hint" p={2} className="mr-2">
                        test
                        </Box>
          </div>
                       
                </CardContent>
            </CardActionArea>
            <CardActions>
               <Icon className="fas fa-eye" style={{ width: "auto"}}/><span>(2000)</span>
               <span className={classes.floatRight}>3 jours</span>
            </CardActions>
        </Card>
    );
}