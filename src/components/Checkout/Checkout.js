import axios from "axios";
import CheckoutSummary from "./CheckoutSummary/CheckoutSummary"

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  function submitCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    const order = {
      name: data.get('name'),
      phone: data.get('phone'),
      address: data.get('address'),
      ingredients:{
        Dog: 80,
        Pig: 70,
        Mouse:60,
        Cat:20,
        Reccoon: 67,
        Parrot:45,
      }
    }
    axios.post('https://builder-e02c1-default-rtdb.firebaseio.com/orders.json',order)
    .then(response =>{
      history.replace('/');
    })

    console.log(order)
  }

  return (
    <div>
      <CheckoutSummary
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default Checkout;