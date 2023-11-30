import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function HongKong2023() {
  return (
    <Box>
      <Image
        src="/hong-kong-1.png"
        alt="Hong Kong 1"
        width={500}
        height={500}
      />
      <Typography variant="h5">More to come, stay tuned!</Typography>
    </Box>
  );
}
