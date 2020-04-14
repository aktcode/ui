import React, { Component} from "react";
import Card from "./other/card.js";

class Other extends Component{
    constructor(props){
        super(props);
    }

    setInfo(){
        if(this.props.othersInfo){
            return {__html: this.props.othersInfo};
        }
        return {__html: "None"};
    }
    render(){
        let otherStage;
        switch(this.props.variant){
            case 'Card':
                otherStage = <Card />
                break;
            default:
                otherStage = <div>DEFAULT</div>
        }
        return(
            <div className="header">
                
                {otherStage}
                <div className={"info " +(this.props.othersInfo ? '' : 'disNone')}>
                    <div id="aboutText">
                        <span dangerouslySetInnerHTML={this.setInfo()}></span>
                    </div>
                    <div id="about">About</div>
                </div>
            </div>
        )
    }
}

export default Other;