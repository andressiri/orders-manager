import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "500px",
  border: `3px solid ${theme.palette.secondary.contrastText}`,
  borderRadius: theme.custom.radius.medium,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}));

export const Title = styled(Typography)(() => ({
  width: "100%",
  height: "100px",
  display: "grid",
  placeContent: "center",
  fontWeight: 800,
  fontSize: "40px",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  minWidth: "100%",
  height: "400px",
  minHeight: "400px",
  padding: "30px",
  objectFit: "contain",
  borderBottom: `3px solid ${theme.palette.secondary.contrastText}`,
  borderTop: `3px solid ${theme.palette.secondary.contrastText}`,
}));

export const ButtonContainer = styled(Box)(() => ({
  width: "100%",
  padding: "50px",
  display: "grid",
  placeContent: "center",
}));
