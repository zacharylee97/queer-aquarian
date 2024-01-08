import { Box } from "@mui/material";
import Image from "next/image";
import HongKong2023 from "./hong-kong-2023";

export default function GuideItem({ ...props }) {
  if (props.index === 0) {
    return <HongKong2023 />;
  } else {
    return (
      <Box>
        <Image
          src="/coming-soon.webp"
          alt="Coming Soon"
          width={1000}
          height={1000}
        />
      </Box>
    );
  }
}
