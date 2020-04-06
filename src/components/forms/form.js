import React, { Component} from "react";

class Form extends Component{
    constructor(props){
        super(props);
        this.state= {
            descriptionAvailable : true
        }
    }
    //Read info from src/data/main, using dangerouslySetInnerHTML to allow basic html markups in the data file itself
    setInfo(){
        if(this.props.formInfo){
            return {__html: this.props.formInfo};
        }
        return {__html: "None"};
    }
    
    render(){
        return(
            <div className="formContainer">
                <div className={"form" + this.props.variant}> 
                    <span id="head">Log<span id="in">in</span></span>
                    <br />
                    <input type="text" id="inp1" placeholder="User"></input>
                    <br />
                    <input type="password" id="inp2" placeholder="Password"></input>
                    <br />
                    <span id="submit">Submit</span>
                </div>

                <div className={"info " +(this.props.formInfo ? '' : 'disNone')}>
                    <div id="aboutText">
                        <span dangerouslySetInnerHTML={this.setInfo()}></span>
                    </div>
                    <div id="about">About</div>
                </div>
            </div>
        )
    }
}

export default Form;