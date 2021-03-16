import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";


const Toolbar = ()=>{
    return(
        <div className={classes.Toolbar}>
            <Logo/>
           
        </div>
    );
}

export default Toolbar;