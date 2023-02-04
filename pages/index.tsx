import PageHeader from "../components/Home/PageHeader/PageHeader";
import MainLayout from "../components/Layout/Main";

export default function Home() {
  return (
    <MainLayout title="Inicio">
      <PageHeader />
      {/* <Box
        sx={{
          backgroundImage:
            "linear-gradient(20deg,#0b1016,#111b26 30%,#061225 50%,#07152a 80%,#040c18)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Image
              src={"/image/google.png"}
              width={60}
              height={20}
              alt="google"
              style={{ margin: 10 }}
            />
            <Image
              src={"/image/slack.png"}
              width={80}
              height={20}
              alt="google"
              style={{ margin: 10 }}
            />{" "}
            <Image
              src={"/image/atlassian.png"}
              width={90}
              height={20}
              alt="google"
              style={{ margin: 10 }}
            />{" "}
            <Image
              src={"/image/dropbox.png"}
              width={90}
              height={20}
              alt="google"
              style={{ margin: 10 }}
            />
            <Image
              src={"/image/shopify.png"}
              width={80}
              height={20}
              alt="google"
              style={{ margin: 10 }}
            />
          </Box>
        </Container>
        <Box sx={{ mx: "4rem" }}>
          <Box
            sx={{
              mt: "5rem",
              minHeight: "100vh",
              backgroundImage:
                "linear-gradient(147deg,#1b78de73,#0f427954 30%,#0f42798f 70%,#1b78deab)",
              p: "4rem",
            }}
          >
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  sx={{ fontWeight: "900", fontSize: "1.5rem", color: "white" }}
                >
                  What is GPT-3
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: "#81AFDD" }}>
                  We so opinion friends me message as delight. Whole front do of
                  plate heard oh ought. His defective nor convinced residence
                  own. Connection has put impossible own apartments boisterous.
                  At jointure ladyship an insisted so humanity he. Friendly
                  bachelor entrance to on by.
                </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                my: "6rem",
              }}
            >
              <Box sx={{ maxWidth: "60%" }}>
                <GradientText
                  fontSize={"3.5rem"}
                  gradient={
                    "linear-gradient(355deg, #AE67FA -13.86%, #F49867 99.55%)"
                  }
                  sx={{ letterSpacing: "-2px", wordSpacing: "-2px" }}
                >
                  The possibilities are beyond your imagination
                </GradientText>
              </Box>
              <Typography sx={{ color: "#FF8A71" }}>
                Explore The Library
              </Typography>
            </Box>
            <Box>
              <Grid container>
                <Grid item xs={4} sx={{ mt: 3 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "900",
                        fontSize: "1.5rem",
                        color: "white",
                        mb: 4,
                      }}
                    >
                      What is GPT-3
                    </Typography>
                    <Typography sx={{ color: "#81AFDD", fontSize: "0.9rem" }}>
                      We so opinion friends me message as delight. Whole front
                      do of plate heard oh ought.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4} sx={{ mt: 3 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "900",
                        fontSize: "1.5rem",
                        color: "white",
                        mb: 4,
                      }}
                    >
                      Knowledgebase
                    </Typography>
                    <Typography sx={{ color: "#81AFDD", fontSize: "0.9rem" }}>
                      At jointure ladyship an insisted so humanity he. Friendly
                      bachelor entrance to on by. As put impossible own
                      apartments b
                    </Typography>
                  </Box>
                </Grid>{" "}
                <Grid item xs={4} sx={{ mt: 3 }}>
                  <Box sx={{ p: 2 }}>
                    <Typography
                      sx={{
                        fontWeight: "900",
                        fontSize: "1.5rem",
                        color: "white",
                        mb: 4,
                      }}
                    >
                      Education
                    </Typography>
                    <Typography sx={{ color: "#81AFDD", fontSize: "0.9rem" }}>
                      At jointure ladyship an insisted so humanity he. Friendly
                      bachelor entrance to on by. As put impossible own
                      apartments b
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box> */}
    </MainLayout>
  );
}
