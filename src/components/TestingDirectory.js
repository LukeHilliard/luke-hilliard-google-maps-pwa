import React, {Component} from "react";
import { Navigate } from "react-router-dom"; // redirect does not work with create-react-app, Navigate works the exact same
import Nav from './layouts/Nav'
import Footer from "./layouts/Footer";
import ExploreMap from "./maps/ExploreMap";

export default class TestingDirectory extends Component
{
    constructor() {
        super();

        this.state={
            redirectToHome: false,
            redirectToMap: false
        }
    }


    render() {
        return(


            <div>
                {this.state.redirectToHome ? <Navigate to={"/Home"}/> :null }
                {this.state.redirectToMap ? <Navigate to={""}/> :null }



                <Nav/>
                <div className="lh_testing-container">
                    <div className="lh_controlsContainer">
                        <div className="lh_item">
                            <button onClick={() => this.setState({redirectToHome: true})}>
                                Home Page
                            </button>
                        </div>

                        <div className="lh_item">
                            <button onClick={() => this.setState({redirectToMap: true})}>
                                Map
                            </button>
                        </div>
                    </div>

                        <ExploreMap/>

                </div>

                <Footer/>


            </div>

        )
    }
}
