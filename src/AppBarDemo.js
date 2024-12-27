import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AppProvider = () => {
  const [drawerOpen, setDrawerOpen] = useState(false); // Drawer is collapsed (closed) by default

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            App Title
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen} // Controlled by state
        onClose={toggleDrawer(false)} // Closes drawer on outside click
      >
        <Box
          sx={{ width: 250, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <Button variant="contained" fullWidth>
            Option 1
          </Button>
          <Button variant="contained" fullWidth sx={{ mt: 2 }}>
            Option 2
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h4">Main Content</Typography>
        <Typography>
          The drawer is collapsed by default and can be toggled using the menu icon.
        </Typography>
      </Box>
    </Box>
  );
};

export default AppProvider;
