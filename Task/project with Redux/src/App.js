import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Searchbar from "./components/Searchbar";
import MyNavigation from "./MyNavigation";
import store from "./State/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer />
        <Header />
        <Searchbar />
        <MyNavigation />
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
