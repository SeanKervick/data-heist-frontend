import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate(); // React Router useNavigate hook stored in a variable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // type of event object specified
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => { // type of event object specified
    e.preventDefault(); // stops browser from reloading the page

    // backend api call
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      
      console.log("account created successfully:", response.data);
      // store JWT token locally in the browswer, may improve this later for better security
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard"); // redirect to dashboard

    } catch {
      console.error("signup error:");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        create account
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
    </Container>
  );
};

export default SignUpPage;
