import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: "center"
    }
}));
const SomeError = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root} >
                <Typography variant="button" display="block" gutterBottom color="error">Some Error </Typography>
        </Container>
    )
}

export default SomeError
