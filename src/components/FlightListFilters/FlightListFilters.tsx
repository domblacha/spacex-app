import { ChangeEvent, useContext, useEffect, useState } from "react";
import { LaunchesPastContext } from "../LaunchesPastContextWrapper";
import { FlightListFiltersProps } from "./types";

import "./FlightListFilters.css";

export default function FlightListFilters({
  launches,
}: FlightListFiltersProps) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const { setFilteredLaunches } = useContext(LaunchesPastContext);

  useEffect(() => {
    const results = launches?.filter((launch) =>
      launch.mission_name.toLowerCase().includes(searchPhrase)
    );
    setFilteredLaunches(results);
  }, [searchPhrase, launches]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchPhrase(e.target.value);

  return (
    <div className="flight-list-filters">
      <input onChange={handleChange} />
    </div>
  );
}
