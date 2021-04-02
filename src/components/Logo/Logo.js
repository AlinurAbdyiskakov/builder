import classes from "./Logo.module.css";
import logo from "../../imges/animal-shop.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  <span>pet shop</span>
        </div>
    );
}

export default Logo;