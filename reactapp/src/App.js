import React from 'react'
import Signin from './Signin'


import { BrowserRouter as Router, Route , Switch } from "react-router-dom";

import Navbar from './navbar/Navbar';
import Signup from './Signup';
import Home from './components/Home';
import Search from './components/Search';
import Playlist from './components/Playlist';

function App() {
  return (
    <div>
       <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Signin} />
          <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
          <Route path='/Home' component={Home} />
          <Route path='/Search' component={Playlist} />
          <Route path='/Playlist' component={Search} />
        </Switch>
      </Router>

      {/* <Home /> */}
    </div>
  )
}

export default App