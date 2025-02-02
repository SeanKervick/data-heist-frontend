import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000", // black background
      paper: "#000000",
    },
    text: {
      primary: "#00FF00", // matrix green
      secondary: "#66FF66", // light green
    },
    primary: {
      main: "#00FF00", // matrix green buttons, links, etc.
    },
    secondary: {
      main: "#66FF66",
    },
  },
  typography: {
    fontFamily: "'Courier New', monospace", // hacker-style/matrix font
    fontSize: 18, // default text size
    h1: {
      fontSize: "5rem",
    },
    h2: {
      fontSize: "2.5rem",
    },
    h3: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.5rem",
    },
    body2: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          margin: 0,
          padding: 0,
          textAlign: "center",
        },
      },
    },
  },
});

export default darkTheme;
