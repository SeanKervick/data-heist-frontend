import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Avatar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DialogBox from "../../components/DialogBox";
import Timer from "../../components/Timer";


const CertInspectorChallenge = () => {
  const navigate = useNavigate();
  // state variables
  const [certificate, setCert] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false); // for navigation control
  const [showDialog, setShowDialog] = useState<boolean>(true); // dialog box shown at start
  // timer control
  const [timerStart, setTimerStart] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);
  // score keeping
  const [challengeScore, setChallengeScore] = useState<number>(0);
  const totalScore = (Number(localStorage.getItem("totalScore")));
  console.log(`C1 total score is: ${totalScore}`);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stops browser from reloading the page
    setError("");
    setSuccess(false);

    if (certificate === "b0047d0db3bd06499e6a3a509129860704967b66f083bcbabc03f767a43281d0" ) {
      setSuccess(true);
      setTimerStart(false); // stop the timer

      setChallengeScore(time); // update state for end of challenge dialog box UI
      const updatedTotal = totalScore + time; // calculate total score
      localStorage.setItem("totalScore", (updatedTotal).toString()); // store updated total score

      setShowDialog(true); // show dialog at end of this challenge
      
    } else {
      setError("Incorrect. Try again!"); // show error
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    setTimerStart(true); // start timer
    if (success) {
      navigate("/feedback"); // direct to next challenge
    }
  };

  const handleTimeUp = () => {
    console.log("time's up");
    // handle action when time runs out here
  };


  return (
    <Container sx={{ width: "95%", textAlign: "center", mt: 5 }}>
      {/* dialog box */}
      <DialogBox
        open={showDialog}
        title={
          success ? `Challenge 2 Complete! You scored ${challengeScore} points!` : "Challenge 2: Cert Inspector!"
        }
        // challenge explanation (shown at start) & educational message (shown at end)
        message={
          success ? (
            <>
              <Typography>
               Well done! You've successfully retrieved the certificate's SHA-256 fingerprint. 
               This fingerprint is used to verify a website's authenticity and prevent 'man-in-the-middle' attacks."
                <br />
                <br />
              </Typography>
            </>
          ) : (
            <Typography>
              Inspect the digital certificate of the Data-Heist website and find its SHA-256 fingerprint. Copy and paste in the fingerprint to complete the challenge."
           </Typography>
          )
        }
        buttonText={success ? "next challenge" : "OK"}
        onClose={handleDialogClose}
      />
      {/* timer not shown at end of challenge */}
      {!success && <Timer initialTime={30000} onTimeUp={handleTimeUp} start={timerStart} onTimeUpdate={setTime} />}

      {/* inspector image */}
      <Avatar
        src={"/images/cert-inspector.png"}
        sx={{ width: 200, height: 200, margin: "auto" }}
      />

      {/* challenge form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex",   flexDirection: "column", gap: 2, mt: 3 }}
      >
        <Typography variant="body1" color="red">
          Mobile users will need this tool:{" "}
          <a href="https://www.ssllabs.com/ssltest/" target="_blank" style={{ color: "blue", textDecoration: "underline" }}>
            SSL Labs SSL Test
          </a>
        </Typography>
        <Typography variant="body1">Enter data-heist's Certificate SHA-256 Fingerprint to complete this challenge:</Typography>
        <TextField
          type="text"
          variant="outlined"
          fullWidth
          value={certificate}
          onChange={(e) => setCert(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          submit
        </Button>
      </Box>
      {/* conditional rendering - if error (true) then render the alert (https://react.dev/learn/conditional-rendering) */}
      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}
    </Container>
  );
};

export default CertInspectorChallenge;
