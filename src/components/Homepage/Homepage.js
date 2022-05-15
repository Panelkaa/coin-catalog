import React, { Component } from "react";
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';
import { Link } from "react-router-dom";
import Description from "../Description/Description";
// import bd from "../../bd"


class Homepage extends Component {
    
    state = {
        status: false,
        searchLine: '',
        coins:[]

    }

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }

    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
        console.log(this.state.searchLine)
     
    }
    
    render () {   
        fetch(`http://localhost:3000/coin`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({
                coins: data
            })
            console.log('DATA', this.state.coins)
        }) 
        return(
            <div> 
                <section class="jumbotron text-center" >
                    <div class="container" className="main__div">
                        <h1 class="jumbotron-heading" className="main__text">Homepage</h1>
                        <p className="input__text">
                            <b>Input field</b>
                        </p>
                        <div>
                            
                            <input type = "text" className="input" onChange={this.searchLineChangeHandler}/>
                            <button className="search__btn">Search</button>
                        <div className="filter" onClick={this.clickStatus}>
                            
                                {!this.state.status ? <Link  to="/Description">Advanced filter &#8744;</Link> : (
                                    <Link  to="/Homepage">Advanced filter 2</Link>
                                )}
                                
                                </div>
                        </div>
                            {/* <a href="#" class="btn btn-primary my-2 .bg-danger" >Search</a>
                        <button className="search">Search</button> */}
                       
                   </div>
               </section> 
            <div class="container">

                <div class="row">
                    <div class="col-md-4">
                    
                    
                        <div class="card-body">
                        <h3 className="card__text"><b>Bullion coins</b></h3>
                        <div className="all__bullion"><a href="#filter"><Link  to="/List/Bullion-coins">Show all</Link><span>&gt;</span></a></div>

                           
                        </div>
                        <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]"  src={oneCoin} />  
                    </div>
                    
                    <div class="col-md-4">
                    
                    <div class="card-body">
                        <h3 className="card__text"><b>Exclusive coins</b></h3>
                        <div className="all__bullion"><a href="#filter"><Link  to="/List/Exclusive-coins">Show all</Link><span>&gt;</span></a></div>

                            
                        </div>
                        <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]"  src={twoCoin} /> 
                    </div>
                 
                    <div class="col-md-4">
                 
                    <div class="card-body">
                        <h3 className="card__text"><b>Commemorative coins</b></h3>
                        <div className="all__bullion"><a href="#filter"><Link  to="/List/Commemorative-coins">Show all</Link><span>&gt;</span></a></div>

                             
                        </div>
                        
                        <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]"  src={threeCoin} />
                    </div>
                
                    
                    </div>
                </div>  
            </div>
        )
    }
}

export default Homepage;