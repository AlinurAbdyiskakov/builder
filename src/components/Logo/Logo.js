import classes from "./Logo.module.css";
import logo from "../../imges/logo2.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  <span>Sasebo Heavy Industries</span>
        </div>
    );
}

export default Logo;