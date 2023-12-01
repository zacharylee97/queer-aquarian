import { Tab, styled } from "@mui/material";

interface StyledTabProps {
  label: string;
}

export const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(() => ({
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));
