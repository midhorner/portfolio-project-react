import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Location from "./LocationComponent";
import Menu from './MenuComponent';
import About from './AboutComponent';
import { MERCH } from './shared/merch';
import { FOOD } from './shared/menu';
import { COCKTAILS } from './shared/cocktails';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: MERCH,
      food: FOOD,
      cocktails: COCKTAILS
    }
  }
  render() {
    return(
      <>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/location" component={Location} />
          <Route exact path="/menu" render={() => <Menu food={this.state.food} cocktails={this.state.cocktails} /> }/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;