import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./launches.css";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "black",
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  // Dummy State
  const [dummyArray, setDummyArray] = useState([
    "Thaicom 6",
    "Item Two",
    "Item Three",
    "Item Four",
    "Item Five",
    "Item Six",
    "Item Seven",
  ]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          className="tabs-container"
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="missions"
        >
          {/* API DATA */}
          {dummyArray.map((label, index) => {
            return <Tab className="tab" label={label} {...a11yProps(index)} />;
          })}
          {/* // */}

          {/* <Tab label="Fakon" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Four" {...a11yProps(3)} />
          <Tab label="Item Five" {...a11yProps(4)} />
          <Tab label="Item Six" {...a11yProps(5)} />
          <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
      </AppBar>

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
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
