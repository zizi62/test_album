import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  paper: {
    height: 156,
    width: 156,
    padding: 3,
    backgroundColor: theme.palette.primary.main
  },
  photoImg: {
    width: "100%"
  }
}));

const Photo = (props) => {

  const { thumbnailUrl, id, title } = props.photo;

  const classes = useStyles();

  const handleOpen = () => props.handleOpen(props.index)
  
  return (
    <Grid item onClick={() => handleOpen(id)}>
      <Paper className={classes.paper} key={id} >
        <img src={thumbnailUrl} alt={title} className={classes.photoImg} />
      </Paper>
    </Grid>
  )
}

export default Photo;
