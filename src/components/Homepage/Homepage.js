import React, { Component } from "react";
import "./Homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';
import twoCoin  from '../../images/two_coin.jpg';
import threeCoin  from '../../images/three_coin.jpg';
import { Link } from "react-router-dom";
import Description from "../Description/Description"; 
import Search from "../Search/Search";


class Homepage extends Component {
    
    state = {
        coins: []
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
            // arrCoins.push(...data)
            this.setState({
                coins: arrCoins
            })
            console.log('DATA', ...arrCoins)
            

        }) 
        
    }
    
    render () 
    {   
        // console.log(this.state.coins[22])
        // console.log(this.state.coins.Price)
        
            
        return(         
        <div> 
                 <Search />
                 
                 <div class="container">

                         <div class="row">
                             <div class="col-md-4">
                                 <div class="card-body">
                                     <div> <h3 className="card__text"><b>Canadian Beaver</b></h3> </div>
                                     <div className="all__bullion"><a href="#filter"><Link to="/List/Bullion-coins">Show all</Link><span>&gt;</span></a></div>


                                 </div>
                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={oneCoin} />
                             </div>

                             <div class="col-md-4">
                                 <div class="card-body">
                                     <h3 className="card__text"><b>Exclusive coins</b></h3>
                                     <div className="all__bullion"><a href="#filter"><Link to="/List/Exclusive-coins">Show all</Link><span>&gt;</span></a></div>


                                 </div>
                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={twoCoin} />
                             </div>

                             <div class="col-md-4">

                                 <div class="card-body">
                                     <h3 className="card__text"><b>Commemorative coins</b></h3>
                                     <div className="all__bullion"><a href="#filter"><Link to="/List/Commemorative-coins">Show all</Link><span>&gt;</span></a></div>


                                 </div>

                                 <img class="card-img-top" className="card__photo" alt="Thumbnail [100%x225]" src={threeCoin} />
                             </div>
                         </div>     
              </div>     
        </div>
            
        
    )}}
                                 

export default Homepage;