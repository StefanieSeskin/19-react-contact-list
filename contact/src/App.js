//My Peeps contains list of links to contacts
//Each contact has name.first, name.last,
// email, phone with () around area code,
// location.city, location.state
//USE contact.id to find each person
//using props
//const index number name.first.find
//Don't know how to make MY PEEPS go away onClick of 

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Contact from './pages/Contact'
import ContactDetail from './pages/ContactDetail'
import React from 'react';
// import ReactDom from 'react-dom';
import './index.css';

export default function App(props) {
  return (
    <Router>
      <div>
        {/* <div className = "fullList"><h2>My Peeps</h2></div> */}
        <Switch>
          <Route exact path="/" component={Contact}></Route>
          <Route path="/detail/:id" component={ContactDetail}></Route>
        </Switch>
      </div>
    </Router>
  );
}