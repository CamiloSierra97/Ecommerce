import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/Home";
import Login from "./components/routes/Login";
import Product from "./components/routes/Product";
import ProtectedRoutes from "./components/routes/ProtectedRoutes";
import Purchases from "./components/routes/Purchases";
import Cart from "./components/routes/Cart";
import Navbar from "./components/shared/Navbar";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./store/slices/products.slice";
import FormSignUp from "./components/signUp/FormSignUp";
import { getUser } from "./store/slices/user.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getUser());
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<FormSignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
