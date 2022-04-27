import { memo } from "react";

import { LIMIT } from "../../shared/consts";
import { FlightListPaginationProps } from "./types";

import "./FlightListPagination.css";

const FlightListPagination = memo<FlightListPaginationProps>(
  ({ offset, setOffset, dataLength }) => {
    const handlePreviousClick = () => setOffset((prev) => prev - LIMIT);
    const handleNextClick = () => setOffset((prev) => prev + LIMIT);

    return (
      <div className="flight-list-pagination">
        <button disabled={!offset} onClick={handlePreviousClick}>
          Previous
        </button>
        <button disabled={dataLength < LIMIT} onClick={handleNextClick}>
          Next
        </button>
      </div>
    );
  }
);

FlightListPagination.displayName = "FlightListPagination";

export default FlightListPagination;
