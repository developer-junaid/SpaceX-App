import React from "react"
import { LaunchInfoQuery } from "../../generated/graphql"

// Data interface Type
interface Props {
  data: LaunchInfoQuery
}

const MissionInfoList: React.FC<Props> = ({ data }) => {
  console.log(data)
  return (
    <div>
      <h3>Mission Info</h3>
      <ul>
        <li>{data.launch?.mission_name}</li>
        <li>{data.launch?.launch_success ? "Success" : "Failure"}</li>
        <li>{data.launch?.launch_year}</li>
      </ul>
    </div>
  )
}

export default MissionInfoList
