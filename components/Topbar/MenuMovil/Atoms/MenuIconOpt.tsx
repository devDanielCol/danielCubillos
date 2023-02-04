import * as React from "react";
import { Typography, Box, Link, IconButton, SxProps } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import { useState, FC } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

interface MenuIconOptProps {
  open?: boolean;
  title: string;
  description: string;
  icon?: React.ReactElement;
  linkTo?: string;
  sx?: SxProps;
}

const MenuIconOpt: FC<MenuIconOptProps> = ({
  open: defaultOpen,
  title,
  description,
  linkTo,
  icon,
  sx,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  const defaultColor = "text.primary";
  const colorActive = "#7f87ff";

  return (
    <>
      <Link href={linkTo} sx={{ textDecoration: "none" }}>
        <Box
          onMouseOver={() => {
            setOpen(true);
          }}
          onMouseOut={() => {
            setOpen(false);
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mb: 3,
            ...sx,
          }}
        >
          {icon}
          <Box
            sx={{
              ml: 2,
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  lineHeight: 2,
                  fontWeight: 700,
                  zIndex: 2,
                  color: open ? colorActive : defaultColor,
                  display: "flex",
                }}
              >
                {title}
              </Typography>
              <Box
                sx={{
                  backgroundColor: "gold",
                  fontSize: "0.5rem",
                  height: "fit-content",
                  borderRadius: "4px",
                  px: "5px",
                  color: "black",
                  ml: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <StarRateIcon sx={{ width: "10px", height: "10px" }} />
                Destacado
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                lineHeight: 1.1,
                color: open ? colorActive : defaultColor,
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: 1,
              transition: "all .2s linear",
              zIndex: 0,
              transform: open ? "translateX(0%)" : "translateX(-100%)",
              opacity: open ? "100%" : "0%",
              // color: open ? colorActive : defaultColor,
            }}
          >
            <IconButton sx={{ color: open ? colorActive : defaultColor }}>
              <LaunchIcon sx={{ width: "1rem" }} />
            </IconButton>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default MenuIconOpt;
