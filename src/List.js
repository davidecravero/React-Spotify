import React from "react";
import { makeStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

function List({key, artist, title, image, duration}) {

    const classes = useStyles();
    return (
        <>
        <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{artist}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{title}</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>{duration}</Paper>
        </Grid>
      </Grid>
    </div>
        </>
    )
}


export default List;