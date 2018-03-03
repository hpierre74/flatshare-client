import React, { Component } from 'react';
//import Axios from 'axios';
import './App.css';
//import { Container } from "reactstrap";
import Home from './components/home/home.jsx';
import Flat from "./components/flats/flat.jsx";
//import Tasks from "./components/tasks/tasks.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.config = {
      headers: {
        'accept': 'application/ld+json'
      }
    }
    this.LoginLogout = this.LoginLogout.bind(this);
    this.state = {
      isLogged:false
    }
  }

  LoginLogout(flat_user) {
    console.log(flat_user,'isLogged !')
    this.setState({ 
      isLogged : !this.state.isLogged,
      flat_user : flat_user
    });
  }
  
  render() {
    return (
      <div className="App">
        {(this.state.isLogged)?           //If user is logged in...
          <Flat 
            flat_user={this.state.flat_user}
            config={this.config}         
          />                              //...display his Flat UI
        :                                 //...else, display home layout
          <Home
            config={this.config} 
            log={this.LoginLogout}
            isLogged={this.state.isLogged}
          />
        } 
      </div>
    );
  }
}

export default App;
