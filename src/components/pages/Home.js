import React, {Component} from "react";
import { Navigate } from "react-router-dom"; // redirect does not work with create-react-app, Navigate works the exact same
import Nav from "../layouts/Nav";

export default class Home extends Component
{
    constructor() {
        super();

        this.state = {
            redirectBack: false
        }
    }

    render()
    {
        return (
            <div>
                {this.state.redirectBack ? <Navigate to={"/TestingDirectory"}/> :null }
                <Nav
                    hideExploreButton={false}
                />
                <div>

                </div>
            </div>
        )
    }

}