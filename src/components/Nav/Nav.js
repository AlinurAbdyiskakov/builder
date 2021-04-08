
import classes from "./Nav.module.css";
import Navbuilder from "./Navbuilder/Navbuilder"
const Nav = () => {
  return (
    <div className={classes.Nav}><ul>
      <Navbuilder url="/" active>Pet shop builder</Navbuilder>
      <Navbuilder url="/">Authentacte</Navbuilder>
    </ul></div>
  );
}

export default Nav;