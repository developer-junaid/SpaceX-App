import gql from 'graphql-tag';

export const MissionsInfo = gql`
query MissionsInfo{
  missions(limit: 10) {
    description
    website
    wikipedia
    twitter
    name
  }
}

`
  