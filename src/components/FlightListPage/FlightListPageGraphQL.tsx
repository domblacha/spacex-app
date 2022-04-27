import { useCallback, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

import FlightList from "../FlightList/FlightList";
import FlightListFilters from "../FlightListFilters/FlightListFilters";
import LaunchesPastContextWrapper from "../LaunchesPastContextWrapper";
import { FLIGHT_LIST_QUERY } from "../../shared/queries";
import { LaunchesPastData } from "../../shared/types";
import { LIMIT } from "../../shared/consts";

import "./FlightListPageGraphQL.css";

export default function FlightListPageGraphQL() {
  const [offset, setOffset] = useState(0);
  const { loading, data, fetchMore } = useQuery<LaunchesPastData>(
    FLIGHT_LIST_QUERY,
    {
      variables: {
        limit: LIMIT,
        offset,
      },
    }
  );

  const handleFetchMore = useCallback(
    (currentOffset: number) => {
      fetchMore({
        variables: {
          offset: currentOffset,
          limit: LIMIT,
        },
      });
    },
    [fetchMore]
  );

  useEffect(() => {
    handleFetchMore(offset);
  }, [offset, handleFetchMore]);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <>
      <h2>Launch list</h2>
      <LaunchesPastContextWrapper>
        <FlightListFilters launches={data.launchesPast} />
        <FlightList
          offset={offset}
          setOffset={setOffset}
          dataLength={data.launchesPast.length}
        />
      </LaunchesPastContextWrapper>
    </>
  );
}
