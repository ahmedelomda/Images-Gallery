import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
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

import { makeStyles } from '@material-ui/core/styles';
import './style.css';

const useStyle = makeStyles({
    roots: {
        maxWidth: 330,
    },

    media: {
        height: 200,
    },
});


const ImageGrid = () => {

    const [data, setData] = useState({ hits: []});
    const [favoriteList, setFavoriteList] = useState([]);
    const classes = useStyle();

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('https://pixabay.com/api/?key=21237839-acf386e90dbcfa64cab0c353e&q=yellow+flowers&image_type=photo&pretty=true');
            
            setData(result.data);
            console.log(result.data.hits);
        };

        fetchData();
    }, [])

    const addToFavorite = (index) => {
        // if(favoriteList.some(( currentFav ) => currentFav.index === data[index] ))
        // {   
        //     console.log(favoriteList);
        //     return console.log('already is added');
        // }

        const newFavoriteList = [...favoriteList, data[index]];
        setFavoriteList(newFavoriteList);
        console.log(newFavoriteList);
        console.log(index);
    }

    return (
        <div className="img-grid">
            <h1>My Gallery</h1>
            <Grid
                container
                spacing={2}
                justifyContent='center'
                className='grid-parent'
            >
                {data.hits.map((img, index) => (
                    console.log(img.previewURL),
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
                                    image={img.previewURL}
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                            <CardActions>
                                <IconButton
                                    aria-label="add to favorites"
                                    color='primary'
                                    onClick={() => addToFavorite(index)}
                                >
                                    <Link to="/Favorite">+</Link>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

    );
}

export default ImageGrid;