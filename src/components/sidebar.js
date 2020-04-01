import React, { Component} from "react";

class Sidebar extends Component{
    render(){
        return(
            <div className="sidebar">
                <span class="head">Elements</span>
                <div className="ele">
                    <span class="eleHead">Login</span>
                    <ul>
                        <li>1</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}

export default Sidebar;