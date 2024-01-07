import { Box } from "@mui/material";
import Image from "next/image";
import Journal from "./journal";
import ClobsHK2023 from "./clobs-hk-2023";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <Journal />;
  } else if (props.index === 1) {
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
