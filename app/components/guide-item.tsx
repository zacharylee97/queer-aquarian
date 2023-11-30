import HongKong2023 from "./hong-kong-2023";
import Kuching2023 from "./kuching-2023";

export default function GuideItem({ ...props }) {
  if (props.index === 0) {
    return <HongKong2023 />;
  } else if (props.index === 1) {
    return <Kuching2023 />;
  } else {
    return null;
  }
}
