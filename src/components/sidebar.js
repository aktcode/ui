import React, { Component} from "react"
import Form from "./forms/form.js"
import Other from "./other.js"
import Data from '../data/main.js'

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            stageOccupier: 'form',
            formVariant : 1,
            forms: [1 ,2, 3],
            formInfo: Data.forms.get(1),
            others: ['Card' , "Phone"],
            othersVariant: 'Card',
            othersInfo: Data.others.get('Card')
        }
    }

    componentDidMount(){
    }

    handleFormSelection(index){
        this.setState({
            formVariant : index,
            formInfo: Data.forms.get(parseInt(index)),
            stageOccupier: 'form',
        })
    }

    handleOtherSelection(index){
        this.setState({
            othersVariant : index,
            stageOccupier: 'other',
            othersInfo: Data.others.get(index)
        })
    }

    render(){
        let stage;
        switch(this.state.stageOccupier){
            case 'form':
                stage =  <Form variant={this.state.formVariant} formInfo={this.state.formInfo} />
                break;
            case 'other':
                stage =  <Other variant={this.state.othersVariant} othersInfo={this.state.othersInfo}/>
        }
        return(
            <>
                <div className="sidebar">
                    <span className="head">Elements</span>
                    <div className="ele">
                        <span className="eleHead">Login</span>
                        <ul>
                            { this.state.forms.map((item) => {
                                return(<li id={(item == this.state.formVariant && this.state.stageOccupier == 'form')  ? 'active' : ''} onClick={this.handleFormSelection.bind(this,item)} key={item}>{item}</li>)
                            })
                            }
                        </ul>
                        <span className="eleHead">Others</span>
                        <ul>
                            { this.state.others.map((item) => {
                                return(<li id={(item == this.state.othersVariant && this.state.stageOccupier == 'other') ? 'active' : ''} onClick={this.handleOtherSelection.bind(this,item)} key={item}>{item}</li>)
                            })
                            }
                        </ul>
                    </div>
                </div>
                {/* STAGE */}
                {stage}
                {/* STAGE */}
            </>
        )
    }
}

export default Sidebar;