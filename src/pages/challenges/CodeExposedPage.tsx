import { Box, Typography, Paper } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const CodeExposed = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "80vh",
        width: { xs: "95%", sm: "90%", md: "1100px" },
        maxWidth: "1100px",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      {/* sidebar - directory */}
      <Paper
        sx={{
          p: 2,
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          width: { xs: "70%", md: "20%" },
          minHeight: "100%",
        }}
      >
        <Typography variant="body2" gutterBottom>
          Project Files
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <FolderIcon color="primary" />
          <Typography variant="body2">src</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, pl: 3 }}>
          <InsertDriveFileIcon />
          <Typography variant="body2">index.js</Typography>
        </Box>
      </Paper>

      {/* right side - content */}
      <Box
        sx={{
          p: 3,
          backgroundColor: "#252526",
          color: "#ffffff",
          textAlign: "left",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2">index.js</Typography>
        <Paper
          sx={{
            p: 2,
            backgroundColor: "#1e1e1e",
            color: "#ffffff",
            overflowY: "auto",
            flex: 1,
          }}
        >
          <Typography
            component="pre"
            sx={{
              whiteSpace: "pre-wrap",
              fontFamily: "monospace",
              p: 1,
            }}
          >
            {`export class AuthController {
  constructor(userService, tokenService) {
    this.userService = userService;
    this.tokenService = tokenService;
  }
  async login(req) {
    const user = req.body;
    const foundUser = await this.userService.verifyUserWithPassword(user.username, user.password);
    const token = await this.tokenService.createToken(foundUser);
    return {
      status: 200,
      body: {
        user: {
          id: foundUser.id,
          username: foundUser.username
        },
        token
      }
    };
  }
}`}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default CodeExposed;
