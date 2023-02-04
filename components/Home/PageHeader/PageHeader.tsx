import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { InView } from "react-intersection-observer";
import GradientText from "../../Global/GradientText/GradientText";

const BannerPrincipal: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(160deg,#002853,#0d233c 30%,#061225 50%,#07152a 80%,#040c18)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: "1rem", sm: "2rem", md: "4rem" },
        pt: { xs: "6rem", lg: "8rem" },
        pb: 3,
      }}
    >
      <Grid
        container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          sm={12}
          md={7}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            color: "#81AFDD",
          }}
        >
          <InView
            onChange={(inView) => {
              setInview(inView);
            }}
            threshold={1}
            delay={200}
          >
            <Box sx={{ opacity: inview ? 1 : 0, transition: "all .4s linear" }}>
              <GradientText
                fontSize={{ xs: "2.3rem", sm: "4.5rem", md: "4.5rem" }}
                gradient="linear-gradient(355deg, #AE67FA 1.84%, #F49867 102.67%)"
                sx={{
                  letterSpacing: "-2px",
                }}
              >
                Software de alto nivel con Tecnologías de ultima Generación
              </GradientText>
            </Box>
          </InView>

          <Typography
            sx={{
              maxWidth: { xs: "100%", lg: "65%" },
              my: { xs: 2, md: 4 },
              fontSize: { xs: "0.9rem", md: "1rem" },
            }}
          >
            Sistemas escalables, optimos, seguros y con las ultimas
            integraciones en tecnología. No me preguntes si puedo hacer algo,
            mejor dime cuando empezamos
          </Typography>
          <FormControl
            sx={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <Input
              placeholder="Correo Electrónico"
              sx={{
                color: "#3D6184",
                py: { xs: "0.5rem", lg: "1.3rem" },
                px: { xs: 2, lg: 4 },
                backgroundColor: "#052D56",
                width: { xs: "70%", lg: "60%" },
                "& ::placeholder": {
                  color: "#3D6184",
                  opacity: "100%",
                },
              }}
            />

            <Button
              sx={{
                backgroundColor: "#FF4820",
                color: "white",
                width: { xs: "30%", lg: "20%" },
                "&:hover": {
                  backgroundColor: "#FF4820",
                  color: "white",
                },
              }}
            >
              Empezar
            </Button>
          </FormControl>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              alignItems: "center",
              mt: 4,
            }}
          >
            <AvatarGroup>
              {[1, 2, 3, 4].map((_, i) => (
                <Avatar
                  key={i}
                  alt="Remy Sharp"
                  sx={{ width: "30px", height: "30px" }}
                  src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg"
                />
              ))}
            </AvatarGroup>
            <Typography
              sx={{
                color: "white",
                ml: 3,
                fontSize: { xs: "0.8rem", lg: "1rem" },
              }}
            >
              más de 160 consultas mensuales de clientes
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={0} md={5} height="100%">
          <Box
            sx={{
              width: "100%",
              backgroundImage: "url(./image/header.png)",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BannerPrincipal;
