import React, { Component} from "react";
import CardLogo from "../../../public/assets/images/card_bg.svg";
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
                        <span className="number">3141 5926 5358 9793
                        <span className="expiry">12/23</span>
                        </span>
                        <span className="name">Abhishek Kumar Tiwari</span>
                        {/* <img src={CardLogo} /> */}
                    </span>
                    
                </span>
            </div>
        )
    }
}

export default Card;