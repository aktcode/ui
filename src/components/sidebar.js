import React, { Component} from "react";
import Form from "./forms/form.js"

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            formVariant : 1,
            forms: [1,2,3]
        }

        this.handleFormSelection = this.handleFormSelection.bind(this);
    }

    componentDidMount(){

    }

    handleFormSelection(){
        
    }

    render(){
        const forms = this.state.forms.map(function(item){
            return <li key={item.toString()}> {item} </li>;
            });
        return(
            <>
                <div className="sidebar">
                    <span className="head">Elements</span>
                    <div className="ele">
                        <span className="eleHead">Login</span>
                        <ul>
                            {forms}
                        </ul>
                    </div>
                {this.handleFormSelection}
                </div>
                <Form variant={this.state.formVariant}/>
            </>
        )
    }
}

export default Sidebar;