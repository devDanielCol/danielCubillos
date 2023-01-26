import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";

const CallToActionBtn = () => {
  const { push } = useRouter();

  const handleServices = () => {
    void push("/#services");
  };

  return (
    <Button
      variant="text"
      component="a"
      onClick={handleServices}
      sx={{
        px: 1,
        py: 0.5,
        ml: 2,
        color: "inherit",
        borderColor: "custom.callaction",
        borderRadius: 2,
      }}
    >
      <Typography
        sx={{
          fontWeight: 500,
          alignItems: "center",
          transition: "all .2s linear",
          lineHeight: 1,
          color: "inherit",
        }}
        component="span"
      >
        Servicios
      </Typography>
    </Button>
  );
};

export default CallToActionBtn;
