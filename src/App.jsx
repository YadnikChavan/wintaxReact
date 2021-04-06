import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
//import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Redirect, Route, Switch } from 'react-router'
import Home from './components/Home'
import Navbar from './components/Navbar'
import "./index.css"
import CallBack from './components/CallBack';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/service" component={Services}/>
        <Route exact path="/callback" component={CallBack}/>
        <Redirect to='/'/>
      </Switch>
      <Footer/>
    </>
  )
}
 
export default App
