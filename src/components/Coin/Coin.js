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
            id: store.getState().idCoin,
            coinId: []
        }
    }
    

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }
    async componentDidMount() {
        // store.subscribe(() => {
        //     const state = store.getState();
        //     console.log(state)
        //     state.idCoin && this.setState({
        //         id: state.idCoin
        //     })            
        // })  
        // console.log("eee",this.state.id)


        await fetch(`http://localhost:3001/Coin/${this.state.id}`)
        .then(res => res.json())
        .then(data => {    
            console.log(...data)
            this.setState((previousState) => {
                return {
                    ...previousState,
                    coinId: data
                }
            })
           
            console.log("not Click",this.state.coinId)
        }) 
        
        
    }

    //CLICK
        // click = () => {
        // fetch(`http://localhost:3001/Coin/${this.state.id}`)
        // .then(res => res.json())
        // .then(data => {    
        //     console.log(...data)
        //     // const arrCoins = data
        //     this.setState({
        //         coinId: data
        //     })   
        //     console.log("Click",...this.state.coinId)
        // }) 
        // }
    render () 
    {   
        return(     
        <div>
         
         <div className="coin">
                <div className="coin_des">
                {/* <button onClick={this.click}>4</button> */}
                {/* {this.state.coinId.map((item) => { */}

                    

                    <div className="row">
                        
                    <div>
                        <img class="card-img-top" className="coin__photo-one" alt="Thumbnail [100%x225]" src={oneCoin} />
                        <img class="card-img-top" className="coin__photo-teo" alt="Thumbnail [100%x225]" src={oneCoin} />
                    </div>
                       
                        
                            <div className="description">   
                                 <h3 className="title"><b>Canadian beaver</b></h3>
                                <div className="description__text">"Canadian beaver". Unique coin with the image of a beaver. Face value - 5 cents. Created under Elizabeth II.
                                <p>
                                In the center of the obverse is a portrait of Queen Elizabeth II, the profile is directed to the right. The inscription on the left semicircle (English) ELIZABETH II, on the right semicircle D · G · REGINA (ELIZABETH II QUEEN by the Grace of GOD) with dots. Below is a mint mark.
                                </p>
                                In the center of the coin reverse is a Canadian beaver on a rock sticking out of the water. At the top is a semicircle with the inscription "5 cents" between two maple leaves. At the bottom in two lines is the inscription CANADA (CANADA) and the year of minting.
                            </div>
                            <div>
                                <table className="one_block">
                                    <tbody>
                                        <tr>
                                            <th className="white">
                                                Issuing Country
                                            </th>
                                            <th className="white">
                                                CANADA
                                            </th>
                                        </tr>
                                        <tr>
                                            
                                            <th className="gray">
                                                Composition
                                            </th>
                                            <th className="gray">
                                                Nickel
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Quality
                                            </th>
                                            <th className="white">
                                                BU
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="gray">
                                                Denomination
                                            </th>
                                            <th className="gray">
                                                5 cents
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Year
                                            </th>
                                            <th className="white">
                                                1965    
                                            </th>
                                        </tr>
                                        <tr>
                                        <th className="gray">
                                                Weight
                                            </th>
                                            <th className="gray">
                                                4.54 g
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Price
                                            </th>
                                            <th className="white">
                                                40$
                                            </th>
                                        </tr>
                                    
                                    </tbody>                                   
                                </table>
                                    </div> 
                                        <Link  to="/Homepage" className="back">Back to the list</Link>  
                                    </div> 
                            </div>   
                   {/* })}     */}
                    </div>  
                           
            </div>         
        </div>
            
        
    )}}
                                 

export default Coin;