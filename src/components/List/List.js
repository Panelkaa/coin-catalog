import React, { Component } from "react";
import "./List.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import store from "../../redux/store";
import Coin from "../Coin/Coin";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            listCoins: [],
            id: []
        }
    }

    componentDidMount () {
        store.subscribe(() => {
            const state = store.getState();
            state.arrCoins && this.setState({
                listCoins: state.arrCoins
            })     
        })  
    }
    

    clickStatus = (e) => {
        this.setState({
            status: this.state.status === !this.state.status ? !this.state.status : this.state.status
        })
        console.log(e.target);
    }

    clickTitle = (item) => {
        console.log(item)
        
    }

    render () {
        console.log("listCoins", this.state.listCoins)
        
        // console.log('bullion', ...this.state.bullion)
        // console.log('commemorative', ...this.state.commemorative)
        // console.log('exclusive', ...this.state.exclusive)
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
                    {this.state.listCoins && this.state.listCoins.map((item) =>      
                        <div class="col-md-4" className="block" >

                            <div class="card-body">
                            <h3 className="coin__text" id={item.id} onClick={() => {this.clickTitle(item)}}><Link  to={`/Coin/${item.id}`}><b>{item.Title}</b></Link></h3>
                            <div className="card__description">{item.Main_description}</div>

                            <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]" src= {`/ImagesCoins/${item.image_one}`} />
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