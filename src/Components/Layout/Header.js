import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Box, Grid, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
        <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={9} sm={3}>
                <Stack direction="row" gap={2} className="logo-box">
                    <Typography variant="h6" component="div">
                        Logo
                    </Typography>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Stack>
            </Grid>
            <Grid item xs={3} sm={9} textAlign="right">
                <Stack
                    alignItems="center"
                    flexDirection="row"
                    justifyContent="flex-end"
                >
                    <Stack className="user-box">
                        <Typography variant="h4">Admin</Typography>
                        <Typography>Welcome to weather</Typography>
                    </Stack>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        className="user-icon"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorEl)}
                    >
                    <Box className="user-box-mobile">
                        <Typography variant="h4">Admin</Typography>
                        <Typography>Welcome to weather</Typography>
                    </Box>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </Stack>
            </Grid>
        </Grid>
    </AppBar>
  );
}