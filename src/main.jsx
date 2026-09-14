import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Wrapper = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ThemeProvider>
    )
}
const theme = createTheme();
const app = document.getElementById('root');
const appRoot = createRoot(app);
appRoot.render(<React.StrictMode><Wrapper/></React.StrictMode>);



