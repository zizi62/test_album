import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Calrousel from '../Сarousel/Calrousel';

const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 600,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
}));


const PhotoModal = (props) => {
  const classes = useStyles();

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description">
      <div className={classes.modal}>
        <Calrousel />
      </div>
    </Modal>
  )
}

export default PhotoModal



