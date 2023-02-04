import { Box, IconButton, Snackbar, Typography } from "@mui/material";
import { FC, useState } from "react";
import useTheme from "../../../../util/hooks/useTheme";
import CloseIcon from "@mui/icons-material/Close";
import ContactOpt from "../Atoms/MenuOpt";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectCreative } from "swiper";
import ChangeSlide from "../Atoms/ChangeSlide";
import MenuContent from "../Atoms/MenuContent/Molecules/MenuContent";

interface CenterMenuProps {
  open?: boolean;
  onClose?(): void;
}

const CenterMenu: FC<CenterMenuProps> = ({ open, onClose }) => {
  const theme = useTheme();
  const [active, setActive] = useState<number>(0);
  const changeSlide = (to: number) => () => setActive(to);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      onClose={onClose}
    >
      <Box
        sx={{
          width: { xs: "98%", sm: "350px" },
          height: "85vh",
          backgroundColor: theme.palette.background.default,
          borderRadius: "8px",
          ml: 0.5,
        }}
      >
        <Swiper
          className="mySwiper"
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
        >
          <SwiperSlide>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#81AFDD",
                  }}
                >
                  Daniel Developer
                </Typography>
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  mt: 1,
                  p: 2,
                  borderBottom: "dashed 2px #81AFDD30",
                }}
              >
                <Typography>Contenido</Typography>
              </Box>
              <ChangeSlide onClick={changeSlide(1)}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                  }}
                >
                  <ContactOpt
                    description="Conoce mi stack de desarrollo y valora mis algo conocimientos"
                    title="Tecnologías"
                  />
                </Box>
              </ChangeSlide>
              <ChangeSlide onClick={changeSlide(2)}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                  }}
                >
                  <ContactOpt
                    title="Proyectos"
                    description="Conoce mas de cerca algunos proyectos en los que he trabajado"
                  />
                </Box>
              </ChangeSlide>
              <ChangeSlide onClick={changeSlide(3)}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                  }}
                >
                  <ContactOpt
                    title="Documentos"
                    description="Descarge, interactua y lee documentos de desarrollo"
                  />
                </Box>
              </ChangeSlide>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <MenuContent active={active} onClose={onClose} />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Snackbar>
  );
};

export default CenterMenu;
