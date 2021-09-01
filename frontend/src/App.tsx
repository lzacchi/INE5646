import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar"

import HomePage from './pages/homepage';
import LoginPage from './pages/loginpage';

// importing pages components
import JobPage from './pages/jobpage';
import AdvertisePage  from './pages/advertisepage';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import OurTeam from "./pages/ourteam";

export default function App() {

  return (
    <>
    <NavBar/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />

      {/* Please change this. It does refresh and re-render every page.*/}
      <Route path="/anunciar" component={AdvertisePage} />
      <Route path="/contato" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/equipe" component={OurTeam} />

      <Route path="/joboffer/:id" component={JobPage} />

    </Switch>
  </>
  )

}