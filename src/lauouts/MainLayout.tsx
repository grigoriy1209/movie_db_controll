import {Outlet} from "react-router-dom";
import {createTheme, CssBaseline, PaletteMode, ThemeProvider} from "@mui/material";

import {useAppSelector} from "../hooks/reduxHooks";
import {useMemo} from "react";
import {Header} from "../components";

const MainLayout = () => {
const mode = useAppSelector<string>(state => state.theme.mode);
const thema =useMemo(() =>createTheme({
    palette:{
        mode:mode as PaletteMode,
    }
}),[mode])

    return (
        <div >
            <ThemeProvider theme={thema}>
                <CssBaseline/>
                 <Header/>
                 <Outlet/>
            </ThemeProvider>
        </div>
    );
};
export {MainLayout};
