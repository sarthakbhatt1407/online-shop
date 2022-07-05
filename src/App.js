import { Fragment } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/Home/home";

const App = () => {
  return (
    <Fragment>
      <Home />
      <Navbar />
    </Fragment>
  );
};
export default App;
