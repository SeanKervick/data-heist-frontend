import { Button, Typography, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h1" gutterBottom>
        welcome to data-heist
      </Typography>
      <Typography variant="body1">
        a cybersecurity learning game. choose an option to get started:
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
      <Link to='/signup'>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
        </Link>
        <Link to='/login'>
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
        <Button variant="contained" color="primary">
          Continue as Guest
        </Button>
      </Box>
    </Container>
  );
};

export default Homepage;


