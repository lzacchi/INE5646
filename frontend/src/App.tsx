import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import NavBar from "./components/navbar/navbar"

import HomePage from './pages/homepage/homepage';
import LoginPage from './pages/loginpage/loginpage';

// importing pages components
import JobPage from './pages/jobpage/jobpage';
import AdvertisePage  from './pages/advertisepage/advertisepage';
import Contact from './pages/contact/contact';
import FAQ from './pages/faq/faq';
import OurTeam from "./pages/ourteam/ourteam";


export default function App() {
  const location = useLocation();

  return (
    <>
    {/* Hide navbar in login page */}
    {location.pathname != "/login" &&
      <NavBar/>}
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