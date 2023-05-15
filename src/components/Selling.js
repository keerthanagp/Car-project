import SellingData from "./SellingData";
import "./SellingStyle.css";

function Selling(props) {
  return (
    <div className="sell">
      <h1>Why carzz?</h1>
      <div className="cardtext">
        <SellingData
          heading="12 Months warrenty"
          text="Enjoy peace of mind with our 12 month Warranty that is standard across all cars that we sell"
        />
        <SellingData
          heading="7 days Return"
          text="Love it, keep it. Changed your mind? Return it within 7 days for a full refund"
        />
        <SellingData
          heading="Easy finance option"
          text="Become eligible for Zero Down Payment via EMIs of up to 72 months and instant loans"
        />
        <SellingData
          heading="140 quality checks"
          text="Inspected across 140 parameters and refurbished by auto-experts, our cars are ready for the road"
        />
      </div>
    </div>
  );
}

export default Selling;
