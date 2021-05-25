import { useSelector } from "react-redux";
import AnimalPreview from "../Animal/AnimalPreview/AnimalPreview";
import CheckoutForm from "./CheckoutSummary/ChackoutForm/ChackoutForm";
import axios from "../../axios";
import withAxios from "../withAxios";
import classes from "./Checkout.module.css";

const Checkout = ({ history }) => {
  const { token , id } = useSelector(state => state.auth);
  const animals = useSelector(state => state.Animal.animals);
  const price = useSelector(state => state.Animal.price);

  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    const data = new FormData(event.target);

    axios.post('/orders.json?auth=' + token, {
      name: data.get('name'),
      address: data.get('address'),
      phone: data.get('phone'),
      animals: animals,
      price: price,
      userId: id
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