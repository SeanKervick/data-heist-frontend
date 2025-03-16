import { Card, CardContent, Box, Typography, Input } from "@mui/material";
import { useState } from "react";
import storedCommands from "../../components/NmapCommands.tsx";

const PortWatcher = () => {
  const [inputCommand, setInputCommand] = useState<string>("");
  const [output, setOutput] = useState<string>("");

  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const response = storedCommands[inputCommand]; // look up the response for the entered command
      setOutput(response ? response : "Invalid command. Try 'nmap -h' for help.");
      setInputCommand(""); // clear the input field
    }
  };

  return (
    <Card sx={{ 
      color: "white", 
      width: "90vw", 
      height: "32vw", 
      maxWidth: "900px",
      border: "1px solid grey",
      overflow: "auto", }}
      >
      <CardContent>
        <Box sx={{ fontFamily: "monospace", textAlign: "left", whiteSpace: "pre-line"}}>
          Command Prompt<br></br>
          <br></br>
          Microsoft Windows [Version 10.0.26100.3476]<br></br>
          (c) Microsoft Corporation. All rights reserved.<br></br>
          <br></br>
          C:\Users\Player&gt;
        <Input
          autoFocus 
          value={inputCommand} // for clearing the input field
          onChange={(e) => setInputCommand(e.target.value)} // so the input is visible
          onKeyDown={handleKeyPress} // https://react.dev/reference/react-dom/components/common#handling-keyboard-events
          disableUnderline
          sx = {{ color: "white", fontFamily: "monospace" }}
          />
          <Typography sx={{ fontFamily: "monospace", mt: 2 }}>{output}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortWatcher;
