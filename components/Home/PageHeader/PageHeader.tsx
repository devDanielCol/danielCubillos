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
import GradientText from "../../GradientText/GradientText";

const BannerPrincipal: FC = () => {
  const [inview, setInview] = useState<boolean>(false);

  return (
    <Box
      sx={{
        minHeight: { xs: "70vh", md: "100vh" },
        overflow: "hidden",
        backgroundImage:
          "linear-gradient(160deg,#002853,#0d233c 30%,#061225 50%,#07152a 80%,#040c18)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: "4rem",
        pt: "4rem",
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
          xs={7}
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
                fontSize={"4.5rem"}
                gradient="linear-gradient(355deg, #AE67FA 1.84%, #F49867 102.67%)"
                sx={{
                  letterSpacing: "-2px",
                  wordSpacing: "-7px",
                }}
              >
                Let’s Build Something amazing with GPT-3 OpenAI
              </GradientText>
            </Box>
          </InView>

          <Typography sx={{ maxWidth: "65%", my: 4 }}>
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </Typography>
          <FormControl
            sx={{ width: "100%", display: "flex", flexDirection: "row" }}
          >
            <Input
              placeholder="Your Email Address"
              sx={{
                color: "#3D6184",
                py: "1.3rem",
                px: 4,
                backgroundColor: "#052D56",
                width: "60%",
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
                width: "20%",
                "&:hover": {
                  backgroundColor: "#FF4820",
                  color: "white",
                },
              }}
            >
              Get Started
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
              {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
                <Avatar
                  key={i}
                  alt="Remy Sharp"
                  src="https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_1280.jpg"
                />
              ))}
            </AvatarGroup>
            <Typography sx={{ color: "white", ml: 3 }}>
              1,600 people requested access a visit in last 24 hours
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={5} height="100%">
          <Box
            sx={{
              width: "100%",
              height: "70vh",
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
