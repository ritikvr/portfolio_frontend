import { Fragment } from "react";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Navbar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
