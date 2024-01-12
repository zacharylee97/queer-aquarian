"use client";
import { useState, MouseEvent, CSSProperties } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";

export default function PersonalMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const linkStyle: CSSProperties = {
    margin: "0 2rem",
    textTransform: "uppercase",
  };

  return (
    <Box
      sx={{
        display: "flex",
        lineHeight: "1.75rem",
        margin: "2rem",
      }}
    >
      <Button
        sx={{ color: "white", fontSize: "1.25rem" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        personal
      </Button>
      <Menu
        id="basic-menu"
        sx={{ padding: "0" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <Link href="/clobs" style={linkStyle}>
            clobs
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/journal" style={linkStyle}>
            journal
          </Link>
        </MenuItem>
      </Menu>
    </Box>
  );
}
