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
            <nav className="lh_navContainer">
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
                    <div className="lh_items">
                        <div className="lh_left">
                            <div className="lh_keepTogether">
                                <img onClick={this.toggleSlideInMenu} className="lh_menuIcon" src="/images/nav/three-line-menu-icon.png" alt="Open side menu"/>

                                <img className="lh_olympicLogo" src="https://upload.wikimedia.org/wikipedia/en/d/d1/2024_Summer_Olympics_logo.svg" alt="Paris 2024 Olympics logo"/>
                            </div>

                            {/*<img src="https://img.olympics.com/images/image/private//f_auto/primary/o3eae7skxxu8gba2ctwp" alt="Olympic rings" className="olympic-ring-logo"/>*/}
                        </div>

                        <div className="lh_right">
                            <div className="lh_keepTogether">
                                <button className="lh_exploreButton" onClick={() => this.setState({redirectToExplore: true})}>
                                    Explore Now
                                </button>
                            </div>
                        </div>
                    </div>
                :
                    <div className="lh_itemsWithoutExplore">
                        <div className="lh_items">

                                <img onClick={this.toggleSlideInMenu} className="lh_menuIcon" src="/images/nav/three-line-menu-icon.png" alt="Open side menu"/>

                                <img className="lh_olympicLogo" src="https://upload.wikimedia.org/wikipedia/en/d/d1/2024_Summer_Olympics_logo.svg" alt="Paris 2024 Olympics logo"/>


                            {/*<img src="https://img.olympics.com/images/image/private//f_auto/primary/o3eae7skxxu8gba2ctwp" alt="Olympic rings" className="olympic-ring-logo"/>*/}
                        </div>


                    </div>
                }

            </nav>
        )
    }
}
