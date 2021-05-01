import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Button,
} from '@material-ui/core';

const useStyle = makeStyles({
    roots: {
        maxWidth: 330,
    },

    media: {
        height: 200,
    },

    favorite: {
        textAlign: 'center',
    },
});

const Favorite = ({ favoriteList }) => {
    const classes = useStyle();

    return (
        <div className={classes.favorite}>
            <h1>My Favorite List</h1>
            <Grid
                container
                spacing={2}
                justifyContent='center'
                className='grid-parent'
            >
                {favoriteList && favoriteList.map((img, index) => (
                    <Grid
                        item
                        xs={6}
                        sm={3}
                        lg={2}
                        key={index}
                    >
                        <Card className={classes.roots}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={img}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Favorite;
