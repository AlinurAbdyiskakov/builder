import Button from "../../UI/Button/Button";
import AnimalControl from "./AnimalControl/AnimalControl";
import classes from "./AnimalControls.module.css";

const AnimalControls = ({
  animals,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const animal in animals) {
  total += animals[animal];
  results.push(<AnimalControl
  key={animal}
  count={animals[animal]}
  type={animal} />)
  }

  return (
  <div className={classes.AnimalControls}>
  <h1>Animals</h1>
  {results}
  <Button disabled={!total} onClick={startOrdering}>Order</Button>
  </div>
  );
}

export default AnimalControls;