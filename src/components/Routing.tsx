import { Route, Switch } from "react-router-dom";

import FlightDetails from "./FlightDetails/FlightDetails";
import FlightListPageGraphQL from "./FlightListPage/FlightListPageGraphQL";

const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <FlightListPageGraphQL />
        </Route>
        <Route path="/flight/:id">
          <FlightDetails />
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
