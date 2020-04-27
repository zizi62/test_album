import React from 'react';
import { NavLink } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import PhotoAlbumIcon from '@material-ui/icons/PhotoAlbum';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  listItem: {
    justifyContent: 'space-between'
  }
}));

const User = (props) => {
  const classes = useStyles();
  const { user } = props
  return (
    <NavLink to={`/albums/${user.id}`} style={{ textDecoration: 'none' }} >
      <ListItem key={user.id} button className={classes.listItem} >
        <Typography variant="button" display="block" color="textPrimary" >
          {user.name}
        </Typography>
        <PhotoAlbumIcon />
      </ListItem>
    </NavLink>
  )
}

export default User
