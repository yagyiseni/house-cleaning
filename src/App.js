import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import {Redirect, Route,Switch} from 'react-router-dom'
import Homepage from './pages/Homepage';
import AllUsers from './pages/AllUsers';
import SingleUser from './pages/SingleUser';
import Browse from './pages/Browse';
import BookingStatus from './pages/BookingStatus';
import Register from './pages/Register';
import Footer from './components/Footer/Footer.js';
import ScrollToTop from './components/ScrollToTop';
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/users/" component={AllUsers} />
        <Route exact path="/users/:slug" component={SingleUser} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/booking" component={BookingStatus}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
