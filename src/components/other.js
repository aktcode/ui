import React, { Component} from "react";
import Card from "./other/card.js";
import Info from "./info.js";
import Phone from "./other/phone.js";

class Other extends Component{
    constructor(props){
        super(props);
    }

    render(){
        let otherStage;
        switch(this.props.variant){
            case 'Card':
                otherStage = <Card />
                break;
            case "Phone":
                otherStage = <Phone />
                break;
            default:
                otherStage = <div>DEFAULT</div>
        }
        return(
            <div className="header">  
                {otherStage}
                <Info infoContent={this.props.othersInfo} />
            </div>
        )
    }
}

export default Other;