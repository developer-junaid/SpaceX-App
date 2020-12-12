import gql from 'graphql-tag';

// Query to get all launches

export const Launches = gql`
query Launches{
    launches(limit: 40) {
      mission_id
      mission_name
      launch_success
      launch_year
      details
      links {
        article_link
        wikipedia
        video_link
      }
    }
  }
`