import axios from "axios";

export const updateHighScore = async (score: number) => {

    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    await axios.post(
      "http://localhost:5000/api/update-score",
      { score, username },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  };
