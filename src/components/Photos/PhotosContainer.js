import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import { withRouter } from 'react-router-dom';
import { setPhotos, selectedPhoto } from '../../Redux/reducers/photosReducer';
import Photos from './Photos';
import { getAlbum } from '../../Redux/reducers/albumsReducer';


const PhotosContainer = (props) => {

    useEffect(() => {
        debugger
        if (!props.match.params.albumId) {
            props.history.push('/')
        }
        else {
            props.getAlbum(props.match.params.albumId);
            props.setPhotos(props.match.params.albumId);
        }

    }, [props.match.params.albumId])

    return (
        <Photos  {...props} />
    )
}

const mapStateToProps = (state) => ({
    photos: state.photosList.photosList,
    isPhotosLoading: state.photosList.isPhotosLoading,
    isError: state.photosList.isError,
    albumId: state.albumsList.album.id,
    userId: state.usersList.user.id,
    albumTitle: state.albumsList.album.title
})

const mapDispatchToProps = (dispatch) => ({
    setPhotos: (albumId) => dispatch(setPhotos(albumId)),
    getSelectedPhoto: (index) => dispatch(selectedPhoto(index)),
    getAlbum: (albumId) => dispatch(getAlbum(albumId))
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
)(PhotosContainer)

