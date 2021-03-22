import classes from "./AnimalAll.module.css";

const AnimalAll = ({ type }) => {
  return (
    <div className={classes.AnimalAll}>{type}</div>
  );
}

export default AnimalAll;