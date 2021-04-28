import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

const Favorite = ({ favoriteList }) => {

    return (
        <div>
            <h1>My Favorite</h1>
            <Grid
                container
                spacing={2}
                justifyContent='center'
            >
                {favoriteList.map((img, index) => (
                    <Grid
                        item
                        xs={6}
                        sm={3}
                        lg={2}
                        key={index}
                    >
                        <img
                            src={img}
                            alt="flower"
                            className="image"
                            key={index}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Favorite;
