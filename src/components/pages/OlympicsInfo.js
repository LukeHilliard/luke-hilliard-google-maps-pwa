import React, { Component } from "react"
import Nav from "../layouts/Nav";
import Footer from "../layouts/Footer";
import StadiumsMap from "../maps/StadiumsMap";

export default class OlympicsInfo extends Component {


    render() {
        return(
            <div>
                <div>
                    <Nav
                        hideExploreButton={false}
                    />
                </div>

                <div className="olympics-body">

                    <div className="information-container">

                        <div className="item">
                            <h3>Something1</h3>
                            <p>Some text in here Some text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in here</p>
                        </div>
                        <div className="item">
                            <h3>Something2</h3>
                            <p>Some text in here Some text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in here</p>
                        </div>
                        <div className="item">
                            <h3>Something3</h3>
                            <p>Some text in here Some text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in hereSome text in here</p>
                        </div>
                    </div>


                    <StadiumsMap
                        showParalympicVenues={false}
                        showAllVenues={true}
                    />
                </div>

                <Footer/>
            </div>
        )
    }

}