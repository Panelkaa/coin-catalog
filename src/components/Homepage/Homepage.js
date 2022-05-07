import React, { Component } from "react";
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';

class Homepage extends Component {
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
                            <div className="filter"><a href="#filter">Advanced filter<span>  ^</span></a></div>
                        </div>
                            {/* <a href="#" class="btn btn-primary my-2 .bg-danger" >Search</a>
                        <button className="search">Search</button> */}
                       
                   </div>
               </section> 
            <div class="container">

                <div class="row">
                    <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                    
                        <div class="card-body">
                        <h3 className="card__text"><b>Bullion coins</b></h3>
                        <div className="allBullion"><a href="#filter">Show all <span>&gt;</span></a></div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={oneCoin} />     
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                    <div class="card-body">
                        <h3 className="card__text"><b>Exclusive coins</b></h3>
                        <div className="allBullion"><a href="#filter">Show all <span>&gt;</span></a></div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={twoCoin} />     
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                    <div class="card mb-4 box-shadow">
                    <div class="card-body">
                        <h3 className="card__text"><b>Commemorative coins</b></h3>
                        <div className="allBullion"><a href="#filter">Show all <span>&gt;</span></a></div>

                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={threeCoin} />     
                        </div>
                    </div>
                    </div>
                    
                    </div>
                </div>  
            </div>
        )
    }
}

export default Homepage;