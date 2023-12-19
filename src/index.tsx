// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );




import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { CssBaseline} from '@mui/material';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const theme = createTheme({
  palette: {
    background: {
      // default: "#efefef",
      default: "#cfe8fc",
    },
  }
});
root.render(
 <ThemeProvider theme={theme}>
    <CssBaseline/>
        <App />
  </ThemeProvider>
);

reportWebVitals();
