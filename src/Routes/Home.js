import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Popularcars from "../components/Popularcars";
import Selling from "../components/Selling";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
        title="Lets buy cars in Carzz"
        text="Choose your favrouite cars"
        buttonText="Just drive"
        url="/"
        btnClass="show"
      />
      <Popularcars />
      <Selling />
      <Footer />
    </>
  );
}
export default Home;
