import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { createTheme, ThemeProvider} from "@mui/material";

import MainLayout from "./copmonents/MainLayout";
import MainPage from "./routes/MainPage";
import AddPage from "./routes/AddPage";
import AdminPage from "./routes/AdminPage";

import {store} from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
    palette: {
        primary: {
            light: '#2e176a',
            main: '#1c0d49',
            dark: '#0e062d'
        },
        secondary: {
            light: '#fff',
            main: '#fff',
            dark: '#fff'
        }
    },
});

const withLayout = (Component: any) => (props :any) => (
    <MainLayout>
        <Component {...props} />
    </MainLayout>
);

const Main = withLayout(() => <MainPage />)
const Add = withLayout(() => <AddPage />)
const Admin = withLayout(() => <AdminPage />)




root.render(
      <Provider store={store}>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Main />}  />
                  <Route path="add" element={<Add />} />
                  <Route path="admin" element={<Admin />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
      </Provider>
);


reportWebVitals();
