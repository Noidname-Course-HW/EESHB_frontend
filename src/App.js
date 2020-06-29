import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NavBar from './component/NavBar';
// import Home from './Home';
import Login from './Login';
import SellBook from './SellBook';
import BuyBook from './BuyBook';
import FeedBack from './FeedBack';
import FillSuccess from './FillSuccess';

const App = () =>{
  return(
    <div>
      <NavBar/>
      <div id="App_container">
      {/* <Route path="/Home" component={Home}/> */}
      <Route path="/SellBook" component={SellBook}/>
      <Route path="/BuyBook" component={BuyBook}/>
      <Route path="/Login" component={Login}/>
      <Route path="/FeedBack" component={FeedBack}/>
      <Route path="/FillSuccess" component={FillSuccess}/>
      </div>
    </div>
  )
}
export default App;
