import classes from "./Logo.module.css";
import logo from "../../imges/pet-shop.jpg";


const Logo = ()=> {
    return(
        <div className={classes.Logo}>
  <img src={logo} alt="animal"/>
  {/* <span>pet shop</span> */}
        </div>
    );
}

export default Logo;