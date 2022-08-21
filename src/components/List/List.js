import React, { Component } from "react";
import "./List.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import store from "../../redux/store";
import Search from "../Search/Search";

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: false,
            listCoins: [],
            active: false,
        }
    }

    componentDidMount() {
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

        store.dispatch({
            type: 'ADD_COIN_ID',
            payload: {
                coinId: item.id
            }
        })

    }
    btn = () => {
        this.setState({ active: true })
        fetch(`http://localhost:3001/Homepage`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    searchCoins: data,
                });
            });
    }

    render() {
        return (
            <div>{!this.state.active ?
                <>
                    <Search updateActive={this.btn} coins={this.state.searchCoins} title="List of the coins" />


                    <div class="container">

                        <div class="row">
                            {this.state.listCoins && this.state.listCoins.map((item) =>
                                <div class="col-md-4" className="block" key={item.id}>

                                    <div class="card-body">
                                        <Link to={`/Coin/${item.id}`}> <h3 className="coin__text" onClick={() => { this.clickTitle(item) }}><b>{item.Title}</b></h3></Link>
                                        <div className="card__description">{item.Main_description}</div>

                                        <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]" src={`/ImagesCoins/${item.image_one}`} />
                                    </div>

                                </div>
                            )}
                        </div>
                    </div></> : <><Search updateActive={this.btn} coins={this.state.searchCoins} title="List of the coins" /> </>}
            </div>
        )
    }
}

export default List;