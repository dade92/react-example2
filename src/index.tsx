import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import {server} from './server';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {darkTheme} from './customTheme';
import {isLocalEnv} from "./utils/Utils";

if (isLocalEnv()) {
    server();
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <MyApp/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
