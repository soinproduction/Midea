import './App.css';
import Header from "./header/Header";
import Footer from "./footer/Footer";
import {path} from "../helpers/path";
import  {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import SingleProduct from "../pages/SingleProduct";
import Basket from "../pages/Basket";
import Favorite from "../pages/Favorite";
import Provider from "../store/store";


function App() {
  return (
      <Provider>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={`${path.products}/:id`} element={<SingleProduct/>}/>
                <Route path={path.basket} element={<Basket/>}/>
                <Route path={path.favorite} element={<Favorite/>}/>
            </Routes>
            <Footer/>
        </Router>
      </Provider>
  );
}
export default App;
