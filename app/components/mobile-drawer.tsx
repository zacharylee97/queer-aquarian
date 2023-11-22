import { Box, Divider, Drawer, Link, Typography } from "@mui/material";
import React from "react";
import { MenuItems } from "../interfaces/menu-items";
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
        <Link href="/contact-us" className="flex items-center m-5 uppercase">
          Contact Us
        </Link>
      </Box>
    </Drawer>
  );
}