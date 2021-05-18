import AnimalAll from "../AnimalAll/AnimalAll";
import classes from "./AnimalPreview.module.css";
const AnimalPreview = ({ animals,price }) => {
  const result = [];
  for (const animal in animals) {
    for (let i = 0; i < animals[animal]; i++) {
      result.push(<AnimalAll key={[animal + i]} type={[animal]} />)
    }
  }

  return (
    <div className={classes.AnimalPreview}>
    <div className={classes.color}>
    
    <div className={classes.name}> {[result]}</div>
    </div>
    <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default AnimalPreview;