// src/Header.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions/auth";

const Header: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  return (
    <AppBar position="static" className="bg-black">
      <Toolbar className="flex justify-between">
        <div className="flex items-center">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="ml-2">
            Auth App
          </Typography>
        </div>
        <div>
          {isAuthenticated ? (
            <>
              <div className="flex items-center">
                <Typography variant="body1">Hi {user?.user?.name}</Typography>
                <Button
                  color="inherit"
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                  className="mr-2"
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <>
              <Button color="inherit" className="mr-2">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="inherit">
                <Link to="/register">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
