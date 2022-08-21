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
        }) 
 
    }

    render () 
    {   console.log("state",...this.state.coinId)
    
        return(     
        <div>
         
         <div className="coin">
         {this.state.coinId.map((item) => 
                <div className="coin_des">
                {/* <button onClick={this.click}>4</button> */}
                
                    <div className="row">
                        
                    <div>
                        <img class="card-img-top" className="coin__photo-one" alt="Thumbnail [100%x225]"  src= {`/ImagesCoins/${item.image_one}`} />
                        <img class="card-img-top" className="coin__photo-teo" alt="Thumbnail [100%x225]"  src= {`/ImagesCoins/${item.image_two}`} />
                    </div>
                       
                        
                            <div className="description">   
                                 <h3 className="title"><b>{item.Title}</b></h3>
                                <div className="description__text">
                                    {item.Main_description}
                                    <p className="description__text"> {item.Description}</p>
                                </div>
                            <div>
                                <table className="one_block">
                                    <tbody>
                                        <tr>
                                            <th className="white">
                                                Issuing Country
                                            </th>
                                            <th className="white">
                                                {item.Country}
                                            </th>
                                        </tr>
                                        <tr>
                                            
                                            <th className="gray">
                                                Composition
                                            </th>
                                            <th className="gray">
                                            {item.Composition}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Quality
                                            </th>
                                            <th className="white">
                                                {item.Quality}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="gray">
                                                Denomination
                                            </th>
                                            <th className="gray">
                                                {item.Denomination}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Year
                                            </th>
                                            <th className="white">
                                                {item.Year}  
                                            </th>
                                        </tr>
                                        <tr>
                                        <th className="gray">
                                                Weight
                                            </th>
                                            <th className="gray">
                                                {item.Weight}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="white">
                                                Price
                                            </th>
                                            <th className="white">
                                                {item.Price}
                                            </th>
                                        </tr>
                                    
                                    </tbody>                                   
                                </table>
                                    </div> 
                                        <Link  to="/Homepage" className="back">Back to the list</Link>  
                                    </div> 
                                      
                            </div>     
                    </div>    
               )}               
            </div>  
                    
        </div>
            
        
    )}   
}                             

export default Coin;