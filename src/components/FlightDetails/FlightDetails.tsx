import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import FlightImages from "../FlightImages/FlightImages";
import FlightInfo from "../FlightInfo/FlightInfo";
import FlightVideo from "../FlightVideo/FlightVideo";
import { FLIGHT_DETAILS_QUERY } from "../../shared/queries";
import { LaunchData } from "../../shared/types";

import "./FlightDetails.css";

const FlightDetails = () => {
  const { id } = useParams();
  const { loading, data } = useQuery<LaunchData>(FLIGHT_DETAILS_QUERY, {
    variables: {
      id,
    },
  });

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div className="flight-details">
      <FlightInfo
        missionName={data.launch.mission_name}
        rocketName={data.launch.rocket.rocket_name}
        data={data.launch.launch_date_local}
        success={data.launch.launch_success}
      />
      <FlightVideo src={data.launch.links.video_link} />
      <FlightImages
        images={data.launch.links.flickr_images}
        rocketName={data.launch.rocket.rocket_name}
      />
    </div>
  );
};

export default FlightDetails;
