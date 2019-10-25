import React from 'react';
import SliderShow from "./SliderShow"
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 20,
    position: "relative"
  }
}));
export default function Article(){
    const classes = useStyles();
    return (
      <Container className="mb-5">
        <Paper className={classes.root}>
        <div className="row"></div>
        <div className="row"><SliderShow></SliderShow></div>
     </Paper>
     </Container>
    );
}