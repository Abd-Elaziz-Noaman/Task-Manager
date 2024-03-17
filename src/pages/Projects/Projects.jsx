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
import { FaPlus } from "react-icons/fa6";

import useTasksStore from "../../store/tasks";

import {
  MainContainer,
  NumberChip,
  StyledTab,
  StyledLabel,
  StyledSelect,
} from "./Projects.styled";
import TaskCard from "../../components/TaskCard/TaskCard";
import TasksAddition from "../../components/TasksAddition/TasksAddition";

const mainStatusChoices = ["In progress", "In review", "Completed", "Canceled"];

const taskStatusChoices = ["DEVELOPMENT", "STAGING", "PRODUCTION"];

export default function Projects() {
  const { tasks, addTasks } = useTasksStore();
  const [value, setValue] = useState("2");
  const [selectedDate, setSelectedDate] = useState([]);
  const [mainTaskStatus, setMainTaskStatus] = useState(mainStatusChoices[0]);
  const [newTasks, setNewTasks] = useState([]);

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

  const addNewTaskHandler = () => {
    let demo = {
      id: generateRandomId(),
      description: "",
      items: "",
      qty: "",
      total: 0,
      showDetails: true,
    };
    let newState = [...newTasks];
    newState.push(demo);
    setNewTasks(newState);
  };

  const removeNewTaskHandler = (index) => {
    let newState = [...newTasks];
    newState.splice(index, 1);
    setNewTasks(newState);
  };

  const hideSubDetailsHandler = (index) => {
    let newState = [...newTasks];
    let selectedTask = newState.find((ele, idx) => idx === index);
    selectedTask = {
      ...selectedTask,
      items: "",
      qty: "",
      total: 0,
      showDetails: false,
    };
    newState[index] = selectedTask;
    setNewTasks(newState);
  };

  const showSubDetailsHandler = (index) => {
    let newState = [...newTasks];
    let selectedTask = newState.find((ele, idx) => idx === index);
    selectedTask = {
      ...selectedTask,
      showDetails: true,
    };
    newState[index] = selectedTask;
    setNewTasks(newState);
  };

  const newTasksFormOnChangeHandler = (e, index) => {
    let newState = [...newTasks];
    let selectedTask = newState.find((ele, idx) => idx === index);
    selectedTask = {
      ...selectedTask,
      [e.target.name]: e.target.value,
    };
    selectedTask.total = selectedTask.items * selectedTask.qty;
    newState[index] = selectedTask;
    setNewTasks(newState);
  };

  const cancelTasksHandler = () => {
    setNewTasks([]);
  };

  const confirmTasksHandler = () => {
    addTasks(newTasks);
    setNewTasks([]);
  };

  function generateRandomId() {
    let randomNumber = Math.floor(Math.random() * 10000);
    let randomId = randomNumber.toString().padStart(4, "0");

    return randomId;
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
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 992px)": {
                flexDirection: "column-reverse",
                paddingBottom: 3,
              },
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
            {tasks.length ? (
              tasks.map((task) => (
                <div key={task.id}>
                  <TaskCard
                    // key={task.id}
                    data={task}
                    choices={taskStatusChoices}
                  />
                  <Divider />
                </div>
              ))
            ) : (
              <h3 style={{ textAlign: "center", color: "grey" }}>
                There are no tasks yet!
                <br />
                let's add some?
              </h3>
            )}
            <br />
            <>
              {newTasks.map((task, index) => (
                <TasksAddition
                  key={index}
                  task={task}
                  index={index}
                  hideSubDetailsHandler={hideSubDetailsHandler}
                  showSubDetailsHandler={showSubDetailsHandler}
                  newTasksFormOnChangeHandler={newTasksFormOnChangeHandler}
                  removeNewTaskHandler={removeNewTaskHandler}
                />
              ))}
              <Button
                variant="contained"
                startIcon={<FaPlus />}
                color="primary"
                sx={{ ml: 3, mt: 2, textTransform: "none" }}
                onClick={addNewTaskHandler}
              >
                Add
              </Button>
            </>
            <br />
            <br />
            <br />
            <br />
            <Divider />
            <br />
            <Stack
              direction="row"
              spacing={3}
              justifyContent="flex-end"
              alignItems="center"
            >
              <Button
                variant="contained"
                color="inherit"
                sx={{ textTransform: "none" }}
                onClick={cancelTasksHandler}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
                onClick={confirmTasksHandler}
              >
                Save Changes
              </Button>
            </Stack>
          </TabPanel>
        </TabContext>
      </Box>
    </MainContainer>
  );
}
