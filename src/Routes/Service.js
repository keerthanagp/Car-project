import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import abtpageimg from "../assets/abtpageimg.jpg";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="heroAbt" heroImg={abtpageimg} url="/" btnClass="hide" />
      <Footer />
    </>
  );
}
export default Service;
