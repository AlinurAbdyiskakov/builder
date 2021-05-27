import classes from "./Order.module.css";

const Order = ({ name, phone, address, animals,price }) => {
  const output = Object.keys(animals).map(label => <em key={label}>{label}: - {animals[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name:<strong style={{color:"blue"}}>{name}</strong> </li>
      <li>Phone:<strong style={{color:"blue"}}>{phone}</strong> </li>
      <li>Address:<strong style={{color:"blue"}}>{address}</strong> </li>
      <li >Animal  pet  shop: <h4>{output}</h4></li>
      <li className={classes.som} >the buy som :{price}</li>
      <li><h4 style={{color:"blue"}}> 😘✨⚡🙌Thanks for your purchase😘✨⚡🙌</h4></li>  
       <div>@Alinur</div>
    </ul>
 
    
  );
}

export default Order;