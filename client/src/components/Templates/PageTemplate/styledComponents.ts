import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: `${theme.custom.header.height} 25px`,
  display: "flex",
  gap: theme.custom.header.height,
  flexDirection: "column",
  alignItems: "center",
}));
