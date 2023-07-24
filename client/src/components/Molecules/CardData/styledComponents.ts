import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(() => ({
  width: "50%",
  height: "200px",
  display: "grid",
  placeContent: "center",
  gap: "0px",
}));

export const Text = styled(Typography)(() => ({
  textAlign: "center",
  fontSize: "70px",
  fontWeigth: 800,
}));

export const Helper = styled(Typography)(() => ({
  fontSize: "45px",
  textAlign: "center",
  textDecoration: "underline",
}));
