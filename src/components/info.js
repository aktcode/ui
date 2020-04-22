import React from "react";

/**
 * This is the info section, it can be used to display info about ui components
 * Props to pass : 'infoContent' and that's it!
 * Caution: Only set simple text or basic html markdown as we are using dangerouslySetInnerHTML
 */
class Info extends React.Component{
    constructor(props){
        super(props);
    }
    setInfo(){
        if(this.props.infoContent){
            return {__html: this.props.infoContent};
        }
        return {__html: "None"};
    }
    render(){
        return(
            <div className={"info " +(this.props.infoContent ? '' : 'disNone')}>
                <div id="aboutText">
                    <span dangerouslySetInnerHTML={this.setInfo()}></span>
                </div>
                <div id="about">About</div>
            </div>
        )
    }
}

export default Info;