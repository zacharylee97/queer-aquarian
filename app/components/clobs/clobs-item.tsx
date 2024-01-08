import { Box } from "@mui/material";
import Image from "next/image";
import ClobsHK2023 from "./clobs-hk-2023";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <ClobsHK2023 />;
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
