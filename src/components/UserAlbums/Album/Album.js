import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({

    card: {
        width: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    content: {
        height: 60,
        overflow: 'hiden'
    }
}));

const Album = (props) => {
    const { title, albumImg, albumLength, id } = props.album
    const classes = useStyles();
    return (
        <Grid item >
            <NavLink to={`/photos/${id}`} style={{ textDecoration: 'none' }}>
                <Card className={classes.card} >
                    <CardHeader title={title} className={classes.content} />
                    <CardMedia
                        className={classes.media}
                        image={albumImg}
                        title={title} />
                    <CardContent className={classes.content}>
                        <Typography variant="button" display="block" color="primary" >
                            {albumLength} photos!
                        </Typography>
                    </CardContent >
                </Card>
            </NavLink>
        </Grid>
    )
}

export default Album
