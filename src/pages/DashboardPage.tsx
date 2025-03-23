import { Button, Box, Container, Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper, } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getLeaderboard } from "../api/scoreAPI";
import { LeaderboardUser } from "../types/interfaces"

const DashboardPage = () => {
  const navigate = useNavigate();
  const [username] = useState(localStorage.getItem("username"));
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

  // useEffect hook used to run the function 'on the side' https://legacy.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const fetchLeaderboard = async () => {
      const data = await getLeaderboard();
      setLeaderboard(data);
    };
    fetchLeaderboard();
  }, []);

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
      <Typography sx={{ mt: 4 }} variant="h4" gutterBottom>
        Leaderboard:
      </Typography>
      {/* ----------- leaderboard table -------------- https://mui.com/material-ui/react-table/ */}
      <TableContainer component={Paper} sx={{ maxWidth: 600, mx: "auto" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell>Username</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboard.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell align="center">#{index + 1}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell align="right">{user.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 3 }}>
        <Link to="/game-intro">
            <Button variant="contained" color="primary">
              Play
            </Button>
          </Link>
        <Button variant="contained" color="secondary" onClick={handleLogout} >
          logout
        </Button>
      </Box>
    </Container>
  );
};

export default DashboardPage;
