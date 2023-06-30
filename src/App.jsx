import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Plan from "./components/Plan";
import Review from "./components/Review";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className=" bg-corner bg-no-repeat bg-cover relative">
        <div className=" max-w-[1440px] mx-auto">
          <Header />
          <Hero />
          <About />
        </div>
      </div>
      <div className="relative">
        <div className="max-w-[1440px] mx-auto">
          <Plan />
        </div>
      </div>
      <div className=" overflow-hidden">
        <Review />
      </div>
      <div className="bg-polygon bg-no-repeat bg-cover">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
