import gql from "graphql-tag"

// Get the Launches Data
export const LaunchesInfo = gql`
  query LaunchesInfo {
    launches {
      launch_success
      launch_year
      mission_id
      mission_name
    }
  }
`
