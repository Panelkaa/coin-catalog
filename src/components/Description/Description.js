import React, { Component } from "react";
import "./Description.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';
import { Link } from "react-router-dom";

class Description extends Component {
    state = {
        status: false,
    }

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }
    render () {
        return(
            <div>
                <section class="jumbotron text-center" >
                    <div class="container" className="main__div">
                        <h1 class="jumbotron-heading" className="main__text">Homepage</h1>
                        <p className="input__text">
                            <b>Input field</b>
                        </p>
                        <div>
                            
                            <input type = "text" className="input"/>
                            <button className="search__btn">Search</button>
                            <div className="filter" onClick={this.clickStatus}>
                            
                                {!this.state.status ? <Link  to="/Homepage">Advanced filter 	&#8743;</Link> : (
                                    <Link  to="/Description">Advanced filter 2</Link>
                                )}
                                
                            </div>
                        </div>
                            {/* <div className="filter">Advanced filter<span>  ^</span></div> */}
                        
                            {/* <a href="#" class="btn btn-primary my-2 .bg-danger" >Search</a>
                        <button className="search">Search</button> */}
                       
                   </div>
               </section> 
            <div class="container">
            
                <div class="row">
                    <div class="col-md-4">
                    <div className="country__filter">
                        <p className="text__filter">
                                <b>Issuing country</b>
                        </p>
                        <select id="selectvalue">
                            <option>Canada</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </select>
                    </div>
                    
                    <div className="country__filter">
                        <p className="text__filter">
                                <b>Metal</b>
                        </p>
                        <select id="selectvalue">
                            <option>Gold</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </select>
                    </div>
                    <div className="country__filter">
                        <p className="text__filter">
                                <b>Quality of the coin</b>
                        </p>
                        <select id="selectvalue">
                            <option>Proof</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>25</option>
                        </select>
                    </div>
                    </div>


                    <div class="col-md-4">
                        <div className="price__block">
                            <p className="text__filter">
                                    <b>Price</b>
                            </p>
                            <div className="price">
                                <p className="price__text">from</p> 
                                <input type="text"  className="intup__price"/> 
                                <p className="price__text">to</p> 
                                <input type="text" />
                                </div>
                            </div>
                            
                            <div class="col-md-4">
                            <div>
                                <p className="text__filter">
                                        <b>Year of issue</b>
                                </p>
                                <div className="price">
                                    <p className="price__text">from</p> 
                                    <input type="text"  className="intup__price"/> 
                                    <p className="price__text">to</p> 
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    
                    
                    </div>
                </div>  
            </div>
        )
    }
}

export default Description;