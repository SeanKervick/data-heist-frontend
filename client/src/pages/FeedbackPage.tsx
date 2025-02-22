import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const FeedbackPage = () => {
  const navigate = useNavigate();
  const finalScore = Number(localStorage.getItem("totalScore")) ;

  const handleEndGame = () => {
    localStorage.removeItem("totalScore"); // reset score after game ends
    navigate("/"); // redirect to homepage
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Well done! Your total score is {finalScore}
      </Typography>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleEndGame} 
        sx={{ mt: 3 }}
      >
        Home
      </Button>
    </Container>
  );
};

export default FeedbackPage;
