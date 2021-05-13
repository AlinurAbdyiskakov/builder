import AnimalPreview from "./AnimalPreview/AnimalPreview";
import AnimalControls from "./AnimalControls/AnimalControls";
import OrderSummary from "./OrderSummary/OrderSummary";
import Modal from "../UI/Modal/Modal";
import classes from "./Animal.module.css";
import Button from"../UI/Button/Button"
import withAxios from "../withAxios";
import axios from "../../axios";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { load } from "../store/actions/Animal";
const Animal = ({history}) => {
const dispatch=useDispatch()
const animals=useSelector(state=>state.Animal.animals);
const price =useSelector(state=>state.Animal.price);
const [ordering, setOrdering] = useState(false);

useEffect(() => dispatch(load()), [dispatch]);


function startOrdering() {
  setOrdering(true);
}
function stopOrdering() {
  setOrdering(false);
}
function finishOrdering() {
      setOrdering(false);
      // loadDefaults();
      history.push('/checkout');
}
return (
  <div className={classes.Animal}>
    <div className={classes.Aimall}>
    <AnimalPreview
      animals={animals}
      price={price} />
    <AnimalControls
      animals={animals}
      startOrdering={startOrdering}
      />
    <Modal
      show={ordering}
      cancel={stopOrdering}>
        <OrderSummary
          animals={animals}
          price={price}
          />
        <Button onClick={finishOrdering} green="green">Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal></div>
  </div>
);
}



export default withAxios(Animal,axios) ;