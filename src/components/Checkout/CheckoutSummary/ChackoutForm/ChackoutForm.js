import Button from "../../../UI/Button/Button";
import classes from "./ChackoutForm.module.css"
const ChacoutForm = ({ cancelCallback }) => {
    return (  <form className={classes.ChacoutForm}>
        <div><label for="name">Nmae</label>
        <input type="text" id="name" name="name"></input></div>
        <div><label for="phone">Phone</label>
        <input type="tel" id="phone" name="phone"></input></div>
        <div><label for="address">Address</label>
        <input type="text" id="address" name="address"></input></div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
    </form>

 );
}
 
export default ChacoutForm;