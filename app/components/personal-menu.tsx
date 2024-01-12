"use client";
import { useState, MouseEvent, CSSProperties } from "react";
import { Box, Button, Menu, MenuItem } from "@mui/material";

export default function PersonalMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleNav = (pathname: string) => {
    if (window.location.pathname !== pathname) {
      window.location.href = pathname;
    } else {
      handleClose();
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemStyle: CSSProperties = {
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
        <MenuItem style={menuItemStyle} onClick={() => handleNav("/clobs")}>
          clobs
        </MenuItem>
        <MenuItem style={menuItemStyle} onClick={() => handleNav("/journal")}>
          journal
        </MenuItem>
        <MenuItem style={menuItemStyle} onClick={() => handleNav("/poems")}>
          poems
        </MenuItem>
      </Menu>
    </Box>
  );
}
