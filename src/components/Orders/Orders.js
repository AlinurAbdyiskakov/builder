import axios from "axios";
import { useEffect, useState } from "react";
import Order from "./Order/Order";
import classes from "./Orders.module.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('https://builder-e02c1-default-rtdb.firebaseio.com/orders.json')
      .then(response => {
        setOrders(Object.values(response.data));
      });
  }, []);

  const results =  orders.map(order => <Order {...order} />);

  return (
    <div className={classes.Orders}>
      
      {results}<div></div>
    </div>
  );
}

export default Orders;