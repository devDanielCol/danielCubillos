import { Button, SxProps, Typography } from "@mui/material";
import { useState } from "react";
import CenterMenu from "../../Topbar/MenuMovil/Molecules/CenterMenu";

interface IHmwButtonProps {
  sx?: SxProps;
  bgColor?: string;
}

const HmwButton = ({ sx, bgColor }: IHmwButtonProps) => {
  const [opent, setOpen] = useState<boolean>(false);
  const open = false;

  const openMenu = () => {
    setOpen(!opent);
  };

  return (
    <>
      <Button
        onClick={openMenu}
        sx={{
          display: "flex",
          p: 1,
          minWidth: "auto",
          flexDirection: "column",
          ...sx,
        }}
      >
        <Typography
          component="div"
          sx={{
            width: { xs: "25px", sm: "30px" },
            height: "1.5px",
            backgroundColor: bgColor,
            transform: open
              ? "rotate(-45deg) translateX(-1px) translateY(7px)"
              : "",
            transition: "all .2s linear",
          }}
        />
        <Typography
          component="div"
          sx={{
            width: { xs: "25px", sm: "30px" },
            mt: 0.5,
            height: "1.5px",
            opacity: open ? "0%" : "100%",
            backgroundColor: bgColor,
            transition: "all .2s linear",
          }}
        />
        <Typography
          component="div"
          sx={{
            width: { xs: "25px", sm: "30px" },
            mt: 0.5,
            height: "1.5px",
            backgroundColor: bgColor,
            transform: open
              ? "rotate(45deg) translateX(-1px) translateY(-7px)"
              : "",
            transition: "all .2s linear",
          }}
        />
      </Button>
      <CenterMenu open={opent} onClose={openMenu} />
    </>
  );
};

export default HmwButton;
