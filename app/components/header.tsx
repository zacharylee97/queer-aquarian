"use client";
import { Box, AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MobileDrawer from "./mobile-drawer";

const companyName = "Queer Aquarian";

export default function Header() {
  const theme = useTheme();
  const logoStyle = {
    borderRadius: "50%",
  };

  const [drawerState, setDrawerState] = useState(false);

  return (
    <Box>
      <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
        <Toolbar
          disableGutters
          sx={{ display: "flex" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
            </Box> */}
            <Image
              className="m-5"
              src="/luna.jpeg"
              alt="Luna"
              width={80}
              height={80}
              style={logoStyle}
            />
            <Box className="flex flex-col mx-3">
              <Link href="/">
                <Typography variant="h4" textAlign="center">
                  {companyName}
                </Typography>
              </Link>
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
