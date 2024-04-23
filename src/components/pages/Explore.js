import React, { Component } from 'react'
import { Navigate } from "react-router-dom"; // redirect does not work with create-react-app, Navigate works the exact same
import Nav from "../layouts/Nav";
import ExploreMap from "../maps/ExploreMap";
import Footer from "../layouts/Footer";

export default class Explore extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectBack: false,
            showHotels: false,
            showBars: false,
            showRestaurants: false,
            showPharmacies: false,
            showTrains: false,
            showCoffee: false,
            showAllVenues: true,
            showParalympicVenues: false,
            renderKey: 0 // to keep track of re-renders
        }
    }

    changeMapMarkers = (e) => {
        const name = e.target.name;
        this.setState({
            showHotels: name === "hotel",
            showBars: name === "pub",
            showRestaurants: name === "restaurant",
            showPharmacies: name === "pharmacy",
            showTrains: name === "train",
            showCoffee: name === "coffee",
            showAllVenues: name === "olympics",
            showParalympicVenues: name === "paralympics",
            renderKey: this.state.renderKey + 1
        });
    }

    changeVenueMarkers = (name) => {
        this.setState({
            showHotels: name === "hotel",
            showBars: name === "pub",
            showRestaurants: name === "restaurant",
            showPharmacies: name === "pharmacy",
            showTrains: name === "train",
            showCoffee: name === "coffee",
            showAllVenues: name === "olympics",
            showParalympicVenues: name === "paralympics",
            renderKey: this.state.renderKey + 1
        });
    }
    handleVenueChange = (e) => {
        // checked = show paralympic stadiums
        // unchecked = show all stadiums
        const isChecked = e.target.checked
        if(isChecked) {
            console.log("showing paralympic venues")
            this.changeVenueMarkers("paralympics")
        } else {
            console.log("showing all venues")
            this.changeVenueMarkers("olympics")
        }
    }


    render() {
        console.log(this.state.renderKey)
        return (
            <div>
                <div>
                    <Nav
                        hideExploreButton={true}
                    />
                </div>
                {this.state.redirectBack ? <Navigate to={"/Home"}/> :null }

                {/* body */}
                <div className="explore-body">

                    <div className="filter-container">
                        <div className="item"><h3><span className="lighter-text">Where would you like to go?</span></h3></div>

                        {/* TODO change the icons so that they are all the same design */}
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/hotel-icon.png" alt="Hotel icon" name="hotel"/></div>
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/pub-icon.png" alt="Pub icon" name="pub"/></div>
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/resturant-icon.png" alt="Restaurant icon" name="restaurant"/></div>
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/pharmacy-icon.png" alt="Pharamcy icon" name="pharmacy"/></div>
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/train-station-icon.png" alt="Train station icon" name="train"/></div>
                        <div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/coffee-shop-icon.png" alt="Coffee shop icon" name="coffee"/></div>
                        {/*<div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/olympics-icon.png" alt="Olympics icon" name="olympics"/></div>*/}
                        {/*<div onClick={this.changeMapMarkers}  className="filter-item"><img src="/images/explore-icons/paralympics-icon.png" alt="Paralympics icon" name="paralympics"/></div>*/}



                    </div>

                    <div className="controls-container">
                        <div className="alternate-venues">
                            <div className="checkbox-wrapper-41">
                                <input type="checkbox" onChange={this.handleVenueChange}/>
                            </div>
                        </div>







                    </div>

                     <ExploreMap
                         key={this.state.renderKey}
                         showHotels={this.state.showHotels}
                         showBars={this.state.showBars}
                         showResturants={this.state.showRestaurants}
                         showPharmacies={this.state.showPharmacies}
                         showTrains={this.state.showTrains}
                         showCoffee={this.state.showCoffee}
                         showAllVenues={this.state.showAllVenues}
                         showParalympicVenues={this.state.showParalympicVenues}
                         currentState={this.state}
                     />
                </div>

                <Footer/>
            </div>

        )
    }

}