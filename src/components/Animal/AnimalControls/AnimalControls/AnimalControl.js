import AnimalAll from "../../AnimalAll/AnimalAll";
import classes from "./AnimalControl.module.css";

const AnimalControl = ({ type, count }) => {
  return (
    <div className={classes.AnimalControl}>
      <button className={classes.more}>+</button>
      <div className={classes.ingredient}>
        <AnimalAll type={type} fixed />
      </div>
      <button className={classes.less}>-</button>
    </div>
  );
}

export default AnimalControl;