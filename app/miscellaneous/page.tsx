"use client";
import { Box, Tabs, Typography } from "@mui/material";
import Header from "../components/header";
import { useState, SyntheticEvent } from "react";
import { StyledTab } from "../constants/styled-tab";
import MiscellaneousItem from "./miscellaneous-item";

export default function Miscellaneous() {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col">
        <Box className="m-10">
          <Box>
            <Typography variant="h3">
              {`Miscellaneous`}
              <br />
            </Typography>
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="Miscellaneous Tabs"
            >
              <StyledTab label="Texts To My Friends" />
            </Tabs>
          </Box>
          <MiscellaneousItem index={value}></MiscellaneousItem>
        </Box>
      </Box>
    </main>
  );
}
