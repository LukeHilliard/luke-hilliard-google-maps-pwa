import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


class GoogleMap extends Component {

    /*
    Trying to make this a reusable component

            To use this component pass the following values as props:
            lat
            lng
            zoom
            locations[]
     */
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.loadMap()
    }

    loadMap() {
        const { google } = this.props;
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: this.props.zoom,
            center: { lat: this.props.lat, lng: this.props.lng },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })

        const infoWindow = new google.maps.InfoWindow();

        this.props.locations.forEach(location => {
            const marker = new google.maps.Marker({
                position: { lat: location[1], lng: location[2] },
                map: map
            })

            google.maps.event.addListener(marker, "click", () => {
                infoWindow.setContent(location[0]);
                infoWindow.open(map, marker);
            })
        })
    }

    render() {
        return (
            <div id="map" className="testing-map"></div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(GoogleMap)