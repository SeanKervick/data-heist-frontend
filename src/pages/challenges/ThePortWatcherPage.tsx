import { Card, CardContent, Box, Input } from "@mui/material";
import { useState } from "react";


const PortWatcher = () => {
  const [command, setCommand] = useState<string>("");


  return (
    <Card sx={{ 
      color: "white", 
      width: "90vw", 
      height: "30vw", 
      maxWidth: "900px",
      margin: "auto",
      border: "1px solid grey" }}>
      <CardContent>
        <Box sx={{ fontFamily: "monospace", textAlign: "left"}}>
          Microsoft Windows [Version 10.0.26100.3476]<br></br>
          (c) Microsoft Corporation. All rights reserved.<br></br>
          <br></br>
          C:\Users\Player&gt;
        <Input
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          disableUnderline
          sx = {{ color: "white", fontFamily: "monospace" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortWatcher;
