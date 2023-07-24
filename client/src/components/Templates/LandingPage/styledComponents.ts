import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const InnerContainer = styled(Box)(() => ({
  width: "1200px",
  maxWidth: "calc(100% - 50px)",
  display: "flex",
  gap: "100px",
  justifyContent: "center",
  flexWrap: "wrap",
}));
