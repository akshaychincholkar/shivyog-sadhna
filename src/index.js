import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoginForm from './Login';
import reportWebVitals from './reportWebVitals';
import Home from './home';
import Branding from './BrandingExample';
import PdfViewer from './PdfViewer';
import { CssBaseline, Container } from "@mui/material";
import './App.css';
import ImageCarousel from './ImageCorousal';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <Container maxWidth="md"> */}
      {/* <CssBaseline /> */}
      {/* <PdfViewer file="./contents/dss.pdf" /> */}
      {/* <PdfViewer/> */}
      {/* <iframe src="./contents/dss.pdf"></iframe> */}

    {/* </Container> */}
    {/* <Branding/> */}
    <Home/>
    {/* <AppProvider/> */}
    {/* <ThemeProvider theme={theme}>
      <ScrollableTabs />
    </ThemeProvider> */}
    {/* <ScrollableTabs /> */}
    {/* <CardNavigator></CardNavigator> */}
    {/* <App /> */}
    {/* <LoginForm/> */}
    {/* <ImageCarousel/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
