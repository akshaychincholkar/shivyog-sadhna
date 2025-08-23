import React, { createContext, useContext, useState } from "react";
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
// import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
// import title from './images/title.png'
import title from './images/Krushna_Park_Logo.png'
// Create Context for Branding
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
const BrandingContext = createContext();

export const useBranding = () => useContext(BrandingContext);

const AppProvider = ({ children }) => {
  const [branding, setBranding] = useState({
    title: "My App",
    // logo: "/static/images/default-logo.png",
    // logo: "./images/title.png",
    logo: "./images/Krushna_Park_Logo.png",
  });

  const changeBranding = () => {
    setBranding({
      title: "New App Title",
      logo: {title},
    });
  };

  return (
    <BrandingContext.Provider value={{ branding, changeBranding }}>
      {children}
    </BrandingContext.Provider>
  );
};

const Navbar = () => {
  const { branding } = useBranding();
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* <Box component="img" src={branding?.logo} alt="Logo" sx={{ width: 40, height: 40, marginRight: 1 }} /> */}
          <Box component="img" src={title} alt="Logo" sx={{ width: 40, height: 40, marginRight: 1 }} />
          <Typography variant="h6">{branding?.title}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  const { changeBranding } = useBranding();

  return (
    <Box>
      <Navbar />
      <Button variant="contained" onClick={changeBranding} sx={{ marginTop: 2 }}>
        Change Branding
      </Button>
    </Box>
  );
};

// Wrap the app with the AppProvider
export default function Branding() {
return (
    <AppProvider>
      <App />
    </AppProvider>
  );
} 
