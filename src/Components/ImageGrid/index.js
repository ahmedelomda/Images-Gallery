import React, { useState } from 'react';
import Images from '../../Constants/constant';
import Favorite from '../Favorite-page/index';
import { Grid } from '@material-ui/core';
import './style.css';

const ImageGrid = () => {
    const[ selectedImg, setSelectedImg ] = useState(Images[0]);
    const[ favoriteList, setFavoriteList ] = useState([]);

    const addToFavorite = (index) => {
        // if(favoriteList.some(( currentFav ) => currentFav.index === Images[index] ))
        // {   
        //     console.log(favoriteList);
        //     return console.log('already is added');
        // }
        
        const newFavoriteList = [...favoriteList, Images[index]];
        setFavoriteList(newFavoriteList);
        console.log(newFavoriteList);
        console.log(index);
    }

    return (
        <div className="img-grid">
            <h1>My Gallery</h1>
            <img src={selectedImg} alt="selected" className="selected" />
            <Grid 
                container 
                spacing={2}
                justifyContent='center'
            >
                {Images && Images.map((img, index) => (
                    <Grid 
                        item 
                        xs={6} 
                        sm={3} 
                        lg={2}
                        key={index} 
                    >
                        <img
                            style={{ border: selectedImg === img ? '2px solid rebeccapurple' : '' }}
                            src={img}
                            key={index}
                            alt="flower"
                            className="image"
                            onClick={() => setSelectedImg(img)}
                        />
                        <button onClick={() => addToFavorite(index)}>
                            Add To Favorite
                        </button>
                    </Grid>
                ))}
            </Grid>

            <Favorite favoriteList={favoriteList} />
        </div>
    );
}

export default ImageGrid;