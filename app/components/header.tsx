"use client";
import { Box, AppBar, Toolbar, IconButton } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./mobile-drawer";

export default function Header() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 900,
        lg: 1290,
        xl: 1536,
      },
    },
  });

  const lunaStyle = {
    borderRadius: "50%",
  };

  const [drawerState, setDrawerState] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: { xs: "5rem", sm: "6.5rem" } }}>
        <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
          <Toolbar disableGutters sx={{ display: "flex" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: { md: "flex", lg: "none" } }}>
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
              <Box className="my-3 ml-3">
                <a href="https://www.instagram.com/queer_aquarian">
                  <Image
                    src="/luna.webp"
                    alt="Luna"
                    width={80}
                    height={80}
                    style={lunaStyle}
                  />
                </a>
              </Box>
              <Box className="flex flex-col mx-3">
                <Link href="/">
                  <Image src="/logo.webp" alt="Logo" width={350} height={100} />
                </Link>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "none", lg: "flex" } }}>
              <Link href="/" className="header-link">
                home
              </Link>
              <Link href="/horoscope" className="header-link">
                horoscope
              </Link>
              <Link href="/food-and-travel" className="header-link">
                food & travel
              </Link>
              <Link href="/journal" className="header-link">
                journal
              </Link>
              <Link href="/clobs" className="header-link">
                clobs
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
