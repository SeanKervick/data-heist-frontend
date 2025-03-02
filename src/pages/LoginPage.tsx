import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // React Router useNavigate hook stored in a variable
  const [error, setError] = useState<string | null>(null); // stores error message


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // type of event object specified
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => { // type of event object specified
    e.preventDefault(); // stops browser from reloading the page

    // backend api call
    try {
      const response = await axios.post("http://localhost:5000/api/login", formData);
  
      console.log("Login successful:", response.data);
  
      // store user details locally
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("username", response.data.username); // save username for UI
      localStorage.setItem("role", response.data.role); // save role for access control
  
      // redirect based on role
      if (response.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
  
    } catch (error) {
      setError("Incorrect email or password. Please try again.");
      console.error("login error frontend:", error);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        login
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
          sign in
        </Button>
      </Box>
      <Box >
      {/* display error if exists */}
      {error && <Alert sx={{ fontSize: "0.8rem", p: 2, }} severity="error" >{error}</Alert>}
    </Box>
    </Container>
  );
};

export default LoginPage;
