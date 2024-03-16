import { useState } from "react";
import {
  Typography,
  Breadcrumbs,
  Link,
  Box,
  Stack,
  FormControl,
  Select,
  MenuItem,
  Divider,
  TextField,
  IconButton,
  Button,
} from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import DatePicker from "react-multi-date-picker";
import { MdAccessTime } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";

import useTasksStore from "../../store/tasks";

import {
  MainContainer,
  NumberChip,
  StyledTab,
  StyledLabel,
  StyledSelect,
  StyledIconButton,
  StyledTextField,
} from "./Projects.styled";
import TaskCard from "../../components/TaskCard/TaskCard";
import TasksAddition from "../../components/TasksAddition/TasksAddition";

const mainStatusChoices = ["In progress", "In review", "Completed", "Canceled"];

const taskStatusChoices = ["DEVELOPMENT", "STAGING", "PRODUCTION"];

export default function Projects() {
  const { tasks } = useTasksStore();
  const [value, setValue] = useState("2");
  const [selectedDate, setSelectedDate] = useState([]);
  const [mainTaskStatus, setMainTaskStatus] = useState("");
  const [newTasks, setNewTasks] = useState([
    { description: "", items: "", qty: "", total: "" },
  ]);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleDateChange = (value) => {
    console.log("🚀 ~ handleDateChange ~ date:", value);
    setSelectedDate(value);
  };

  function handleBreadcrumbClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const handleMainTaskStatusChange = (event) => {
    setMainTaskStatus(event.target.value);
  };

  const handleDateLabelClick = () => {
    // Programmatically trigger click on the hidden input
    document.getElementById("dateInput").click();
  };
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
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
              <StyledLabel
                style={{ alignSelf: "flex-end", marginLeft: "0.7rem" }}
              >
                {selectedDate.length > 1
                  ? `${selectedDate[0].format("D MMM")} -
                    ${selectedDate[1].format("D MMM")}`
                  : "please Select a data range"}
              </StyledLabel>
            </TabList>
            <Stack direction="column" spacing={1} alignItems="center">
              <StyledLabel>
                <IoEyeOutline />
                Observe
              </StyledLabel>
              <Stack direction="row" spacing={2}>
                <div>
                  <StyledLabel htmlFor="dateInput">
                    <MdAccessTime />
                    Dates
                  </StyledLabel>
                  <DatePicker
                    id="dateInput"
                    value={selectedDate}
                    onChange={handleDateChange}
                    range
                    style={{
                      position: "absolute",
                      opacity: 0,
                      height: 0,
                      width: 0,
                    }}
                  />
                </div>
                <StyledLabel>Observe</StyledLabel>
                <StyledSelect
                  value={mainTaskStatus}
                  onChange={handleMainTaskStatusChange}
                  displayEmpty
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {mainStatusChoices.map((choice, index) => (
                    <MenuItem key={index} value={choice}>
                      {choice}
                    </MenuItem>
                  ))}
                </StyledSelect>
              </Stack>
            </Stack>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2" sx={{ p: 1 }}>
            {tasks.map((task) => (
              <div key={task.id}>
                <TaskCard
                  // key={task.id}
                  data={task}
                  choices={taskStatusChoices}
                />
                <Divider />
              </div>
            ))}
          </TabPanel>
          <br />
          {newTasks.map((task, index) => (
            <TasksAddition key={index} />
          ))}
        </TabContext>
      </Box>
    </MainContainer>
  );
}
