import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // remove JWT token
    navigate("/login"); // redirect to login
  };

  return (
    <Container sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        welcome to the dashboard
      </Typography>
      <Typography>you are now logged in.</Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ mt: 3 }}>
        logout
      </Button>
    </Container>
  );
};

export default DashboardPage;
