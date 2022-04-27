import { memo } from "react";

import { FlightImagesProps } from "./types";

import "./FlightImages.css";

const FlightImages = memo<FlightImagesProps>(({ images, rocketName }) => {
  return (
    <div className="flight-images">
      {images.map((image) => (
        <img
          className="flight-images__image"
          src={image}
          alt={rocketName}
          width="100px"
        />
      ))}
    </div>
  );
});

FlightImages.displayName = "FlightImages";

export default FlightImages;
