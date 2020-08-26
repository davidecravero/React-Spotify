import React, { useEffect } from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Button } from "@material-ui/core";

// Component to be exported
export default function SimpleBottomNavigation({ songPlaying, isPlaying }) {
  const [toggled, setToggler] = React.useState(isPlaying); // It is possible to invoke the useState hook also withouth importing the react component. A boolean it set in order for a conditional operator to run a condition that returns the pause icon.

  return (
    <div>
      <Button>
        <SkipPreviousIcon />
      </Button>
      <Button onClick={() => setToggler(!toggled)}>{toggled ? <PauseSharpIcon /> : <PlayArrowSharpIcon />}</Button>
      <Button>
        <SkipNextIcon />
      </Button>
    </div>
  );
}
