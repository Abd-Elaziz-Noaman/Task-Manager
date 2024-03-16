import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  List,
  CssBaseline,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Avatar,
  LinearProgress,
  Button,
  Badge,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { RiAppsFill } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFolderClosed } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { BsCalendar2Date } from "react-icons/bs";
import { TfiLayoutMediaCenter } from "react-icons/tfi";
import { FaGoogleDrive } from "react-icons/fa";

import Header from "../Header/Header";

import { MutedText } from "../TaskCard/TaskCard.styled";
import {
  StyledLabel,
  StyledSelect,
} from "../../pages/Projects/Projects.styled";

const workspaceChoices = [
  "Zezo's Workspace",
  "Second Workspace",
  "Third Workspace",
];

const tabs = [
  { label: "Dashboard", icon: <IoHomeOutline /> },
  { label: "Projects", icon: <FaRegFolderClosed /> },
  { label: "Users", icon: <LuUsers2 /> },
  { label: "Calender", icon: <BsCalendar2Date /> },
  { label: "Media", icon: <TfiLayoutMediaCenter /> },
];

const drawerWidth = 240;
const headerHeight = 50;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  height: headerHeight,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "& .MuiPaper-root": {
    backgroundColor: "#E3EDF7",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [workspace, setWorkspace] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  const handleWorkspaceChange = (event) => {
    setWorkspace(event.target.value);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        handleDrawerClose={handleDrawerClose}
        open={open}
        drawerWidth={drawerWidth}
      />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            {/* {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )} */}
            <RiAppsFill />
            {open && <h3 style={{ marginLeft: 5 }}>Shooty</h3>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Stack
          direction="column"
          justifyContent="center"
          sx={{
            textAlign: "left",
            fontSize: "1.1rem",
            ml: open ? 2 : 0,
            mt: open ? 0 : 3,
          }}
        >
          {open && <MutedText>WorkSpace</MutedText>}
          <StyledSelect
            value={workspace}
            onChange={handleWorkspaceChange}
            displayEmpty
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {workspaceChoices.map((choice, index) => (
              <MenuItem key={index} value={choice}>
                {open ? (
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Avatar
                      alt={choice}
                      src="/static/images/avatar/1.jpg"
                      sx={{ height: 30, width: 30 }}
                    />
                    {choice}
                  </Stack>
                ) : (
                  <Avatar
                    alt={choice}
                    src="/static/images/avatar/1.jpg"
                    sx={{ height: 30, width: 30 }}
                  />
                )}
              </MenuItem>
            ))}
          </StyledSelect>
        </Stack>
        <List>
          {tabs.map((tab, index) => (
            <ListItem key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: selectedTab === index ? "#1976d2" : "#000",
                }}
                // selected={selectedTab === index}
                onClick={() => handleTabClick(index)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: selectedTab === index ? "#1976d2" : "#000",
                  }}
                >
                  {tab.icon}
                </ListItemIcon>
                <ListItemText
                  primary={tab.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {open &&
                  (tab.label === "Projects" || tab.label === "Calender") && (
                    <Badge badgeContent={3} color="primary" />
                  )}
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        {open && (
          <Stack direction="column" alignItems="flex-start" sx={{ ml: 2 }}>
            <MutedText>Integrations</MutedText>
            <StyledLabel>
              <FaGoogleDrive /> &nbsp; Google Drive
            </StyledLabel>
          </Stack>
        )}

        {open && (
          <Box sx={{ width: "80%", ml: 2, textAlign: "left" }}>
            <MutedText>Storage</MutedText>
            <LinearProgress
              variant="determinate"
              value={40}
              sx={{ height: 7, borderRadius: "8px" }}
            />
            <p>40.43 GB of 100 GB used</p>
          </Box>
        )}

        {open && (
          <Box sx={{ ml: 2, textAlign: "left" }}>
            <Button variant="outlined" color="inherit">
              Upgrade Storage
            </Button>
          </Box>
        )}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
