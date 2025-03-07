import { Button, Typography, Container, Box }  from "@mui/material";
import { Link } from "react-router-dom";

const GameIntroPage = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h2" gutterBottom>
        Instructions:
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "left", maxWidth: 800, mx: "auto" }}>
        <br />• Complete challenges within the time limit to earn points.
        <br />• Bonus points: <strong>Correct Answers & Time Remaining</strong>.
        <br />• Points deducted for: <strong>Hints</strong>.
        <br />• <strong>Zero</strong> points for challenges skipped.
        <br />• Your final score will be displayed at the end.
        <br></br>
        <br />• When ready, choose your difficulty and begin:
        <br />• <strong>Beginner</strong>: Introductory cybersecurity challenges.
        <br />• <strong>Advanced</strong>: Software & Network security challenges.
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Link to="/challenge/password-cracker">
          <Button variant="contained" color="primary">
            Beginner
          </Button>
        </Link>
        <Link to="/challenge/code-exposed">
          <Button variant="contained" color="primary">
            Advanced
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default GameIntroPage;
