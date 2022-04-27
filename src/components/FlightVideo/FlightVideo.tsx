import { memo } from "react";

import { FlightVideoProps } from "./types";

const FlightVideo = memo<FlightVideoProps>(({ src }) => {
  return (
    <iframe
      width="420"
      height="315"
      frameBorder="0"
      src={src}
      allowFullScreen
    ></iframe>
  );
});

FlightVideo.displayName = "FlightVideo";

export default FlightVideo;
