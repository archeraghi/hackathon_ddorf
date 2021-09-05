
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Map from './components/map'
import Nav from './components/Nav';
import NotDoneJet from './components/NotDoneJet';

function App() {
  return (
    <div className="App">
          <BrowserRouter>
            <Nav />
            <Switch>
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/team">
                <NotDoneJet/>
              </Route>
              <Route path="/suply">
                <NotDoneJet/>
              </Route>
              <Route path="/">
                <NotDoneJet/>
              </Route>
            </Switch>
          </BrowserRouter>
        
    </div>
  );
}

export default App;
