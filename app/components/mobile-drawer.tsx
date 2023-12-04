import { Box, Drawer, Link } from "@mui/material";
import React from "react";
import { MobileMenuProps } from "../interfaces/mobile-menu-props";

export default function MobileDrawer({
  open,
  setDrawerState,
}: MobileMenuProps) {
  return (
    <Drawer
      sx={{
        [`& .MuiDrawer-paper`]: {
          backgroundColor: "black",
          marginTop: "7rem",
        },
      }}
      anchor="left"
      open={open}
      onClose={() => setDrawerState(false)}
    >
      <Box>
        <Link href="/" className="mobile-link">
          home
        </Link>
        <Link href="/clobs" className="mobile-link">
          clobs
        </Link>
        <Link href="/food-and-travel" className="mobile-link">
          food & travel
        </Link>
      </Box>
    </Drawer>
  );
}
