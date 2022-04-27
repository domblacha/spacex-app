import { gql } from "@apollo/client";

export const FLIGHT_LIST_QUERY = gql`
  query GetPastLaunches($limit: Int!, $offset: Int!) {
    launchesPast(
      limit: $limit
      offset: $offset
      sort: "launch_date_local"
      order: "asc"
    ) {
      id
      launch_date_local
      launch_site {
        site_name_long
      }
      mission_name
      rocket {
        rocket_name
      }
      ships {
        name
        home_port
        image
      }
    }
  }
`;

export const FLIGHT_DETAILS_QUERY = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      id
      mission_name
      launch_date_local
      rocket {
        rocket_name
        second_stage {
          block
        }
      }
      launch_success
      links {
        flickr_images
        video_link
      }
    }
  }
`;
