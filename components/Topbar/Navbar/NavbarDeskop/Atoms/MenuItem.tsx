import {
  Tooltip,
  tooltipClasses,
  TooltipProps,
  Typography,
  Box,
  SxProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "@emotion/styled";
import { FC, ReactElement, useState } from "react";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "transparent",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "100%",
    padding: 0,
    margin: 0,
  },
}));

interface MenuItemProps {
  name: string;
  element?: ReactElement;
  open?: boolean;
  sx?: SxProps;
}

const MenuItem: FC<MenuItemProps> = ({
  name,
  element,
  open: defaultOpen,
  sx,
  ...restprops
}) => {
  const [open, setOpen] = useState<boolean>(defaultOpen as boolean);

  if (element) {
    return (
      <LightTooltip
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        title={element}
        {...restprops}
      >
        <Box
          sx={{
            display: "flex",
            ml: 2,
            alignItems: "center",
            color: "custom.navbartext",
          }}
        >
          <Typography
            sx={{
              fontWeight: 500,
              alignItems: "center",
              transition: "all .2s linear",
              lineHeight: 1,
              color: "inherit",
              ...sx,
            }}
            component="span"
          >
            {name}
          </Typography>
          <ExpandMoreIcon
            className="icon__expand-more"
            sx={{
              opacity: open ? "100%" : "0%",
              transition: "all .2s linear",
              transform: open ? "translateY(3px)" : "translateY(0px)",
              color: "custom.navbartext",
            }}
          />
        </Box>
      </LightTooltip>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          ml: 2,
          alignItems: "center",
          color: "custom.navbartext",
        }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            alignItems: "center",
            transition: "all .2s linear",
            lineHeight: 1,
            color: "inherit",
            ...sx,
          }}
          component="span"
        >
          {name}
        </Typography>
      </Box>
    );
  }
};

export default MenuItem;
