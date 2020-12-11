import React from "react";
import { useLaunchesQuery } from "./../../generated/graphql";

const LaunchesContainer = () => {
  // Get Data from API
  const { data, error, loading } = useLaunchesQuery();

  // If Loading
  if (loading) return <h2>Loading</h2>;

  // If Error
  if (error || !data) return <h2>Error</h2>;

  // If All Good
  console.log(data);
  return (
    <div>
      <ul>
        {data.launches?.map((launch, index) => {
          return <li key={index}>{launch?.mission_name}</li>;
        })}
      </ul>
    </div>
  );
};

export default LaunchesContainer;
