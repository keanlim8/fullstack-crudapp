import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom'

import ListGuest from './components/ListGuest'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
          <Header />
            <div className="container">
              <Switch>
                  <Route path="/" component={ListGuest}></Route>
                  <Route path="/guests" component={ListGuest}></Route>
                  <ListGuest />
              </Switch>
            </div>
          <Footer />
      </Router>
    </div>

  );
}

export default App;
