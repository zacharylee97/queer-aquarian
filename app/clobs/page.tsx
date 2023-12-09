import { Box, Typography } from "@mui/material";
import Header from "../components/header";
import Clobs2018 from "../components/clobs-2018";

export default function Clobs() {
  return (
    <main className="min-h-screen w-screen">
      <Header></Header>
      <Box className="flex flex-col mt-28">
        <Box className="m-10">
          <Typography variant="h4">
            <p>
              {`Comprehensive List of Bullshit (CLOBS) I've Had to Deal With in
              Life:`}
            </p>
            <p>Growing Up and Living with Anxiety, Depression and OCPD</p>
          </Typography>
          <Typography variant="h5">A Memoir By Zachary Lee</Typography>
          <br />
          <Typography variant="h5">
            <p>{`CLOBS I've Had to Deal With (2018 to 2023)`}</p>
          </Typography>
          <Clobs2018></Clobs2018>
        </Box>
      </Box>
    </main>
  );
}
