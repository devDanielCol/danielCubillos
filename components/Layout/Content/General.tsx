import { IconButton } from "@mui/material";
import { FC, ReactNode } from "react";
import NavbarDeskop from "../../Navbar/NavbarDeskop/Molecules/NabvarDeskop";
import BodyDocument from "../Body";
import FooterDocument from "../Footer";
import HeadDocument from "../Head";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";

interface IContentProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Content: FC<IContentProps> = ({ children, title, description }) => {
  return (
    <>
      <HeadDocument title={title} description={description} />
      <BodyDocument>
        <>
          <NavbarDeskop />

          <>{children}</>
          <FooterDocument />

          <IconButton
            href="/#"
            sx={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: 1000,
              backgroundColor: "#00000020",
            }}
          >
            <KeyboardDoubleArrowUpRoundedIcon />
          </IconButton>
        </>
      </BodyDocument>
    </>
  );
};

export default Content;
