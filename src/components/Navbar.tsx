import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { ROLES } from "../constants";
import { Box, Button } from "@mui/material";
import {
  updateLoggedInStatus,
  updateLoggedInUserData,
} from "../store/actions/AuthAction";

const Navbar = () => {
  const { loggedInUserData, isLoggedIn } = useSelector(
    (state: any) => state.AuthReducer
  );
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const USER_ROLE = user.role || loggedInUserData?.role;
  const dispatch: any = useDispatch();
  const onLogout = () => {
    dispatch(updateLoggedInUserData(null));
    dispatch(updateLoggedInStatus(false));
    localStorage.removeItem("user");
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "4rem",
            gap: "2rem",
          }}
        >
          {USER_ROLE === ROLES.EMPLOYER ? (
            <>
              <Button color="inherit" component={Link} to="/jobs/create">
                Create New Job
              </Button>
              <Button color="inherit" component={Link} to="/jobs">
                View Posted Jobs
              </Button>
              {isLoggedIn && (
                <Button
                  onClick={() => {
                    onLogout();
                  }}
                  color="inherit"
                  component={Link}
                  to="/login"
                >
                  Logout
                </Button>
              )}
            </>
          ) : USER_ROLE === ROLES.FREELANCER ? (
            <>
              <Button color="inherit" component={Link} to="/jobs">
                View Jobs
              </Button>
              <IconButton
                edge="end"
                color="inherit"
                component={Link}
                to="/profile"
              >
                <AccountCircle />
              </IconButton>
            </>
          ) : null}
          {isLoggedIn && (
            <Button
              onClick={() => {
                onLogout();
              }}
              color="inherit"
              component={Link}
              to="/login"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
