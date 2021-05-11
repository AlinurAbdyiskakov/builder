
import { useEffect } from "react";
import Order from "./Order/Order";
import classes from "./Orders.module.css";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../store/actions/orders";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  useEffect(() => dispatch(load()), [dispatch]);
  const results =  orders.map(order => <Order {...order} />);

  return (
    <div className={classes.Orders}>
      
      {results}<div> ⚡  Alinur the Builder  ⚡ </div>
    </div>
  );
}

export default Orders;