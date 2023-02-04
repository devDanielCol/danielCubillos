import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import FlipToFrontIcon from "@mui/icons-material/FlipToFront";
import FlipToBackIcon from "@mui/icons-material/FlipToBack";
import PublicIcon from "@mui/icons-material/Public";

const Projects = () => {
  return (
    <Box>
      <Box sx={{ px: 2.5, pt: 3 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: 1,
            opacity: 0.7,
          }}
        >
          Algunos Proyectos
        </Typography>
      </Box>
      <Box sx={{ pt: 3 }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.default" }}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FlipToFrontIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Frontend"
              secondary="Interfaces de usuario"
            />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FlipToBackIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Backend" secondary="API, databases y más" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PublicIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Globales"
              secondary="Todos los proyectos y desarrollos"
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Projects;
