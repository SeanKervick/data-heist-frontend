import { Card, CardContent, Box, Typography, Input } from "@mui/material";
import { useState } from "react";
import storedCommands from "../../components/NmapCommands.tsx";

const PortWatcher = () => {
  const [inputCommand, setInputCommand] = useState<string>("");
  const [terminalOutput, setTerminalOutput] = useState<string>("");
  const [step, setStep] = useState<number>(1);
  const [guideResponse, setGuideResponse] = useState<string>("IDENTIFY THE NETWORK to scan for vulnerablities."); // step guidance


  // https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      let nextGuide = guideResponse; // guide response control
      let terminalOutput = "Invalid command. Try again.";

      // always allow all commands
      if (inputCommand in storedCommands) {
        terminalOutput = storedCommands[inputCommand];
      } 
        // step-based guidance through scan
        if (step === 1 && inputCommand === "ipconfig") {
          terminalOutput = storedCommands[inputCommand] || terminalOutput;
          nextGuide = `Well done! Now, use the information below (from the 'ipconfig' response)
           to PING ALL DEVICES on the network to discover active hosts.`;
          setStep(2);
        } else if (step === 2 && inputCommand === "nmap -sn 192.168.10.0/24") {
          terminalOutput = storedCommands[inputCommand] || terminalOutput;
          nextGuide = `Great! Below we can see 7 active hosts on the network. It's time to check which ones might be 
          running vulnerable services. Scan for common open ports like HTTP (80) & HTTPS (443) using -p 80,443.`;
          setStep(3);
        } else if (step === 3 && inputCommand === "nmap -p 80,443 192.168.10.0/24") {
          terminalOutput = storedCommands[inputCommand] || terminalOutput;
          nextGuide = `Nice work! Now analyze the devices below, and choose one with open ports for a SERVICE DETECTION SCAN. 
           Knowing the software behind these ports may present vulnerablities to exploit!`;
          setStep(4);
        } else if (step === 4 && inputCommand === "nmap -sV -p 80,443 192.168.10.1" ) {
          terminalOutput = storedCommands[inputCommand] || terminalOutput;
          nextGuide = `Excellent! You've identified that the router is running Apache httpd 2.4.49. 
          This version is outdated and has known vulnerabilities, making it a potential security risk.`;
        }

        // dialog message
        // Congratulation! You've successfully scanned the network, identified active hosts, checked for open ports, and discovered outdated services running.
        // This process is a key part of ethical hacking and penetration testing!

      setTerminalOutput(terminalOutput);
      setGuideResponse(nextGuide);
      setInputCommand(""); // clear the input field
    }
  };

  return (
    <Card sx={{ color: "primary", pt: 3}}>
      <Box sx={{ textAlign: "center", maxWidth: "1000px", pt: 2 }}>
      <Typography  sx={{ textAlign: "center" }}>Step {step}: {guideResponse}</Typography>
      <Typography color="red">(Tip: use 'nmap -h' for help)</Typography>
      </Box>
      <CardContent>
        <Box sx={{
          color: "white", 
          width: "90vw", 
          height: "32vw", 
          maxWidth: "1000px",
          border: "1px solid grey",
          fontFamily: "monospace",
          textAlign: "left",
          whiteSpace: "pre-line",
          p: 2 }}
        >
          Command Prompt
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
            sx = {{ width:"50%", bgcolor: "#000000", color: "white", fontFamily: "monospace" }}
          />
          <Box sx={{
            height: "75%", 
            maxWidth: "1000px",
            Maxheight: "32vw",
            overflow: "auto",
            }}
          >
            <Typography sx={{ fontFamily: "monospace", mt: 2 }}>{terminalOutput}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PortWatcher;
