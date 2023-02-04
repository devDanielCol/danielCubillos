import { AppBar, Toolbar, Box, useScrollTrigger, Button } from "@mui/material";
import useTheme from "../../../../../util/hooks/useTheme";
import AdminAvatar from "../../../../Global/AdminAvatar/AdminAvatar";
import HmwButton from "../../../../Global/HmwButton/HmwButton";
import ThemeButton from "../../../../ThemeCtrl/ThemeBtn/ThemeBtn";
import MenuItem from "../Atoms/MenuItem";

interface NavbarDeskopProps {
  window?: () => Window;
}

const NavbarDeskop = (props: NavbarDeskopProps) => {
  const { window } = props;
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return (
    <>
      <AppBar
        sx={{
          boxShadow: 0,
          transition: "all .2s linear",
          backgroundColor: trigger ? "custom.navbar" : "transparent",
          backgroundImage: "none",
          borderBottomColor: trigger ? "#4e317e50" : "transparent",
          py: { xs: trigger ? 0 : 2, lg: trigger ? 1 : 5 },
          px: { xs: trigger ? 0.5 : 2, lg: trigger ? 1 : 6 },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", lg: "normal" },
            px: 0,
          }}
        >
          <HmwButton
            bgColor={trigger ? "text.primary" : "white"}
            sx={{
              display: { xs: "flex", lg: "none" },
            }}
          />
          <AdminAvatar
            sxAvatar={{
              display: { xs: "none", lg: "flex" },
            }}
            sxBadge={{
              display: { xs: "none", lg: "flex" },
            }}
          />
          <Box
            sx={{
              width: { xs: "fit-content", lg: "100%" },
              display: "flex",
              justifyContent: "space-between",
              color: trigger ? theme.palette.custom.text : "white",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", lg: "flex" },
                justifyContent: "flex-end",
                color: trigger ? theme.palette.custom.text : "white",
              }}
            >
              <MenuItem name="Inicio" sx={{ mr: 1 }} />
              <MenuItem name="Desarrollo" sx={{ mr: 1 }} />
              <MenuItem name="Proyectos" sx={{ mr: 1 }} />
              <MenuItem name="Documentos" sx={{ mr: 1 }} />
              <MenuItem name="Información" sx={{ mr: 1 }} />
            </Box>
            <Box>
              <Button
                variant="text"
                sx={{
                  color: "inherit",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                }}
              >
                Ingresar
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "inherit",
                  mx: { xs: 1, md: 2 },
                  px: { xs: 1.2, md: 3 },
                  py: { xs: 0.5, md: 1 },
                  backgroundColor: "#FF4820",
                  fontSize: { xs: "0.75rem", sm: "0.85rem", md: "1rem" },
                }}
              >
                Registrarse
              </Button>
              <ThemeButton sx={{ color: "inherit" }} />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarDeskop;
