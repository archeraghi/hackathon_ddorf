
import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import './App.css';
import Map from './components/map'
import Nav from './components/Nav';
import NotDoneJet from './components/NotDoneJet';
import ReportForm from "./components/ReportForm"


function App() {
  return (
    <div className="App">
          <BrowserRouter>
            {window.location.pathname==="/report"? null: <Nav />}
            <Switch>
              <Route path="/map">
                <Map />
              </Route>
              <Route path="/teams">
                <NotDoneJet/>
              </Route>
              <Route path="/supply">
                <NotDoneJet/>
              </Route>
              <Route path="/report">
                <ReportForm />
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
