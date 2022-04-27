export type LaunchesPastData = {
  launchesPast: LaunchPast[];
};

export type LaunchPast = {
  id: string;
  flight_number: number;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  mission_name: string;
  rocket: {
    rocket_name: string;
  };
  ships: Ship[];
};

export type Ship = {
  name: string;
  home_port: string;
  image: string;
};

export type LaunchData = {
  launch: Launch;
};

export type Launch = {
  id: string;
  mission_name: string;
  launch_date_local: string;
  rocket: {
    rocket_name: string;
  };
  launch_success: boolean;
  links: {
    flickr_images: string[];
    video_link: string;
  };
};
