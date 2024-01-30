import { Box } from "@mui/material";
import Image from "next/image";
import TextsToMyFriends from "./texts-to-my-friends";

export default function MiscellaneousItem({ ...props }) {
  if (props.index === 0) {
    return <TextsToMyFriends />;
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
