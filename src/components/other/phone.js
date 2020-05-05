import React, { Component} from "react";
import Data from '../../data/main.js';
import PhoneBg from "../../../public/assets/images/phone_bg.jpg";

class Phone extends Component{
    constructor(props){
        super(props);
        this.state = {
            totalShims : [1,2,3,4,5]
        }
    }
    render(){
        const bgContStyle = {
            backgroundImage:  `url(${PhoneBg})`
        };
        
        return(
            

            <div className="phoneContainer">
                <div className="phone">
                <span className="bgCont" style={bgContStyle}></span>
                <span className="details">
                    <span className="time">12 : 45</span>
                    <span className="more">12 Notifications</span>
                    <span className="shimBars">
                    {this.state.totalShims.map((item)=> {
                        return <span className="shim" key={item}></span>
                    })}
                    </span>
                </span>
                <span className="swipe-up">
                    <span>Swipe up</span></span>
                </div>
            </div>
        )
    }
}

export default Phone;