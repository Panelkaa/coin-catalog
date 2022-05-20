import React, { Component } from "react";
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import store from "../../redux/store";




class Homepage extends Component  {
    
    state = {
        coins: [],
    }

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }

    componentDidMount() {
        fetch('http://localhost:3001/Homepage') 
        .then(res => res.json())
        .then(data => {    
            const arrCoins = data
            this.setState({
                coins: arrCoins
            })
            store.dispatch({
                type: 'ADD_COINS',
                payload: {
                    coins: arrCoins
                }      
            })
        }) 
        
    }
    
    Bullion = () => {
        fetch('http://localhost:3001/List/Bullion-coins') 
        .then(res => res.json())
        .then(data => {    
            const arrCoins = data
            this.setState({
                coins: arrCoins
            }) 
            store.dispatch({
                type: 'ADD_COINS',
                payload: {
                    coins: arrCoins
                }       
            })       
        })
    }

    Commemorative = () => {
        fetch('http://localhost:3001/List/Commemorative-coins') 
        .then(res => res.json())
        .then(data => {    
            const arrCoins = data
            this.setState({
                coins: arrCoins
            })
            store.dispatch({
                type: 'ADD_COINS',
                payload: {
                    coins: arrCoins
                }      
            })           
        })
    }

    Exclusive = () => {
        fetch('http://localhost:3001/List/Exclusive-coins') 
        .then(res => res.json())
        .then(data => {    
            const arrCoins = data
            this.setState({
                coins: arrCoins
            })
            store.dispatch({
                type: 'ADD_COINS',
                payload: {
                    coins: arrCoins
                }      
            })
            
        })
    }

    
    render () 
    {   
        return(         
        <div> 
                 <Search />
                 
                 <div class="container">

                         <div class="row">
                             <div class="col-md-4">
                                 <div class="card-body">
                                     <div> <h3 className="card__text" title="Canadian Beaver"><b>Canadian Beaver</b></h3> </div>
                                     <div className="all__bullion"><Link to="/List/Bullion-coins" onClick={this.Bullion}>Show all<span>&gt;</span></Link></div>


                                 </div>
                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={oneCoin} />
                             </div>

                             <div class="col-md-4">
                                 <div class="card-body">
                                     <h3 className="card__text"><b>Exclusive coins</b></h3>
                                     <div className="all__bullion"><Link to="/List/Exclusive-coins" onClick={this.Exclusive}>Show all<span>&gt;</span></Link></div>


                                 </div>
                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={twoCoin} />
                             </div>

                             <div class="col-md-4">

                                 <div class="card-body">
                                     <h3 className="card__text"><b>Commemorative coins</b></h3>
                                     <div className="all__bullion"><Link to="/List/Commemorative-coins" onClick={this.Commemorative}>Show all<span>&gt;</span></Link></div>


                                 </div>

                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={threeCoin} />
                             </div>
                         </div>     
              </div>     
        </div>
            
        
    )}}
                                 

export default Homepage;