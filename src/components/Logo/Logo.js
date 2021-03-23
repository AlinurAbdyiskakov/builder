import classes from "./Logo.module.css";
import logo from "../../imges/logo-Animal-shop.jpg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  <span>Shop house Animal</span>
        </div>
    );
}

export default Logo;