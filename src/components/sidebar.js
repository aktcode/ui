import React, { Component} from "react"
import Form from "./forms/form.js"
import Other from "./other.js"
import Data from '../data/main.js'
import Search from "./search/search.js"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

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
            othersInfo: Data.others.get('Card'),
            search: [1],
            searchVariant: 1,
            searchInfo: Data.search.get(1)
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
    handleSearchSelection(index){
        this.setState({
            othersVariant : index,
            stageOccupier: 'search',
            othersInfo: Data.search.get(index)
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
                break;
            case 'search':
                stage = <Search variant={this.state.searchVariant} searchInfo={this.state.searchInfo} />   
        }
        return(
            <>
                <div className="sidebar">
                    <Link to="/"><span className="head">Elements</span></Link>
                    <div className="ele">
                        <span className="eleHead">Login</span>
                        <ul>
                            { this.state.forms.map((item) => {
                                return(<li id={(item == this.state.formVariant && this.state.stageOccupier == 'form')  ? 'active' : ''} onClick={this.handleFormSelection.bind(this,item)} key={item}>{item}</li>)
                            })
                            }
                        </ul>
                        <span className="eleHead">Search</span>
                        <ul>
                            { this.state.search.map((item) => {
                                return(<li id={(item == this.state.searchVariant && this.state.stageOccupier == 'search') ? 'active' : ''} onClick={this.handleSearchSelection.bind(this,item)} key={item}>{item}</li>)
                            })}
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