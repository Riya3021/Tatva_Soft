import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import UpdateProfile from "./pages/UpdateProfile";
import Register from "./pages/Register";
import Book from "./pages/Book/Book";
import AddBook from "./pages/Book/AddBook";
import EditUser from "./pages/User/EditUser";
import User from "./pages/User/User";
import Categories from "./pages/Categories/Categories";
import AddCategories from "./pages/Categories/AddCategories";
import CartPage from "./pages/Cart";
import { useSelector } from "react-redux";

function MyNavigation() {
  const authData = useSelector((state) => state.auth.user);
  const Redirect = <Navigate to={"/login"} />;

  return (
    <Routes>
      <Route path="/" element={authData.id ? <Home /> : Redirect} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/register"
        element={!authData.id ? <Register /> : Redirect}
      />
      <Route
        path="/update-profile"
        element={authData.id ? <UpdateProfile /> : Redirect}
      />

      <Route path="/user" element={authData.id ? <User /> : Redirect} />
      <Route
        path="/edit-user/:id"
        element={authData.id ? <EditUser /> : Redirect}
      />
      <Route
        path="/categories"
        element={authData.id ? <Categories /> : Redirect}
      />
      <Route
        path="/add-category"
        element={authData.id ? <AddCategories /> : Redirect}
      />
      <Route
        path="/add-category/:id"
        element={authData.id ? <AddCategories /> : Redirect}
      />
      <Route path="/book" element={authData.id ? <Book /> : Redirect} />
      <Route path="/add-book" element={authData.id ? <AddBook /> : Redirect} />

      <Route
        path="/add-book/:id"
        element={authData.id ? <AddBook /> : Redirect}
      />
      <Route
        path="/cart-page"
        element={authData.id ? <CartPage /> : Redirect}
      />
    </Routes>
  );
}

export default MyNavigation;

