import { Box } from "@mui/material";
import Image from "next/image";
import Journal from "./journal";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <Journal />;
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
