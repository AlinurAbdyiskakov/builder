import classes from "./Order.module.css";

const Order = ({ name, phone, address, ingredients }) => {
  const output = Object.keys(ingredients).map(label => <em>{label}: - {ingredients[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name:<strong>{name}</strong> </li>
      <li>Phone:<strong>{phone}</strong> </li>
      <li>Address:<strong>{address}</strong> </li>
      <li>Animal  pet  shop: {output}</li>
      <li><strong>Thanks for your purchase</strong></li>
    </ul>
    // хамелион черепаха енот кошка хамяк сабака
  );
}

export default Order;