import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactimg from "../assets/contactimg.jpg";
import Footer from "../components/Footer";
import Contactform from "../components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="heroContact" heroImg={contactimg} url="/" />
      <Contactform />
      <Footer />
    </>
  );
}
export default Contact;
