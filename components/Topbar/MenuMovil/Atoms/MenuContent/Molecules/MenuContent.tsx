import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import useTheme from "../../../../../../util/hooks/useTheme";
import ChangeSlide from "../../ChangeSlide";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import Technologies from "../Atoms/Technologies";
import Projects from "../Atoms/Projects";
import Documents from "../Atoms/Documents";

interface MenuContentProps {
  active: number;
  onClose?(): void;
}

const View: FC<{ view: number }> = ({ view }) => {
  if (view === 1) {
    return <Technologies />;
  } else if (view === 2) {
    return <Projects />;
  } else {
    return <Documents />;
  }
};

const MenuContent: FC<MenuContentProps> = ({ active, onClose }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "85vh",
        borderRadius: "8px",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 2,
          borderBottom: "dashed 2px #81AFDD30",
        }}
      >
        <ChangeSlide back>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#81AFDD",
            }}
          >
            <KeyboardArrowLeftIcon color="inherit" />
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: 700,
                color: "inherit",
              }}
            >
              Atras
            </Typography>
          </Box>
        </ChangeSlide>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        <View view={active} />
      </Box>
    </Box>
  );
};

export default MenuContent;
