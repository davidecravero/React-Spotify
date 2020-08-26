import React from "react";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
import { Button } from "@material-ui/core";

// Component to be exported
export default function SimpleBottomNavigation() {
  const [toggled, setToggler] = React.useState(false); // It is possible to invoke the useState hook also withouth importing the react component. A boolean it set in order for a conditional operator to run a condition that returns the pause icon.

  return <Button onClick={() => setToggler(!toggled)}>{toggled ? <PauseSharpIcon /> : <PlayArrowSharpIcon />}</Button>;
}
