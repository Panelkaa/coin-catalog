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
        bullion: [],
        commemorative: []
    }

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }

    componentDidMount() {
        
        fetch('http://localhost:3001/List/Bullion-coins') 
        .then(res => res.json())
        .then(data => {    
            console.log(data)
            const arrCoins = data
            // bullion.push(...data)
            this.setState({
                bullion: arrCoins
            })
            console.log('1', ...this.state.bullion)
        }) 
        
        fetch('http://localhost:3001/List/Commemorative-coins') 
        .then(res => res.json())
        .then(data => {    
            const arrCommemorative = data
            // bullion.push(...data)
            this.setState({
                commemorative: arrCommemorative
            })
            console.log('2', ...this.state.commemorative)
        })     
    }
    
    render () {
        console.log('bullion', ...this.state.bullion)
        console.log('commemorative', ...this.state.commemorative)
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
                        </div>
 
                       
                   </div>
               </section>                
            <div class="container">

                <div class="row">
                    {this.state.bullion.map((item) =>      
                        <div class="col-md-4" className="block">

                            <div class="card-body">
                            <h3 className="coin__text"><b>{item.Title}</b></h3>
                            <div className="card__description">{item.Main_description}}</div>

                            <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={oneCoin} />     
                            </div>
                            
                        </div>
                    )}
                </div> 
            </div> 

            <div class="container">   
                <div class="row">
                    {this.state.commemorative.map((item) => 
                        <div class="col-md-4" className="block">

                            <div class="card-body">
                            <h3 className="coin__text"><b>{item.Title}</b></h3>
                            <div className="card__description">{item.Main_description}</div>

                            <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]"  src={oneCoin} />     
                            </div>
                            
                        </div>
                    )}
                        </div> 

                
                </div>
            </div>  
            
        )
    }
}

export default List;