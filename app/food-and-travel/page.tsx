"use client";
import { Box, Tabs, Typography } from "@mui/material";
import Header from "../components/header";
import { SyntheticEvent, useState } from "react";
import { StyledTab } from "../constants/styled-tab";
import GuideItem from "../components/guide-item";

export default function FoodAndTravel() {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10 mb-3">
          <Typography variant="h3">Food & Travel</Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="Food & Travel Guide Tabs"
            >
              <StyledTab label="Hong Kong 2023" />
              <StyledTab label="Kuching 2023" />
            </Tabs>
          </Box>
          <GuideItem index={value}></GuideItem>
        </Box>
      </Box>
    </main>
  );
}
