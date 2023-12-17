import { Box } from "@mui/material";
import Image from "next/image";
import Clobs2018 from "./clobs-2018";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <Clobs2018 />;
  } else {
    return (
      <Box>
        <Image
          src="/coming-soon.png"
          alt="Coming Soon"
          width={500}
          height={500}
        />
      </Box>
    );
  }
}
