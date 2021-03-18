import classes from "./Logo.module.css";
import logo from "../../imges/logo.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  <span>animal horse</span>
        </div>
    );
}

export default Logo;