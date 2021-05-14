import classes from "./OrderSummary.module.css";
const OrderSummary = ({ animals, price,}) => {
  const Animal = {
  Dog: "  Dog  ",
  Cat:"Cat",
  Reccoon: "Reccoon",
  Chameleon: "Chameleon",
  Hamster:"Hamster",
  Turtle:"Turtle",
   
  }
  const results = Object.keys(animals)
    .map(type => <li key={type}>{type}: {animals[type]}</li>);

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