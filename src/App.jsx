import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Gallery /> 
      <Reservations />  
      <Contact />  
      <Footer />
    </>
  );
}

export default App;