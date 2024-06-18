import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {useState} from "react";
import { Switch} from "@mui/material";
import css from "../components/Header/Header.module.css";

const MainLayout = () => {
    const [theme, setTheme] = useState("light")

    const switchTheme = ()=>{
        setTheme((cur)=>(cur==="light" ? "dark" : "light"))
    }
    return (
        <div className={`{box} ${theme === "light" ? css.light : css.dark}`}>
            <Header/>
            <Switch onChange={switchTheme} type={"checkbox"} id="toogle-btn"/>
            <Outlet/>
        </div>
    );
};
export {MainLayout};