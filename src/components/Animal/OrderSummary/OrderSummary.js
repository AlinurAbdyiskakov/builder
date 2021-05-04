import classes from "./OrderSummary.module.css";

const OrderSummary = ({ animals, price,}) => {
  const results = Object.keys(animals)
    .map(type => <li>{type}: {animals[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
      <div className={classes.div}>
     </div>
    </div>
  );
}

export default OrderSummary; 