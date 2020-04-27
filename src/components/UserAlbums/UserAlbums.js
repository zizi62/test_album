import React from 'react';
import { NavLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Album from './Album/Album';
import Button from '@material-ui/core/Button';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Preloader from '../common/Preloader';
import SomeError from '../common/SomeError';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.info.light,
        minHeight: '100vh',
        padding: 60,
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

const UserAlbums = (props) => {
    const { albums, getAlbum, userName, isAlbumsLoading, isError, userId } = props
    const classes = useStyles();

    return (
        <Container maxWidth='xl' className={classes.root}>
            <Typography variant="h4" gutterBottom>Autor: {userName}</Typography>
            <NavLink to={'/'} style={{ textDecoration: 'none' }}>
                <Button className={classes.backButton}
                    variant="contained"
                    color="primary"
                    startIcon={<KeyboardBackspaceIcon />}>
                    Back
                </Button>
            </NavLink>
            <Container className={classes.albumsBox}>
                {!isAlbumsLoading ? <Preloader />
                    : <Grid container justify="center" spacing={3} alignItems="stretch" >
                        {albums.map((album) => (<Album key={album.id} album={album} getAlbum={getAlbum} />))}
                    </Grid>}
                {isError&&<SomeError/>}
            </Container>
        </Container>
    )
}

export default UserAlbums
