import React from 'react';
import Info from "../info.js"
import SearchIcon from "../../../public/assets/images/search.svg"
class Search extends React.Component {

    render(){
        const iconStyle = {
            backgroundImage:  `url(${SearchIcon})`
        };
        return(
            <div className="searchContainer">
                <span className="search">
                    <span className="box">
                        <input type="text" placeholder="Search"/>
                        <span style={iconStyle} className="icon-search"></span>
                    </span>
                   
                </span>
            <Info infoContent={this.props.searchInfo} />
            </div>
            
        )
    }
}

export default Search;