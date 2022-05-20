import React, { Component } from "react";
import "./Search.css"
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class Search extends Component {

    state = {
        status: false,
        searchLine: '',

    }

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
        console.log(this.state.searchLine)   
    }

    

    render () {
        return(
            <div> 
                
            <section class="jumbotron text-center">
                    <div class="container" className="main__div">
                        <h1 class="jumbotron-heading" className="main__text">Homepage</h1>
                        <p className="input__text">
                            <b>Input field</b>
                        </p>
                        <div>

                            <input type="text" className="input" onChange={this.searchLineChangeHandler} />
                            <button className="search__btn">Search</button>
                            <div className="filter" onClick={this.clickStatus}>

                                {!this.state.status ? <Link to="/Description">Advanced filter &#8744;</Link> : (
                                    <Link to="/Homepage">Advanced filter 2</Link>
                                )}

                            </div>
                        </div>

                    </div>

                </section>
            </div>
        )
    }
}
export default Search;