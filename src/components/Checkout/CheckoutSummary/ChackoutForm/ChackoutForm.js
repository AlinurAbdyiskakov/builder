import Button from "../../../UI/Button/Button";
import classes from "./ChackoutForm.module.css"
const ChacoutForm = ({submitCallback, cancelCallback }) => {
    return (  <form className={classes.ChacoutForm} onSubmit={submitCallback}>
        <div><label for="name">Nmae</label>
        <input type="text" id="name" name="name"></input></div>
        <div><label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone" placeholder="0552955915" required pattern="0[0-9]{9}"></input></div>
        <div><label for="address">Address</label>
        <input type="text" id="address" name="address"></input></div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
    </form>

 );
}
 
export default ChacoutForm;