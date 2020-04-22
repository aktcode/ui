import React, { Component} from "react";
import Info from "../info.js";

class Form extends Component{
    constructor(props){
        super(props);
        this.state= {
            descriptionAvailable : true
        }
    }
 
    
    render(){
        return(
            <div className="formContainer">
                <div className={"form" + this.props.variant}> 
                    <span id="head">Log<span id="in">in</span></span>
                    
                    <input type="text" id="inp1" placeholder="User"></input>
                    <br />
                    <input type="password" id="inp2" placeholder="Password"></input>
                    <br />
                    <span id="submit">Submit</span>
                </div>
                
                <Info infoContent={this.props.formInfo} />
            </div>
        )
    }
}

export default Form;