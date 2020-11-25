import React from "react"
import { useLaunchInfoQuery } from "./../../generated/graphql"
import MissionInfoList from "./MissionInfoList"

const MissionInfo = () => {
  // Get Launch Data
  const { data, loading, error } = useLaunchInfoQuery({
    variables: { id: "25" },
  })

  // If Loading
  if (loading) {
    return <h1>Loading</h1>
  }

  // If Error
  if (error || !data) {
    return <h1>Error</h1>
  }

  // If All Good
  return <MissionInfoList data={data} />
}

export default MissionInfo
