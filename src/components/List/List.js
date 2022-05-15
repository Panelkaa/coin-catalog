import React, { Component } from "react";
import "./List.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';
import { Link } from "react-router-dom";

class List extends Component {
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
                        <h1 class="jumbotron-heading" className="main__text">List of the coins</h1>
                        <p className="link__text">
                        <Link  to="/Homepage">Homepage — List of the coins</Link>
                        </p>
                        
                        <p className="input__text">
                            <b>Input field</b>
                        </p>
                        <div>
                            
                            <input type = "text" className="input"/>
                            <button className="search__btn">Search</button>
                            <div className="filter" onClick={this.clickStatus}>
                            
                                {!this.state.status ? <Link  to="/Description">Advanced filter 	&#8743;</Link> : (
                                    <Link  to="/Description">Advanced filter 2</Link>
                                )}
                                
                            </div>
                            {/* <div className="filter"><a href="#filter">Advanced filter<span>  ^</span></a></div> */}
                        </div>
                            {/* <a href="#" class="btn btn-primary my-2 .bg-danger" >Search</a>
                        <button className="search">Search</button> */}
                       
                   </div>
               </section> 
            <div class="container">
                        
                <div class="row">
                    <div class="col-md-4" className="block">
                    
                    
                        <div class="card-body">
                        <h3 className="coin__text"><b>Canadian Beaver</b></h3>
                        <div className="card__description">"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.</div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={oneCoin} />     
                        </div>
                    </div>
                    
                    <div class="col-md-4" className="block">
                    
                    <div class="card-body">
                        <h3 className="coin__text"><b>Kennedy</b></h3>
                        <div className="card__description">The unique coin is made in honor of the assassination of the 35th president of Texas.</div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={twoCoin} />     
                        </div>
                    </div>
                   
                    <div class="col-md-4" className="block">
                    
                    <div class="card-body">
                        <h3 className="coin__text"><b>Looney</b></h3>
                        <div className="card__description">"Looney". Unique coin with the image of a goat. Canadian dollar symbol.</div>
                        
                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={threeCoin} />     
                        </div>
                        
                    </div>
                    
                    <div class="col-md-4" className="block">
                    
                    <div class="card-body">
                        <h3 className="coin__text"><b>Looney</b></h3>
                        <div className="card__description">"Looney". Unique coin with the image of a goat. Canadian dollar symbol.</div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={threeCoin} />     
                        </div>
                    </div>

                    </div>
                </div>  
            </div>
        )
    }
}

export default List;