
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Provider} from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
        <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
       </>
      </Router>
      </Provider>
      
    );
  }
  
}

export default App;
