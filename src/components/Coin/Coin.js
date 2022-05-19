import React, { Component } from "react";
import "./Coin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import oneCoin  from '../../images/one_coin.jpg';

import { Link } from "react-router-dom";
import store from "../../redux/store";




class Coin  extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            coinId: []
        }
    }
    

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }

    componentDidMount() {
        console.log("PROPS",this.props)
        fetch(`http://localhost:3001/Coin/${this.props.id}`)
        .then(res => res.json())
        .then(data => {    
            console.log(data)
            const arrCoins = data
            this.setState({
                coinId: arrCoins
            })
            console.log(this.state.coinId)
            // store.dispatch({
            //     type: 'ADD_COINS',
            //     payload: {
            //         coin: arrCoins
            //     }      
            // })
            // console.log('DATA', ...coin)

        }) 
        
    }
    
    render () 
    {   
        return(     
        <div>
         
         <div className="coin">
                <div className="coin_des">
                    <div className="row">
                    <div>
                        <img className="card-img-top" className="coin__photo-one" alt="Thumbnail [100%x225]" src={oneCoin} />
                        <img className="card-img-top" className="coin__photo-teo" alt="Thumbnail [100%x225]" src={oneCoin} />
                    </div>
                       

                            <div className="description">   
                                 <h3 className="title"><b>Canadian Beaver</b></h3>
                                <div className="description_text"> "Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.
                                <p>
                                In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.
                                </p>
                                In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
                            </div>
                            <div>
                                <table className="one_block">
                                    
                                    <tr>
                                        <th className="white">
                                            Issuing Country
                                        </th>
                                        <th className="white">
                                            22
                                        </th>
                                    </tr>
                                    <tr>
                                        
                                        <th className="gray">
                                            Composition
                                        </th>
                                        <th className="gray">
                                            221
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="white">
                                            Quality
                                        </th>
                                        <th className="white">
                                            22
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="gray">
                                            Denomination
                                        </th>
                                        <th className="gray">
                                            221
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="white">
                                            Year
                                        </th>
                                        <th className="white">
                                            22
                                        </th>
                                    </tr>
                                    <tr>
                                    <th className="gray">
                                            Weight
                                        </th>
                                        <th className="gray">
                                            221
                                        </th>
                                    </tr>
                                    <tr>
                                        <th className="white">
                                            Price
                                        </th>
                                        <th className="white">
                                            22
                                        </th>
                                    </tr>
                                    
                                                                    
                                </table>
                                    </div> 
                                        <Link  to="/Homepage" className="back">Back to the list</Link>  
                                    </div> 
                            </div>    
                    </div>         
            </div>         
        </div>
            
        
    )}}
                                 

export default Coin;