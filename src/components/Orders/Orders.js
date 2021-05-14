import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { load } from "../store/actions/orders";
import Order from "./Order/Order";
import withAxios from "../withAxios";
import axios from "../../axios";
import classes from "./Orders.module.css";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders);

  useEffect(() => dispatch(load()), [dispatch]);
  const results =  orders.map(order => <Order key={order.id} {...order} />);

  return (
    <div className={classes.Orders}>
      {results}<div> ✔🎉⚡  Alinur the Builder  ⚡ 🎉✔ </div>
    </div>
  );
}

export default withAxios(Orders,axios) ;