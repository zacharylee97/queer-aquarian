import { Box } from "@mui/material";
import Image from "next/image";
import Journal2018 from "./journal-2018";
import Journal2022 from "./journal-2022";
import Journal2023 from "./journal-2023";

export default function ClobsItem({ ...props }) {
  if (props.index === 0) {
    return <Journal2018 />;
  } else if (props.index === 1) {
    return <Journal2022 />;
  } else if (props.index === 2) {
    return <Journal2023 />;
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
