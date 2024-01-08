"use client";
import { Box, Tabs, Typography } from "@mui/material";
import Header from "../components/header";
import { useState, SyntheticEvent } from "react";
import { StyledTab } from "../constants/styled-tab";
import JournalItem from "../components/journal/journal-item";

export default function Journal() {
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
              {`Journal`}
              <br />
            </Typography>
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="Journal Tabs">
              <StyledTab label="2018" />
            </Tabs>
          </Box>
          <JournalItem index={value}></JournalItem>
        </Box>
      </Box>
    </main>
  );
}
