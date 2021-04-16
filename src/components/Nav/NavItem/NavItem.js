import classes from "./NavItem.module.css";
import {NavLink} from"react-router-dom";
const NavItem = ({children,url,exact}) => {
  return (
    <li className={classes.NavItem}>
      <NavLink to={url} activclassName={classes.active} exact={exact}>{children}</NavLink> 
    </li>
  );
}

export default NavItem;