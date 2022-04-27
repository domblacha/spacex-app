import { memo } from "react";

import { FlightInfoProps } from "./types";

const FlightInfo = memo<FlightInfoProps>(
  ({ data, missionName, rocketName, success }) => {
    return (
      <div>
        <h2>Mission Name: {missionName}</h2>
        <p>Data: {data}</p>
        <p>Rocket name: {rocketName}</p>
        <p>Success: {success ? "Yes" : "No"}</p>
      </div>
    );
  }
);

FlightInfo.displayName = "FlightInfo";

export default FlightInfo;
