import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PlayArrowSharpIcon from "@material-ui/icons/PlayArrowSharp";
import PauseSharpIcon from "@material-ui/icons/PauseSharp";
import { spacing } from "@material-ui/system";

// Css field - To be discussed
const useStyles = makeStyles({
  root: {
    width: 800,
  },
});

const change = onchange;

// Component to be exported
export default function SimpleBottomNavigation() {
  const classes = useStyles(); // Basic css apply
  // === === === === === === === //
  const [value, setValue] = React.useState(false); // It is possible to invoke the useState hook also withouth importing the react component

  const changeIcon = () => {
    return <PauseSharpIcon />;
  };

  return (
    <div>
      <BottomNavigation>
        <BottomNavigationAction
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className={classes.root}
          icon={<PlayArrowSharpIcon />}
          onClick={changeIcon}
        />
      </BottomNavigation>
    </div>
  );
}
