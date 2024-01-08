import { Box } from "@mui/material";
import Image from "next/image";
import Journal2018 from "./journal-2018";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <Journal2018 />;
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
