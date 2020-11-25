import React from "react"
import { useLaunchesInfoQuery } from "../../generated/graphql"
import MissionsList from "./MissionsList"

const Mission = () => {
  // Get Data
  const { data, loading, error } = useLaunchesInfoQuery()

  // if Loading
  if (loading) {
    return <h1>Loading</h1>
  }

  // If Error
  if (error || !data) {
    return <h1>Error</h1>
  }

  // If All Good
  console.log(data)
  return <MissionsList data={data} />
}

export default Mission
