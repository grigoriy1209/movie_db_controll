import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import {router} from "./router";
import {store} from "./redux/store/store";
// import {ThemeProvider} from "@mui/material";
// import {MaterialUISwitch} from "./components/Header/Styled/Thema";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
      // <ThemeProvider theme={MaterialUISwitch}>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
// </ThemeProvider>
);

