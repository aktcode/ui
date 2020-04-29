import React from "react";
import HomeImg from "../../public/assets/images/home_bg.jpg";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
class Home extends React.Component{

    render(){
        const bgStyle = {
            backgroundImage:  `url(${HomeImg})`
        }
        return(
            <>
            <div className="home" >
                <div className="head">
                    <div className="title">UI<span className="title-sub">What can we make?</span></div> 
                    <Link to="/elements"><div className="sub"><span>Explore</span></div></Link>
                </div>
                <div className="home-footer">
                <a href="https://github.com/aktcode/ui" target="blank">Github</a>
            </div>
            </div>
            
            </>
        )
    }
}

export default Home;