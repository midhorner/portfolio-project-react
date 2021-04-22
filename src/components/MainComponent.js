import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Location from "./LocationComponent";

class Main extends Component {
  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/location" component={Location} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;