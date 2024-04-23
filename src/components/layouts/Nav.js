import React, { Component } from 'react'
import { Navigate } from "react-router-dom"; // redirect does not work with create-react-app, Navigate works the exact same
import SlideInMenu from "./SlideInMenu";


export default class Nav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectToExplore: false,
            showSlideInMenu: false
        }
    }

    // Function to hide and show the slid in menu when the menu-icon image is clicked
    toggleSlideInMenu = () => {
        const isShowing = this.state.showSlideInMenu
        // if the menu is already showing, hide it
        if(isShowing)
            this.setState({showSlideInMenu: false})
        else // if it is hidden, show it
            this.setState({showSlideInMenu: true})
    }
    render() {
        return (
            <nav className="nav-container">
                {/* Redirects */}
                {this.state.redirectToExplore ? <Navigate to={"/Explore"}/> : null}

                {this.state.showSlideInMenu && (
                    <SlideInMenu
                        isOpen={this.state.showSlideInMenu}
                        toggleMenu={this.toggleSlideInMenu}
                        hideExploreButton={this.props.hideExploreButton}
                    />
                )}


                {!this.props.hideExploreButton ?
                    <div className="items">
                        <div className="left">
                            <div className="keep-together">
                                <img onClick={this.toggleSlideInMenu} className="menu-icon" src="/images/nav/three-line-menu-icon.png" />

                                <img className="olympic-logo" src="https://upload.wikimedia.org/wikipedia/en/d/d1/2024_Summer_Olympics_logo.svg"/>
                            </div>

                            {/*<img src="https://img.olympics.com/images/image/private//f_auto/primary/o3eae7skxxu8gba2ctwp" alt="Olympic rings" className="olympic-ring-logo"/>*/}
                        </div>

                        <div className="right">
                            <div className="keep-together">
                                <button className="explore-button" onClick={() => this.setState({redirectToExplore: true})}>
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <div className="items-without-explore">
                        <div className="items">

                                <img onClick={this.toggleSlideInMenu} className="menu-icon" src="/images/nav/three-line-menu-icon.png" />

                                <img className="olympic-logo" src="https://upload.wikimedia.org/wikipedia/en/d/d1/2024_Summer_Olympics_logo.svg"/>


                            {/*<img src="https://img.olympics.com/images/image/private//f_auto/primary/o3eae7skxxu8gba2ctwp" alt="Olympic rings" className="olympic-ring-logo"/>*/}
                        </div>


                    </div>
                }

            </nav>
        )
    }
}
