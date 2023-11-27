import { Box, Button, Divider, Menu } from "@mui/material";
import { DropdownProps } from "../interfaces/dropdown-props";
import Link from "next/link";
import { useState } from "react";

export default function Dropdown({ title, menuItems }: DropdownProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="flex m-5">
      <Button
        id={title}
        className="text-white text-xl"
        aria-controls={open ? title : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleButtonClick}
      >
        {title}
      </Button>
      <Menu
        id={title}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": title,
        }}
      >
        <Divider></Divider>
        {menuItems.map((item) => (
          <Box key={item.title} className="hover:bg-gray-100">
            <Link className="m-5" href={item.link}>
              {item.title}
            </Link>
            <Divider></Divider>
          </Box>
        ))}
      </Menu>
    </Box>
  );
}