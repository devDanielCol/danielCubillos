import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ContactOpt from "../../MenuOpt";

const Technologies = () => {
  return (
    <Box>
      <Box sx={{ p: 3 }}>
        <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: 1,
            opacity: 0.7,
          }}
        >
          Tecnologías
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <ContactOpt
            title="TypeScript"
            description="Apps de frontend y backend con diferentes frameworks"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <ContactOpt
            title="Python"
            description="Servidores, apps web con dijango y otros desarrollos con python."
          />
        </Box>{" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <ContactOpt
            title="Node"
            description="Servidores, apps web con express y otras tecnologías para el backend."
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: 2,
          }}
        >
          <ContactOpt
            title="Php"
            description="Desarrollos con laravel, apps con blade, apis e integraciones con vue y otros frameworks"
          />
        </Box>
      </Box>
      <Box sx={{ px: 2, mt: 4 }}>
        <Typography
          sx={{ fontSize: "0.8rem", mt: 1, lineHeight: "1.2", opacity: "0.85" }}
        >
          Conoce mejor la lista completa de tecnologías
        </Typography>
        <Link href={"/tecnologias"} style={{ color: "inherit" }}>
          <Typography sx={{ fontSize: "1rem", mt: 1, lineHeight: "1.2" }}>
            Ver todas las tecnologías
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Technologies;
