import { Box, Divider, Drawer, Link, Typography } from "@mui/material";
import React from "react";
import { MenuItems } from "../interfaces/menu-items";
import { MobileMenuProps } from "../interfaces/mobile-menu-props";

const designAndEngineeringMenuItems: MenuItems[] = [
  {
    title: "Architectural",
    link: "/design-and-engineering/architectural",
  },
  {
    title: "Structural",
    link: "/design-and-engineering/structural",
  },
  {
    title: "Mechanical",
    link: "/design-and-engineering/mechanical",
  },
  {
    title: "Electrical",
    link: "/design-and-engineering/electrical",
  },
];
const projectManagementMenuItems: MenuItems[] = [
  {
    title: "Commercial",
    link: "/project-management/commercial",
  },
  {
    title: "Tenant Improvement",
    link: "/project-management/tenant-improvement",
  },
  {
    title: "Industrial",
    link: "/project-management/industrial",
  },
  {
    title: "Residential",
    link: "/project-management/residential",
  },
];

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
      <Typography className="m-3" variant="h5" textAlign="center">
        Design & Engineering
      </Typography>
      <Divider></Divider>
      <Box>
        {designAndEngineeringMenuItems.map((item) => (
          <Box key={item.title}>
            <Link className="m-5" href={item.link}>
              {item.title}
            </Link>
            <Divider></Divider>
          </Box>
        ))}
        <Typography className="m-3" variant="h5" textAlign="center">
          Project Management
        </Typography>
        <Divider></Divider>
        {projectManagementMenuItems.map((item) => (
          <Box key={item.title}>
            <Link className="m-5" href={item.link}>
              {item.title}
            </Link>
            <Divider></Divider>
          </Box>
        ))}
        <Divider></Divider>
        <Link href="/contact-us" className="flex items-center m-5 uppercase">
          Contact Us
        </Link>
      </Box>
    </Drawer>
  );
}