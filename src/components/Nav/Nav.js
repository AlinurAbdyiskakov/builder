
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={classes.Nav}><ul>
      <li><a href="./Navbuilder.js">Pet shop builder</a></li>
      <li><a href="./Navorder.js">Authentacte</a></li>
    </ul></div>
  );
}

export default Nav;