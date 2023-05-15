import "../components/SellingStyle.css";

function SellingData(props) {
  return (
    <div className="card">
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}
export default SellingData;
