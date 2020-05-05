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
        /*
        ** How to create a new category of components : -> (like form,search...)
        **  1. Add the category name to components array
        **  2. Create a new object with the same name(with three entities-> elements,variant,info)
        **  3. For info, create an entry with again the same name in data/main.js in [ variant : 'the info text'] format. This step 
        **     is not important for every sub component. But the main entry is important!
        */
        this.state = {
            stageOccupier: 'form',
            components: ['form','search','other'],
            form: {
                elements: [1 ,2, 3],
                variant : 1,
                info: Data.form.get(1)
            },
            other : {
                elements: ['Card' , "Phone"],
                variant: 'Card',
                info: Data.other.get('Card')
            },
            search: {
                elements: [1, 2],
                variant: 1,
                info: Data.search.get(1)
            }
        }
    }

    componentDidMount(){
    }


    addComponent(uniqueKey , componentObject){
        return(
            <>
               <span className={"eleHead "+(this.state.stageOccupier == uniqueKey ? 'active' : '')} onClick={() => this.setState({stageOccupier: uniqueKey})}>{uniqueKey.charAt(0).toUpperCase() + uniqueKey.slice(1)}</span>
                    <ul className={this.state.stageOccupier != uniqueKey ? 'disNone' : ''}>
                        { componentObject.elements.map((item) => {
                            let currentComponent = {
                                elements: componentObject.elements,
                                variant: item,
                                info: Data[uniqueKey].get(item)
                            }
                        return(<li id={(item == componentObject.variant && this.state.stageOccupier == uniqueKey)  ? 'active' : ''} onClick={() => this.setState({[uniqueKey] : currentComponent})} key={item}>{item}</li>)
                        })
                        }
                    </ul>
            </>
        )
    }

    render(){
        let stage;
        switch(this.state.stageOccupier){
            case 'form':
                stage =  <Form variant={this.state.form.variant} formInfo={this.state.form.info} />
                break;
            case 'other':
                stage =  <Other variant={this.state.other.variant} othersInfo={this.state.other.info}/>
                break;
            case 'search':
                stage = <Search variant={this.state.search.variant} searchInfo={this.state.search.info} />   
        }
        return(
            <>
                <div className="sidebar">
                    <Link to="/"><span className="head">Elements</span></Link>
                    <div className="ele">
                            { this.state.components.map((componentName) => {
                                return this.addComponent(componentName, this.state[componentName])
                                })
                            }
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