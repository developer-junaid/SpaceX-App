import React, { useState } from "react";
import "./launches.css";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import { useLaunchesQuery } from "./../../generated/graphql";

// Tab Panel for Tabs Data
const TabPanel = (props: any) => {
  const { children, value, index } = props;

  return (
    <>
      {value === index && <div className="content-container">{children}</div>}
    </>
  );
};

// // Tab Panel

const Launches = () => {
  // Get API Data
  const { data, error, loading } = useLaunchesQuery();

  // State for Tab Value
  const [value, setValue] = useState(0);

  // Handle Tabs Changing
  const handleTabs = (event: any, val: number) => {
    setValue(val);
  };

  // If There is any error
  if (error || !data) return <h4>Sorry, an error has occured :(</h4>;

  // If Data loading
  if (loading) return <h4>Loading</h4>;

  // If All good
  return (
    <div className="launches-container">
      <h1 className="heading">Launches</h1>

      {/* Tabs */}
      <AppBar position="static" color="default">
        <Tabs
          scrollButtons="auto"
          variant="scrollable"
          className="tabs-container"
          value={value}
          aria-label="launches"
          onChange={handleTabs}
        >
          {data.launches?.map((launch, index) => {
            return (
              <Tab key={index} className="tab" label={launch?.mission_name} />
            );
          })}
        </Tabs>
      </AppBar>
      {/* // Tabs */}
      {/* Tab Panels */}

      {data.launches?.map((launch, index) => {
        // Variables
        let articleLink = launch?.links?.article_link;
        let wikiLink = launch?.links?.wikipedia;
        let videoLink = launch?.links?.video_link;

        return (
          <TabPanel key={index} value={value} index={index}>
            <h2 className="title">
              {launch?.mission_name}&nbsp;({launch?.launch_year})
            </h2>
            <div className="underline"></div>
            <p className="description">{launch?.details}</p>
            <div className="status">
              Status:{" "}
              <span className={launch?.launch_success ? "success" : "failure"}>
                {launch?.launch_success ? "Success" : "Failure"}
              </span>
            </div>
            <div className="social-media-container">
              <a target="_blank" href={`${articleLink}`}>
                <button className="button website">Article</button>
              </a>
              <a target="_blank" href={`${wikiLink}`}>
                <button className="button wikipedia">Wikipedia</button>
              </a>
              <a target="_blank" href={`${videoLink}`}>
                <button className="button twitter">Video</button>
              </a>
            </div>
          </TabPanel>
        );
      })}
    </div>
  );
};

export default Launches;
