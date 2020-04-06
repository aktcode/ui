import React, { Component} from "react";
import {hot} from 'react-hot-loader';
import "./App.less";
import Header from "./components/header.js"
import Sidebar from "./components/sidebar.js"

class App extends Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    Main.init();
  }
  render(){
    return(
        <div className="App" style={{backgroundColor: this.props.bgColor}}>
          {/* <Header /> */}
          <Sidebar />
        </div>
    );
  }
}

export default hot(module)(App);
