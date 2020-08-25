import React from "react";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function List({key, artist, title, image, duration, del}) {

    return (
        <div>
        <PlayArrowIcon />
        <p>{artist}</p>
        <p>{title}</p>
        <img src={image} width="150px" alt="Album Cover"/>
        <p>{duration}</p>
        </div>
    )
}


export default List;