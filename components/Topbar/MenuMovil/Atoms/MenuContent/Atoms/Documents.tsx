import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const Documents = () => {
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
          Documentos de apoyo
        </Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <List dense={false}>
          <ListItem>
            <ListItemIcon>
              <FolderIcon />
            </ListItemIcon>
            <ListItemText
              primary="Recursos para desarrollo"
              secondary={"Descarga documentos, tutoriales y demás documentos."}
            />
          </ListItem>
        </List>
        <List dense={false}>
          <ListItem>
            <ListItemIcon>
              <CloudDownloadIcon />
            </ListItemIcon>
            <ListItemText
              primary="Descarga mi CV"
              secondary={"Aqui puedes descargar mi CV y ver más información."}
            />
          </ListItem>
        </List>
      </Grid>
    </Box>
  );
};

export default Documents;
