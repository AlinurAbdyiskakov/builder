import axios from "axios";
import { SET_ORDERS } from "./types";

export const set = (data) => ({
  type: SET_ORDERS,
  data: data
});

export const load = () => {
  return (dispatch) => axios
    .get('https://builder-e02c1-default-rtdb.firebaseio.com/orders.json')
    .then(response => dispatch(set(response.data)));
}