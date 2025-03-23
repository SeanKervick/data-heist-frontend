import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate(); // React Router useNavigate hook stored in a variable
  const [error, setError] = useState<string | null>(null); // Stores error message
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // type of event object specified
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => { // type of event object specified
    e.preventDefault(); // stops browser from reloading the page

    // backend api call
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData); // https://data-heist-backend.onrender.com replace after testing locally
      
      console.log("account created successfully:", response.data);
      localStorage.setItem("token", response.data.token); // store JWT token locally in the browswer
      localStorage.setItem("username", response.data.username); // save username in local storage for displaying in UI
      navigate("/dashboard"); // redirect to dashboard

    } catch (error) {
      console.error("signup error frontend:", error);
      setError("username already exists");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        create account
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
          label="username"
          type="username"
          name="username"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required
        />
        <TextField
          label="email"
          type="email"
          name="email"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required
        />
        <TextField
          label="password"
          type="password"
          name="password"
          variant="outlined"
          fullWidth
          onChange={handleChange}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          create account & login
        </Button>
      </Box>
      {/* display error if exists */}
      {error && <Alert sx={{ fontSize: "0.8rem", p: 2, }} severity="error" >{error}</Alert>}
    </Container>
  );
};

export default SignUpPage;
