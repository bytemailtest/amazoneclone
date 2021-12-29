import React from "react";
import Home from './Home';
import "./Header.css";
import Mainlogo from './logo.png';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import ErrorPage from "./Errorpage";
import { auth } from "./firbase";
import { loadStripe } from "@stripe/stripe-js";
import Teststate from "./Teststate";
// import { useElements } from "@stripe/react-stripe-js";

function Header() {  
  const [{ basket, user }, dispatch] = useStateValue();
  const Promise = loadStripe('pk_test_51K7EteSHaoQqsJhdDUDDc88uSBSJyu6pQAKUxr43MqjTMHT1uKDldjjnnvJVp2JF08cfEzQN8ZkhjODUvAkUYRnA00OgisgMh4');
  const handleAuth= ()=>{
    if(user){
      auth.signOut();
    }
  }
  return (
    <Router>
      <div className="header">
      <Link to="/"><img className="header__logo" src={ Mainlogo } alt='Logo' /></Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuth} className="header__option">
            <span className="header__optionLineOne">Hello { !user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
            </span>
          </div>
          </Link>
      </div>
    </div>
        <Routes>
        <Route path="/" element={<Home/>} exact></Route> 
        <Route path="/checkout" element={<Checkout/>} exact></Route>
        <Route path="/payment" element={<Payment />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/tstate" element={<Teststate />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>

  );
}

export default Header;