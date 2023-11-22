"use client";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MenuItems } from "../interfaces/menu-items";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./mobile-drawer";
import Dropdown from "./dropdown";

const companyName = "Queer Aquarian";

export default function Header() {
  const theme = useTheme();

  const [drawerState, setDrawerState] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ m: 2 }}
              onClick={() => setDrawerState(!drawerState)}
            >
              <MenuIcon />
            </IconButton>
            <MobileDrawer
              open={drawerState}
              setDrawerState={setDrawerState}
            ></MobileDrawer>
          </Box>
          <Image
            className="m-5"
            src="/next.svg"
            alt="next"
            width={80}
            height={80}
          />
          <Box className="flex flex-col mx-3">
            <Link href="/">
              <Typography variant="h5" textAlign="center">
                {companyName}
              </Typography>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}