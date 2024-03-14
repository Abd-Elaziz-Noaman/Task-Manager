import { Toolbar, Typography, IconButton, Badge } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { IoMoonOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";

import { AppBar } from "./Header.styled";
import UserMenu from "../UserMenu/UserMenu";

export default function Header(props) {
  const { handleDrawerClose, open, drawerWidth } = props;

  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose}
          edge="start"
          sx={{
            flexGrow: 1,
            maxWidth: 100,
            marginRight: "auto",
            fontSize: "1.5rem",
            "&:hover": {
              backgroundColor: "transparent",
            },
            ...(!open && { display: "none" }),
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: "2.5rem" }} /> Back
        </IconButton>
        <IconButton>
          <Badge badgeContent={4} color="primary">
            <IoIosNotificationsOutline />
          </Badge>
        </IconButton>
        <IconButton sx={{ m: 1 }}>
          <IoMoonOutline />
        </IconButton>
        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}
