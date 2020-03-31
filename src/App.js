import React, { Component} from "react";
import {hot} from 'react-hot-loader';
import "./App.less";
import Form from "./components/forms/form.js"
import Header from "./components/header.js"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <Form />
      </div>
    );
  }
}

export default hot(module)(App);
