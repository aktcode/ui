import React, { Component} from "react";
import Form from "./forms/form.js"

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            formVariant : 1,
            forms: [1 , 2, 3]
        }
    }

    componentDidMount(){
    }

    handleFormSelection(index){
        this.setState({
            formVariant : index
        })
    }

    render(){
        const forms = this.state.forms.map(function(item){
            return <li id="forms" key={item.toString()}> {item} </li>;
            });
        return(
            <>
                <div className="sidebar">
                    <span className="head">Elements</span>
                    <div className="ele">
                        <span className="eleHead">Login</span>
                        <ul>
                            { this.state.forms.map((item) => {
                                return(<li id={item == this.state.formVariant ? 'active' : ''} onClick={this.handleFormSelection.bind(this,item)} key={item}>{item}</li>)
                            })
                            }
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