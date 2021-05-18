import { useSelector } from "react-redux";
import AnimalPreview from "../Animal/AnimalPreview/AnimalPreview";
import CheckoutForm from "./CheckoutSummary/ChackoutForm/ChackoutForm";
import axios from "../../axios";
import withAxios from "../withAxios";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
  const animals = useSelector(state => state.animals.animals);
  const price = useSelector(state => state.animals.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json', {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      animals: animals,
      price: price,
    }).then(response => {
      history.replace('/');
    });

    event.preventDefault();
  }

  return (
 <div className={classes.Checkout}>
<AnimalPreview animals={animals} price={price} /> 
<CheckoutForm
 cancelCallback={cancelCallback}
 submitCallback={submitCallback} />
 </div>

  );
}
 
export default withAxios(Checkout, axios);