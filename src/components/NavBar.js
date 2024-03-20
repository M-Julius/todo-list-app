import React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <MuiAppBar position="sticky">
      <Toolbar>
        <Typography
          to="/"
          variant="h6"
          component={Link}
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Todo App
        </Typography>
        <Button LinkComponent={Link} to="/users" color="inherit">
          Users
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default NavBar;
