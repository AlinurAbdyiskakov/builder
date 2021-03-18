
import classes from "./Drawer.module.css";
import Nav from "../../Nav/Nav";


const Drawer = ()=> {
    return(
        <div className={classes.Drawer}>
        <div className={[classes.content, classes.closed].join(",")}>
            <Nav/></div>
        </div>
    );
}

export default Drawer;