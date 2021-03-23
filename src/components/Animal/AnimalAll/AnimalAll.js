import classes from "./AnimalAll.module.css";

import salamiBackground from "../../../imges/logo.svg";
import tomatoBackground from "../../../imges/logo2.svg";


const AnimalAll = ({ type }) => {
  const types = {
    boat: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
    ship: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
   
  };

  return (
    <div className={classes.AnimalAll} style={types[type]}></div>
  );
}
export default AnimalAll;