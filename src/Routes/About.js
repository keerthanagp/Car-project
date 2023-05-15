import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import abtpageimg from "../assets/abtpageimg.jpg";
import Aboutus from "../components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="heroAbt" heroImg={abtpageimg} url="/" btnClass="hide" />
      <Aboutus />

      <Footer />
    </>
  );
}
export default About;
