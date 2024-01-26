import { Card, CardContent } from "@mui/material";

import { styled } from "@mui/material/styles";

export const ContentContainer = styled(CardContent)(() => ({
  position: "absolute",
  zIndex: 1,
  bottom: 0,
  background: "#fff",
  width: "100%",
  opacity: 0,
  transform: "translateY(100px)",
  transition: "all 0.5s ease-in-out",
}));

export const CardStyle = styled(Card)({
  height: "450px",
  position: "relative",
  "&:hover .MuiCardContent-root": {
    opacity: 1,
    transform: "translateY(0)",
  },
});
