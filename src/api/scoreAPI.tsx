import axios from "axios";

// pass finalScore from feedback page to store by username
export const updateHighScore = async (score: number) => {

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  await axios.post(
    "http://localhost:5000/api/update-score", // post api route to update user's score https://data-heist-backend.onrender.com http://localhost:5000
    { score, username },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
};

export const getLeaderboard = async () => {
  const { data } = await axios.get("http://localhost:5000/api/leaderboard"); // call api route for fetching leaderboard
  return data;
};
