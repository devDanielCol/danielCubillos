import styled from "@emotion/styled";
import { Badge, Theme, Avatar, SxProps } from "@mui/material";
import { FC } from "react";

const StyledBadge = styled(Badge)(({ theme }: { theme?: Theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme ? theme.palette.background.paper : ""}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

interface AdminAvatarProps {
  sxAvatar?: SxProps;
  sxBadge?: SxProps;
}

const AdminAvatar: FC<AdminAvatarProps> = ({ sxAvatar, sxBadge }) => {
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      sx={sxBadge}
    >
      <Avatar
        sx={sxAvatar}
        alt="Daniel Cubillos"
        src="/static/images/avatar/1.jpg"
      />
    </StyledBadge>
  );
};

export default AdminAvatar;
