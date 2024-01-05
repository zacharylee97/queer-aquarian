"use client";
import { Box, Tabs, Typography } from "@mui/material";
import Header from "../components/header";
import { useState, SyntheticEvent } from "react";
import { StyledTab } from "../constants/styled-tab";
import ClobsItem from "../components/clobs-item";
import Image from "next/image";

export default function Clobs() {
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
            <Image
              src="/essays.webp"
              alt="Essays"
              priority
              fill
              style={{ objectFit: "cover", zIndex: -1, opacity: "50%" }}
            />
            <Typography variant="h3">
              {`CLOBS`}
              <br />
            </Typography>
            {`Welcome to the most personal section of my blog.`}
            <br />
            <br />
            {`CLOBS stands for "Comprehensive List of Bullshit", and I came up 
            with this acronym during my trip to Hong Kong in November 2023. I was 
            dealing with a very stressful situation and I remember writing down 
            this list of all the things I was dealing with, which ending up becoming 
            “CLOBS I Have to Deal with in HK”.`}
            <br />
            <br />
            {`I used to be so scared to think about what happened in the past. It was so 
            traumatic, I actually completely blocked most of it from my memory. I used to 
            think it was just my bad memory, but now I understand that it was a protective 
            response by my subconscious to protect myself. Cause honestly, I don't think I 
            was ready to think about it. Until now.`}
            <br />
            <br />
            {`I want to take a look back, to better understand why I am the way I am, and 
            to remember everything that happened. Wanna come with me?`}
            <br />
            <br />
          </Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="CLOBS Tabs">
              <StyledTab label="Journal" />
              <StyledTab label="CLOBS HK 2023" />
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
