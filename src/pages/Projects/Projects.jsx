import { useState } from "react";
import { Typography, Breadcrumbs, Link, Tab, Box, Stack } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { MainContainer, NumberChip, StyledTab } from "./Projects.styled";

export default function Projects() {
  const [value, setValue] = useState("2");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  return (
    <MainContainer>
      <h3>Edit card</h3>
      <div role="presentation" onClick={handleBreadcrumbClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Projects
          </Link>
          <Typography color="primary">photo shoot</Typography>
        </Breadcrumbs>
      </div>
      <br />
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList
              onChange={handleTabChange}
              aria-label="lab API tabs example"
            >
              <StyledTab label="General" value="1" />
              <StyledTab
                label={
                  <Stack spacing={2} direction="row" alignItems="center">
                    <p>Tasks</p>
                    <NumberChip>4</NumberChip>
                  </Stack>
                }
                value="2"
              />
              <StyledTab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </MainContainer>
  );
}
