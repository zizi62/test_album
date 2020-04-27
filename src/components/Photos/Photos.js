import React, {useState} from 'react';
import { NavLink,Redirect } from 'react-router-dom';
import Photo from './Photo/Photo';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PhotoModal from '../Modal/PhotoModal';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Preloader from '../common/Preloader';
import SomeError from '../common/SomeError';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.light,
    minHeight: '100vh',
    padding: '60px',
    position: "relative"
  },
  albumsBox: {
    paddingTop: 40
  },
  backButton: {
    position: "absolute",
    top: 24,
    left: 24
  }
}));


const Photos = (props) => {

  const { photos, getSelectedPhoto, albumTitle, isPhotosLoading, isError, userId } = props
  const classes = useStyles();
  const [open, setOpen] = useState(false);

//   if(!albumId) {
//     return <Redirect to ='/' />
// }


  const handleOpen = (index) => {
    getSelectedPhoto(index)
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth='xl' className={classes.root} >
      <PhotoModal open={open} handleClose={handleClose} />
      <NavLink to={`/albums/${userId}`} style={{ textDecoration: 'none' }}>
        <Button className={classes.backButton}
          variant="contained"
          color="primary"
          startIcon={<KeyboardBackspaceIcon />}>
          Back
      </Button>
      </NavLink>
      <Typography variant="h4" gutterBottom >{albumTitle}</Typography>
      <Container maxWidth='lg' className={classes.albumsBox}>
        {!isPhotosLoading ? <Preloader />
          : <Grid container justify="center" spacing={2}>
            {photos.map((photo, index) => (
              <Photo key={photo.id} photo={photo} handleOpen={handleOpen} index={index} />
            ))}
          {isError&& <SomeError/>}
          </Grid>}
      </Container>
    </Container>
  )
}

export default Photos
