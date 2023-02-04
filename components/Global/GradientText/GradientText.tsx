import * as React from "react";
import { styled, SxProps } from "@mui/system";
import { FC } from "react";
import gradients from "../../../styles/colors/gradients";

type textAlign = "center" | "left" | "right" | "inherit";
interface IProps {
  fontSize: number | string | string[] | number[] | object;
  fontWeight?: "bolder" | number;
  letterSpacing?: string | number | object;
  legend?: string;
  gradient?: string;
  textAlign?: textAlign | object;
  children?: string;
  sx?: SxProps;
}

const GradientText: FC<IProps> = ({
  fontSize,
  legend,
  letterSpacing,
  fontWeight,
  gradient,
  children,
  textAlign,
  sx,
}) => {
  const Title = styled("span")({
    backgroundClip: "text",
    color: "transparent",
    backgroundImage: gradient || gradients.orangeYellow,
    fontWeight: fontWeight || 800,
    zIndex: 1,
    boxSizing: "border-box",
    padding: 0,
    m: 0,
    lineHeight: 1,
  });

  return (
    <Title sx={{ fontSize: fontSize, textAlign, letterSpacing, ...sx }}>
      {legend || children}
    </Title>
  );
};

export default GradientText;
