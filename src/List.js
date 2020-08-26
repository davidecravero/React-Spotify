import React from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";

function List({ key, artist, title, image, duration, del }) {
  const [toggledRowPlay, setTogglerRowPlay] = React.useState(false);
  return (
    <div>
      <div onClick={() => setTogglerRowPlay(!toggledRowPlay)}>{toggledRowPlay ? <PauseSharpIcon /> : <PlayArrowSharpIcon />}</div>
      <p>{artist}</p>
      <p>{title}</p>
      <img src={image} width='150px' alt='Album Cover' />
      <p>{duration}</p>
    </div>
  );
}

export default List;
