import * as React from "react";
import { Typography, Box, Link, IconButton } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState, FC } from "react";

interface ContactOptProps {
  open?: boolean;
  title: string;
  description: string;
  linkTo?: string;
}

const ContactOpt: FC<ContactOptProps> = ({
  open: defaultOpen,
  title,
  description,
  linkTo,
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

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
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 2,
                fontWeight: 700,
                zIndex: 2,
                opacity: open ? "100%" : "80%",
                color: "text.primary",
                transition: "all .2s linear",
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.8rem",
                lineHeight: 1.1,
                opacity: open ? "100%" : "60%",
                color: "text.primary",
                transition: "all .2s linear",
              }}
            >
              {description}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              transition: "all .2s linear",
              zIndex: 0,
              transform: open ? "translateX(0%)" : "translateX(-100%)",
              opacity: open ? "100%" : "0%",
            }}
          >
            <IconButton sx={{ opacity: open ? "100%" : "0%" }}>
              <KeyboardArrowRightIcon sx={{ width: "1rem", height: "1rem" }} />
            </IconButton>
          </Box>
        </Box>
      </Link>
    </>
  );
};

export default ContactOpt;
