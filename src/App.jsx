import Header from "./components/Header";
import Form from "./components/Form";
import Methodology from "./components/Methodology";
import Targets from "./components/Targets";
import Results from "./components/Results";
import Confirmation from "./components/Confirmation";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Form />
            <Methodology />
            <Targets />
            <Results />
            <Confirmation />
            <Footer />
          </>
        }
      />
      <Route
        path="/nosotros"
        element={
          <>
            <Header />
            <Nosotros />
            <Footer />
          </>
        }
      ></Route>
      <Route
        path="/contacto"
        element={
          <>
            <Header />
            <Contact />
            <Footer />
          </>
        }
      ></Route>
    </Routes>
  );
}

export default App;
