import  './App.css';
import React  from 'react'
import Navbar from './component/navbar';
import {Switch,Route} from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Login from './pages/login'
import Logout from './pages/Logout';
import logo from './carlogo.png'

//  comment added

function App() {

  return (
    <div className="container">
     <div class="item1">
          <img className="logoimg" src={logo} alt="car logo"/>
          <p>Super Car Rocks </p>
          <button class="logo"><i>Super Cars</i> </button>
          <Navbar></Navbar>
      </div>
    <div className="item2">
      <Switch>
                <Route path="/" component={() => (<Home/>)} exact />
                <Route path="/about" component={() => (<About />)} />                
                <Route path="/Login"component={() => (<Login  />)} />
                <Route path="/Logout"component={() => (<Logout  />)} />                  
      </Switch>

    </div>
    </div>
  );
}

export default App;
