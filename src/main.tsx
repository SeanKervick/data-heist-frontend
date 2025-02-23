import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, CssBaseline } from "@mui/material";
import App from './index.tsx'
import darkTheme from "./theme";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </StrictMode>,
)
