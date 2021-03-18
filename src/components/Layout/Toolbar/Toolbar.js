import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import Nav from "../../Nav/Nav";
import Drawer from "../Drawer/Drawer";
import DrawerToggle from "../Drawer/DrawerToggle/DrawerToggle";


const Toolbar = ()=>{
    return(
        <div className={classes.Toolbar}>
            <Logo/>
            <Nav/>
            <Drawer/>
            <DrawerToggle/>
        </div>
    );
}

export default Toolbar;