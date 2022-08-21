import React, { Component } from "react";
import "./Description.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import store from "../../redux/store";


class Description extends Component {
    state = {
        status: false,
        filterCoins: [],
        fromPrice: "",
        toPrice: "",
        fromYear: "",
        toYear: ""

    }

    clickTitle = (item) => {
        store.dispatch({
            type: 'ADD_COIN_ID',
            payload: {
                coinId: item.id
            }
        })

    }

    fromPrice = (e) => {
        e.preventDefault();
        this.setState({
            fromPrice: e.target.value
        })

        console.log(this.state.fromPrice)
    }


    toPrice = (e) => {
        e.preventDefault();
        this.setState({
            toPrice: e.target.value
        })
        console.log(this.state.toPrice)

    }

    fromYear = (e) => {
        e.preventDefault();
        this.setState({
            fromYear: e.target.value
        })
    }

    toYear = (e) => {
        e.preventDefault();
        this.setState({
            toYear: e.target.value
        })
    }



    filterBtn = () => {
        // this.setState({ active: true })
        fetch(`http://localhost:3001/Description`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({
                    filterCoins: data,
                });
            });

    }


    render() {

        return (
            <div>
                <Search status={true} />
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div className="country__filter">
                                <p className="text__filter-country">
                                    <b>Issuing country</b>
                                </p>
                                <select id="selectvalue">
                                    <option>Canada</option>
                                    <option>UNITED STATES OF AMERICA</option>
                                    <option>Estonia</option>
                                    <option>France</option>
                                </select>
                            </div>

                            <div className="country__filter">
                                <p className="text__filter-matal">
                                    <b>Metal</b>
                                </p>
                                <select id="selectvalue">
                                    <option>Gold</option>
                                    <option>Nickel</option>
                                    <option>Steel</option>

                                </select>
                            </div>
                            <div className="country__filter">
                                <p className="text__filter">
                                    <b>Quality of the coin</b>
                                </p>
                                <select id="selectvalue">
                                    <option>Proof</option>
                                    <option>BU</option>
                                </select>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div className="price__block">
                                <p className="text__filter">
                                    <b>Price</b>
                                </p>
                                <div className="price">
                                    <p className="price__text">from</p>
                                    <input type="text" className="intup__price" onChange={this.fromPrice} />
                                    <p className="price__text">to</p>
                                    <input type="text" className="intup__price" onChange={this.toPrice} />
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div>
                                    <p className="text__filter-Year">
                                        <b>Year of issue</b>
                                    </p>
                                    <div className="price">
                                        <p className="price__text">from</p>
                                        <input type="text" className="intup__price" onChange={this.fromYear} />
                                        <p className="price__text">to</p>
                                        <input type="text" className="intup__price" onChange={this.toYear} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button onClick={this.filterBtn}>Найти</button>
                        </div>
                        <div class="container">

                            < div class="row">
                                {this.state.filterCoins.filter((item) => +this.state.fromPrice <= +item.Price.slice(0, -1) && +this.state.toPrice >= +item.Price.slice(0, -1) ||
                                    (this.state.fromYear <= item.Year && this.state.toYear >= item.Year) || item.Country == "Canada" || "UNITED STATES OF AMERICA" || "Estonia" || "France")
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




                    </div>
                </div>
            </div>
        )
    }
}

export default Description;