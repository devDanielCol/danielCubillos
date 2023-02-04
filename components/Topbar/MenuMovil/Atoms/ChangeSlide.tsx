import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { useSwiper } from "swiper/react";

interface ButtonSlideProps {
  back?: boolean;
  children: ReactNode;
  onClick?(): void;
}

const ChangeSlide: FC<ButtonSlideProps> = ({ back, children, onClick }) => {
  const swiper = useSwiper();

  return (
    <Box
      onClick={() => {
        swiper.slideTo(back ? 0 : 1);
        onClick && void onClick();
      }}
    >
      {children}
    </Box>
  );
};

export default ChangeSlide;
