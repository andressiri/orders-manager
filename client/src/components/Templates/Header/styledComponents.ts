import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export const Container = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "0px",
  left: "0px",
  width: "100vw",
  height: theme.custom.header.height,
  padding: "0px 20px 0px 50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,

  "@media (max-width: 768px)": {
    height: theme.custom.header.smallHeight,
    padding: "0px 15px",
    justifyContent: "space-between",
  },
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.contrastText,
  fontSize: "40px",
  fontWeight: 800,
  letterSpacing: "-10px",

  "& svg": {
    height: "70px",
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "@media (max-width: 400px)": {
    fontSize: "0px",
  },
}));
