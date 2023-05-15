import "../components/Popularcars.css";
import Popularcardata from "../components/Popularcardata";
import images1 from "../assets/image1.jpg";
import images2 from "../assets/image2.jpg";
import images3 from "../assets/image3.jpg";
import images4 from "../assets/image4.jpg";

const Popularcars = () => {
  return (
    <div className="popularcars">
      <h1>Popular Cars</h1>
      <p>Paragraph for popularcars </p>
      <Popularcardata
        className="normal"
        title="Heading for popularcars"
        heading="This is a paragraph for poulation cars a vehicle moving on wheels:
      such as. archaic : carriage, chariot. : a vehicle designed to move
      on rails (as of a railroad) The train has 20 cars automobile."
        img1={images1}
        img2={images2}
        img3={images3}
        img4={images4}
      />
    </div>
  );
};
export default Popularcars;
