import classes from "./CheckoutSummary.module.css";
import AnimalPreview from "../../Animal/AnimalPreview/AnimalPreview";
import Button from "../../UI/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
      <AnimalPreview ingredients={{
          Dog: 8,
          Pig: 7,
          Mouse:6,
          Cat:2,
          Reccoon: 6,
          Parrot:4,
        }} price={342} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}
 
export default CheckoutSummary;