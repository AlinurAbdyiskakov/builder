
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem"
const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" active>Pet shop builder</NavItem>
      <NavItem url="/">Authentacte</NavItem>
    </ul>
  );
}

export default Nav;