import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import About from "./components/About";

function App() {
  return (
    <>
      <BrowserRouter path="/">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
