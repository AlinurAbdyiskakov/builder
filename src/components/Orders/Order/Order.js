import classes from "./Order.module.css";

const Order = ({ name, phone, address, animals,price }) => {
  const output = Object.keys(animals).map(label => <em>{label}: - {animals[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name:<strong>{name}</strong> </li>
      <li>Phone:<strong>{phone}</strong> </li>
      <li>Address:<strong>{address}</strong> </li>
      <li >Animal  pet  shop: {output}</li>
      <li >the buy som {price}</li>
      <li><strong>Thanks for your purchase</strong></li>  
       <div>@Alinur</div>
    </ul>
 
    // хамелион черепаха енот кошка хамяк сабака
  );
}

export default Order;