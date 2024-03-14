import { useState } from "react";
import { Button, Menu, MenuItem, Stack, Avatar } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

import { MainContainer } from "./UserMenu.styled";

const menuTabs = [
  {
    label: "Profile",
    path: "/profile", // Should use path to navigate to the desired route (should implement routing first)
  },
  {
    label: "settings",
    path: "/settings",
  },
];

export default function UserMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <MainContainer open={open}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Stack spacing={2} direction="row" alignItems="center">
          <Avatar alt="Abd El-Aziz Noaman" src="/static/images/avatar/1.jpg" />
          <h4>Abd El-Aziz</h4>
          <IoIosArrowDown />
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {menuTabs.map((tab, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {tab.label}
          </MenuItem>
        ))}
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </MainContainer>
  );
}
