import React from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import { Button } from "@material-ui/core";
import "./StylePlaybar.css";

export default function SimpleBottomNavigation() {
  const [toggled, setToggler] = React.useState(false); // It is possible to invoke the useState hook also withouth importing the react component. A boolean it set in order for a conditional operator to run a condition that returns the pause icon.

  return (
    // Return a div with PlayBar component, Buttons contain play icons
    <div className='container-playbar' maxWidth='sm'>
      <Button size='large'>
        <SkipPreviousIcon fontSize='large' />
      </Button>
      <Button size='large' onClick={() => setToggler(!toggled)}>
        {toggled ? <PauseSharpIcon fontSize='large' /> : <PlayArrowSharpIcon fontSize='large' />}
      </Button>
      <Button>
        <SkipNextIcon fontSize='large' />
      </Button>
    </div>
  );
}
