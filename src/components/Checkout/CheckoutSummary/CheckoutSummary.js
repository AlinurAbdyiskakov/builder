import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <AnimalPreview levels={{
          floor1: 5, 
          floor2: 10,
          floor3: 50,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;