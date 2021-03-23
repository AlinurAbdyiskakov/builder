import classes from "./Logo.module.css";
import logo from "../../imges/animal-shop.svg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  <span>Shop house Animal</span>
        </div>
    );
}

export default Logo;