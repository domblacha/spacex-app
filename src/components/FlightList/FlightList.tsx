import { memo, useContext } from "react";
import { LaunchesPastContext } from "../LaunchesPastContextWrapper";
import LaunchRow from "../FlightListRow/FlightListRow";
import FlightListPagination from "../FlightListPagination/FlightListPagination";
import { FlightListProps } from "./types";
import { FLIGHT_LIST_TABLE_HEADERS } from "../../shared/consts";

import "./FlightList.css";

const FlightList = memo<FlightListProps>(
  ({ offset, setOffset, dataLength }) => {
    const { filteredLaunches } = useContext(LaunchesPastContext);

    return (
      <>
        <table>
          <thead>
            <tr>
              {FLIGHT_LIST_TABLE_HEADERS.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredLaunches?.map((launch) => (
              <LaunchRow key={launch.id} launch={launch} />
            ))}
          </tbody>
        </table>
        <div>
          <FlightListPagination
            offset={offset}
            setOffset={setOffset}
            dataLength={dataLength}
          />
        </div>
      </>
    );
  }
);

FlightList.displayName = "FlightList";

export default FlightList;
