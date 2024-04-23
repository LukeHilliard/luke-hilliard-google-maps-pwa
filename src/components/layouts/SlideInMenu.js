import React, { Component } from 'react'
import { Navigate } from "react-router-dom";// redirect does not work with create-react-app, Navigate works the exact same

export default class SlideInMenu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectToExplore: false,
            redirectToHome: false,
            redirectToTestingDirectory: false,
            redirectToOlympicsInfo: false,
        }

    }

    render() {
        console.log(this.props.hideExploreButton)
        return (
            <div className={`slide-in-menu ${this.props.isOpen ? 'open' : 'closed'}`}>

                {this.state.redirectToExplore ? <Navigate to={"/Explore"}/> : null}
                {this.state.redirectToHome ? <Navigate to={"/Home"}/> : null}
                {this.state.redirectToTestingDirectory ? <Navigate to={"/TestingDirectory"}/> : null}
                {this.state.redirectToOlympicsInfo ? <Navigate to={"/OlympicsInfo"}/> : null}

                <div className="menu-header">
                    <h1>Paris 2024</h1>
                    <button className="close-button" onClick={this.props.toggleMenu}>X</button>
                </div>

                <div className="menu-options">
                    <div className="menu-option" onClick={() => this.setState({redirectToHome: true})}>
                        <h5>Home</h5>
                    </div>
                    <div className="menu-option" onClick={() => this.setState({redirectToOlympicsInfo: true})}>
                        <h5>Olympics 2024</h5>
                    </div>
                    <div className="menu-option">
                        <h5>Tourism</h5>
                    </div>
                    <div className="menu-option">
                        <h5>Option 4</h5>
                    </div>
                    <div className="menu-option">
                        <h5>Are you attending?</h5>
                    </div>
                    <div className="menu-option" onClick={() => this.setState({redirectToTestingDirectory: true})}>
                        <h5><span className="red-text">Go to Testing Directory</span></h5>
                    </div>

                </div>

                {!this.props.hideExploreButton ?
                    <div className="small-screen-button">
                        <div className="keep-together">
                            <button className="explore-button" onClick={() => this.setState({redirectToExplore: true})}>
                                Explore Now
                            </button>
                        </div>
                    </div>
                    :
                    null
                }
            </div>
        )
    }

}