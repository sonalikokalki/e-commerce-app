// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
