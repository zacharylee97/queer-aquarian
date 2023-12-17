"use client";
import { Box, Tabs, Typography } from "@mui/material";
import Header from "../components/header";
import { useState, SyntheticEvent } from "react";
import { StyledTab } from "../constants/styled-tab";
import ClobsItem from "../components/clobs-item";

export default function Clobs() {
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10">
          <Typography variant="h4">
            <p>{`Comprehensive List of Bullshit (CLOBS)`}</p>
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="CLOBS Tabs">
              <StyledTab label="Journal" />
              <StyledTab label="Facebook 2015" />
              <StyledTab label="My Memoir 2015" />
            </Tabs>
          </Box>
          <ClobsItem index={value}></ClobsItem>
        </Box>
      </Box>
    </main>
  );
}
