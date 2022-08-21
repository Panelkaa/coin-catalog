import React, { Component } from "react";
import "./Search.css"
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import store from "../../redux/store";


class Search extends Component {

    state = {
        status: this.props.status,
        searchLine: '',
        searchCoin: [],


    }

    searchLineChangeHandler = (e) => {
        e.preventDefault();
        this.setState({ searchLine: e.target.value });
        console.log(this.state.searchLine)
    }

    clickTitle = (item) => {
        store.dispatch({
            type: 'ADD_COIN_ID',
            payload: {
                coinId: item.id
            }
        })

    }

    // clickBtn = () => {
    //     fetch(`http://localhost:3001/Homepage`)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             this.setState({
    //                 searchCoin: data,
    //             });
    //         });
    // };



    render() {

        return (
            <div>

                <section class="jumbotron text-center">
                    <div class="container" className="main__div">
                        <h1 class="jumbotron-heading" className="main__text">{this.props.titleHome} {this.props.title}</h1>
                        <p className="input__text">

                        </p>
                        <div>

                            <input type="text" className="input" onChange={this.searchLineChangeHandler} />
                            <button className="search__btn" onClick={() => { this.props.updateActive(this.state.active) }}>Search</button>
                            <div className="filter">

                                {!this.state.status ? <Link to="/Description">Advanced filter &#8744;</Link> : (
                                    <Link to="/Homepage">Advanced filter &#8743;</Link>
                                )}

                            </div>
                        </div>

                    </div>
                    <div class="container">

                        < div class="row">
                            {!this.props.coins ? "" : this.props.coins
                                .filter((item) =>
                                    item.Title.includes(this.state.searchLine) || item.Description.includes(this.state.searchLine)
                                )
                                .map((item) =>
                                    <div class="col-md-4" className="block" key={item.id}>

                                        <div class="card-body">
                                            <Link to={`/Coin/${item.id}`}> <h3 className="coin__text" onClick={() => { this.clickTitle(item) }}><b>{item.Title}</b></h3></Link>
                                            <div className="card__description">{item.Main_description}</div>

                                            <img class="card-img-top" className="coin__photo" alt="Thumbnail [100%x225]" src={`/ImagesCoins/${item.image_one}`} />
                                        </div>

                                    </div>
                                )}
                        </div>
                    </div>



                </section>


            </div >
        )
    }
}
export default Search;