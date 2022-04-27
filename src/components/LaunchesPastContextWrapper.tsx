import { createContext, FC, useState } from "react";

import { LaunchPast } from "../shared/types";

type LaunchesPastContextType = {
  filteredLaunches: LaunchPast[];
  setFilteredLaunches: React.Dispatch<React.SetStateAction<LaunchPast[]>>;
};

export const LaunchesPastContext = createContext<LaunchesPastContextType>(null);
LaunchesPastContext.displayName = "LaunchesPastContext";

const LaunchesPastContextWrapper: FC = ({ children }) => {
  const [filteredLaunches, setFilteredLaunches] = useState<LaunchPast[]>(null);

  return (
    <LaunchesPastContext.Provider
      value={{ filteredLaunches, setFilteredLaunches }}
    >
      {children}
    </LaunchesPastContext.Provider>
  );
};

export default LaunchesPastContextWrapper;
