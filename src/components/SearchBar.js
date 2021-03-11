import React from 'react';
import "./SearchBar.css";

const SearchBar = props =>{

    return(
        <div id="searchContainer"className="container">
            <div>{props.error?error():null}</div>
            <form onSubmit={props.loadweather}>
            <div className="row">
                <div id="searchInput" className="col-md-3">
                    <input type="text" className="form-control" name="city" placeholder="City" autocomplete="on"/>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-warning">Search</button>
                </div>
            </div>
            </form>
        </div>
    );

};

function error(){
    return(
        alert('Please Enter City')
    )
}

export default SearchBar;