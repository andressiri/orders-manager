import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  paddingTop: theme.custom.buttons.height,
  display: "flex",
  gap: theme.custom.buttons.height,
  flexDirection: "column",
  alignItems: "center",
}));
