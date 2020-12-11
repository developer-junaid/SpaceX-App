import React, { useState } from "react";
import "./launches.css";
import { AppBar, Tabs, Tab } from "@material-ui/core";

// Tab Panel for Tabs Data
const TabPanel = (props: any) => {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && <div className="content-container">{children}</div>}
    </div>
  );
};

// // Tab Panel

const Launches = () => {
  // State for Tab Value
  const [value, setValue] = useState(0);

  // Handle Tabs Changing
  const handleTabs = (event: any, val: number) => {
    setValue(val);
  };

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
          <Tab className="tab" label="Item One" />
          <Tab className="tab" label="Item Two" />
          <Tab className="tab" label="Item Three" />
          <Tab className="tab" label="Item Four" />
          <Tab className="tab" label="Item Five" />
          <Tab className="tab" label="Item Six" />
          <Tab className="tab" label="Item Seven" />
        </Tabs>
      </AppBar>
      {/* // Tabs */}
      {/* Tab Panels */}
      <TabPanel value={value} index={0}>
        <h2 className="title">Thaicom 6&nbsp;(2014)</h2>
        <div className="underline"></div>
        <p className="description">
          Thaicom is the name of a series of communications satellites operated
          from Thailand, and also the name of Thaicom Public Company Limited,
          which is the company that owns and operates the Thaicom satellite
          fleet and other telecommunication businesses in Thailand and
          throughout the Asia-Pacific region. The satellite projects were named
          Thaicom by the King of Thailand, His Majesty the King Bhumibol
          Adulyadej, as a symbol of the linkage between Thailand and modern
          communications technology.
        </p>
        <div className="status">
          Status: <span className="success">Successfull</span>
        </div>
        <div className="social-media-container">
          <button className="button website">Article</button>
          <button className="button wikipedia">Wikipedia</button>
          <button className="button twitter">Video</button>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two Details
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three Details
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four Details
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five Details
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six Details
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven Details
      </TabPanel>
      {/* // Tab Panels */}
    </div>
  );
};

export default Launches;
