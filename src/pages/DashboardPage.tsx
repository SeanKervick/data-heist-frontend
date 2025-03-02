import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DashboardPage = () => {
  const navigate = useNavigate();
  const [username] = useState(localStorage.getItem("username"));


  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    navigate("/login"); // redirect to login
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        welcome {username}!
      </Typography>
      <Typography>you are now logged in.</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 3 }}>
        logout
      </Button>
    </Container>
  );
};

export default DashboardPage;
