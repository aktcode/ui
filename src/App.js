import React, { Component} from "react";
import {hot} from 'react-hot-loader';
import "./App.less";
import Header from "./components/header.js"
import Sidebar from "./components/sidebar.js"
import Home from "./components/home.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component{
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    Main.init();
  }
  render(){
    return(
      <Router>
        <>
        <div className="App" style={{backgroundColor: this.props.bgColor}}>
            {/* <Header /> */}
                {/* <Link to="/elements">Elements</Link> */}
              
            <Switch>
              <Route path="/elements">
                <Sidebar />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </>
      </Router>   
    );
  }
}

export default hot(module)(App);
