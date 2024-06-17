import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import {router} from "./router";
import {store} from "./redux/store/store";
import {ThemeProvider} from "@mui/material";
import {theme} from "./thema/MuiThema";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router}/>
        </ThemeProvider>
    </Provider>

);

