import React, { Component} from "react";
import CardLogo from "../../../public/assets/images/card_bg.svg";
import Data from '../../data/main.js';
class Card extends Component{
    render(){
        const bgContStyle = {
            backgroundImage:  `url(${CardLogo})`
        };
        return(
            <div className="cardContainer">
                <span className="card">
                    <span className="bgCont" style={bgContStyle}></span>
                    <span className="top-right">Bank</span>
                    <span className="details">
                        <span className="number">{Data.dummy.get("cardNumber")}
                        <span className="expiry">{Data.dummy.get("cardExpiry")}</span>
                        </span>
                        <span className="name">{Data.dummy.get("name")}</span>
                        {/* <img src={CardLogo} /> */}
                    </span>
                    
                </span>
            </div>
        )
    }
}

export default Card;