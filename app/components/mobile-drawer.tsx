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
          marginTop: "7rem",
        },
      }}
      anchor="left"
      open={open}
      onClose={() => setDrawerState(false)}
    >
      <Box>
        <Link
          href="/"
          className="flex items-center m-10 text-xl uppercase"
        >
          home
        </Link>
        <Link
          href="/clobs"
          className="flex items-center m-10 text-xl uppercase"
        >
          clobs
        </Link>
      </Box>
    </Drawer>
  );
}