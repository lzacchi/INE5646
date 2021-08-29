import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar"


// We will create these two pages in a moment

import HomePage from './pages/homepage';

import JobPage from './pages/jobpage';

export default function App() {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route path="/joboffer/:id" component={JobPage} />

    </Switch>
  </>
  )

}