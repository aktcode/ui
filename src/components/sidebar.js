import React, { Component} from "react"
import Form from "./forms/form.js"
import Data from '../data/main.js'

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            formVariant : 1,
            forms: [1 ,2, 3],
            formInfo: Data.forms.get(1)
        }
    }

    componentDidMount(){
    }

    handleFormSelection(index){
        this.setState({
            formVariant : index,
            formInfo: Data.forms.get(parseInt(index))
        })
    }

    render(){
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
                </div>
                <Form variant={this.state.formVariant} formInfo={this.state.formInfo} />
            </>
        )
    }
}

export default Sidebar;