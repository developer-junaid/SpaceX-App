import React from "react"
import { LaunchesInfoQuery } from "../../generated/graphql"

// Data interface Type
interface Props {
  data: LaunchesInfoQuery
}

const MissionsList: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <h3>Missions</h3>
      <ol>
        {data.launches?.map((launch, index) => {
          return <li key={index}>{launch?.mission_name}</li>
        })}
      </ol>
    </div>
  )
}

export default MissionsList
