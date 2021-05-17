import classes from "./OrderSummary.module.css";
const OrderSummary = ({ animals, price,}) => {
  const Animal = {
  dog: "  Dog  ",
  cat:"Cat",
  reccoon: "Reccoon",
  chameleon: "Chameleon",
  hamster:"Hamster",
  turtle:"Turtle",
   
  }
  const results = Object.keys(animals)
    .map(type => <li key={type}>{Animal[type]}: {animals[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
      {results}
      </ul>
      <strong>Total price: 
      {price.toFixed(1)} 
      som</strong>
      <div className={classes.div}>
     </div>
    </div>
  );
}

export default OrderSummary; 