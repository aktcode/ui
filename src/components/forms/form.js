import React, { Component} from "react";

class Form extends Component{
    render(){
        return(
            <div className="formContainer">
                <div className={"form" + this.props.variant}> 
                    <span id="head">Login</span>
                    <br />
                    <input type="text" id="user" placeholder="user"></input>
                    <br />
                    <input type="password" id="pass" placeholder="password"></input>
                    <br />
                    <span id="submit">Submit</span>
                </div>
            </div>
        )
    }
}

export default Form;