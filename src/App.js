import React, {Component} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import"./css/App.css"
import "./css/TestingDirectory.css"
import "./css/Footer.css"
import "./css/Nav.css"
import "./css/SlideInMenu.css"
import "./css/Explore.css"
import "./css/OlympicsInfo.css"
import Home from "./components/pages/Home";
import TestingDirectory from "./components/TestingDirectory";
import Explore from "./components/pages/Explore";
import OlympicsInfo from "./components/pages/OlympicsInfo";


// import AddCar from "./components/AddCar"



export default class App extends Component
{
  render()
  {
    return (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route exact path={"/Home"} element={ <Home/> } />
            <Route exact path={"/Explore"} element={ <Explore/> } />
            <Route exact path={"/OlympicsInfo"} component={ <OlympicsInfo/> } />
            <Route exact path={"/TestingDirectory"} component={ <TestingDirectory/> } />

            <Route path="*" component={Home}/>
          </Routes>
        </BrowserRouter>
    )
  }
}