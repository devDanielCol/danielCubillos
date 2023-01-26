import {
  AppBar,
  Toolbar,
  Box,
  useScrollTrigger,
  Button,
  Typography,
} from "@mui/material";
import MenuToolpit from "../Atoms/MenuToolpit/MenuToolpit";
import ThemeButton from "../../../ThemeCtrl/ThemeBtn/ThemeBtn";
import Pages from "../../../MenuContent/PagesList/Molecules/PagesList";
import useTheme from "../../../../util/hooks/useTheme";

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
          // backdropFilter: trigger ? "blur(15px)" : "blur(0px)",
          backgroundColor: trigger ? "custom.navbar" : "transparent",
          backgroundImage: "none",
          display: {
            xs: "none",
            lg: "block",
          },
          borderBottomColor: trigger ? "#4e317e50" : "transparent",
          py: trigger ? 1 : 5,
          px: trigger ? 1 : 6,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: trigger ? theme.palette.custom.text : "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              color: trigger ? theme.palette.custom.text : "white",
            }}
          >
            <Typography sx={{ mr: 3, fontWeight: 900 }}>GPT-3</Typography>
            <MenuToolpit name="Home" element={<Pages />} />
            <MenuToolpit name="What is GPT?" element={<Pages />} />
            <MenuToolpit name="Open AI" element={<Pages />} />
            <MenuToolpit name="Case Studies" element={<Pages />} />
            <MenuToolpit name="Library" element={<Pages />} />
          </Box>
          <Box>
            <Button variant="text" sx={{ color: "inherit" }}>
              Sign in
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "inherit",
                ml: 2,
                px: 3,
                py: 1.2,
                backgroundColor: "#FF4820",
              }}
            >
              Sign up
            </Button>
            <ThemeButton sx={{ ml: 2, color: "inherit" }} />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavbarDeskop;
