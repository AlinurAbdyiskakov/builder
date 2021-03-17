import classes from "./Logo.module.css";
import logo from "../../imges/logo.svg";
// import logo from "../../imges/logo.svg1.webp";

const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo}/>
  <span>animal horse</span>
        </div>
    );
}

export default Logo;