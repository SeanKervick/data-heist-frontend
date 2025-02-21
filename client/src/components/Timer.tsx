import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { TimerProps } from "../types/interfaces"


const Timer: React.FC<TimerProps> = ({ initialTime, start, onTimeUp }) => { // define Timer component as a function
  const [time, setTime] = useState<number>(initialTime); // set state variable to initialTime in each challenge

  useEffect(() => { // useEffect hook used to automatically run the function 'on the side' https://legacy.reactjs.org/docs/hooks-effect.html
    if (!start) { // wait until 'start' is true
        setTime(initialTime); // reset timer when a new challenge starts
        return; 
    }

    if (time > 0) {
        setTimeout(() => setTime(time - 1), 1000);
      } else {
        onTimeUp(); // call function when timer reaches 0
      }
    }, [initialTime, time, start, onTimeUp]); // useEffect dependencies

  // display time remaining in challenge
  return <Typography>Time Left: {time}s</Typography>;
};

export default Timer;
