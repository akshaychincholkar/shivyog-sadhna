import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import title from './images/title.png'
import ram from './images/ram.png'
import Ramraksha from './contents/ramraksha';
import hanuman from './images/hanuman.png'
import HanumanChalisa from './contents/hanuman_chalisa';
import ram_stuti from './images/ram_stuti.png';
import RamStuti from './contents/ram_stuti';
import hanuman_arti from './images/arti.png'
import HanumanArti from './contents/hanuman_aarti';
import dss from './images/dss.png'
import PdfViewer from './PdfViewer';
import ImageCarousel from './ImageCorousal';
import siddhakunjika from './images/siddhakunjika.png'
import Siddhakunjika from './contents/siddhakunjika';
import atharvashirsh from './images/ganesh.png'
import AtharvaShirsh from './contents/ganpati_atharvashirsha'
import AigiriNandini from './contents/MahishasurMardini';
import aigiri_nandini from './images/aigiri_nandini.png'
import CardNavigator from './contents/affirmations';
const NAVIGATION = [
  {
    segment: 'atharvashirsh',
    title: 'Ganpati Atharvashirsh',
    icon: <Box
            component="img"
            src={atharvashirsh} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'ram_raksha',
    title: 'Ramraksha',
    icon: <Box
            component="img"
            src={ram} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'hanuman_chalisa',
    title: 'Hanuman Chalisa',
    icon: <Box
            component="img"
            src={hanuman} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'ram_stuti',
    title: 'Shree Ram Stuti',
    icon: <Box
            component="img"
            src={ram_stuti} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'hanuman_arti',
    title: 'Hanuman Arti',
    icon: <Box
            component="img"
            src={hanuman_arti} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'siddhakunjika',
    title: 'Siddha Kunjika Stotram',
    icon: <Box
            component="img"
            src={siddhakunjika} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'dss',
    title: 'Durga Saptashati',
    icon: <Box
            component="img"
            src={dss} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },  {
    segment: 'mahishasur_mardini',
    title: 'Aigiri Nandini',
    icon: <Box
            component="img"
            src={aigiri_nandini} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
  {
    segment: 'affirmations',
    title: 'Affirmations',
    icon: <Box
            component="img"
            src={aigiri_nandini} // Custom icon for settings
            alt="Settings"
            sx={{
            width: 24,
            height: 24,
            marginRight: 2,
            }}
          />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* <Typography>Dashboard content for {pathname}</Typography> */}
      {pathname == '/ram_raksha'?<Ramraksha/>: 
      (pathname == '/hanuman_chalisa'?<HanumanChalisa/>:
      (pathname == '/ram_stuti'?<RamStuti/>:
      (pathname == '/hanuman_arti'?<HanumanArti/>:
      // (pathname == '/dss'?<PdfViewer/>:
      (pathname == '/dss'?<ImageCarousel/>:
      (pathname == '/siddhakunjika'?<Siddhakunjika/>:
      (pathname == '/atharvashirsh'?<AtharvaShirsh/>:
      (pathname == '/mahishasur_mardini'?<AigiriNandini/>:
      (pathname == '/affirmations'?<CardNavigator/>:"Coming soon!")
      )))))))
      // (pathname == '/mahishasur_mardini'?<CardNavigator/>:"Coming soon!")))))))
          //<PdfViewer file="/path/to/your/pdf-file.pdf" />
      }
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function Home(props) {
  const { window } = props;

  const router = useDemoRouter('/atharvashirsh');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={title} alt="logo" />,
        title: 'Shivyog Sadhna',
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Home;
