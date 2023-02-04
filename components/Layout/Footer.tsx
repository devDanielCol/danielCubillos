import * as React from "react";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { SxProps } from "@mui/material/styles";
import Link from "@mui/material/Link";

interface IProps {
  sx?: SxProps;
}

function Copyright(props: IProps) {
  return (
    <Typography variant="body2" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="#">
        Construcciones y acabados peniel SAS
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "normal",
        backgroundColor: "#040C18",
        color: "white",
      }}
      component="footer"
    >
      <Container sx={{ minHeight: "10rem", p: 3 }}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Links</Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Overons
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Social Medial
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Counters
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Box component={"ul"} sx={{ p: 0 }}>
              <Typography sx={{ fontWeight: 700 }}>Company</Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Terms & conditions
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Privacy Policy
              </Typography>
              <Typography
                component={"li"}
                sx={{ listStyle: "none", mt: 2, fontSize: "0.9rem" }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider sx={{ width: "100%", backgroundColor: "white" }} />
      <Copyright />
    </Box>
  );
};

export default Footer;
