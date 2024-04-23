import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


// P = paralympic venue
const allVenues = [
    ["Porte De La Chapelle Arena", 48.89932267430479, 2.3606702361224805], // P
    ["Bercy Arena", 48.83875912475979, 2.3785132131007227], // P
    ["LA CONCORDE URBAN PARK", 48.86576698788513, 2.3212107284479253],
    ["Grand Palais", 48.86623610891032, 2.3125080419385124], // P
    ["Pont Alexandre III", 48.86404831646058, 2.313553593781455], // P
    ["INVALIDES", 48.861233148629125, 2.3132212022750034], // P
    ["Grand Palais Éphémère", 48.85332170826003, 2.3025434662729287], // P
    ["Émile Anthoine Stadium", 48.856770416810335, 2.2915689734850564], // P
    ["TROCADÉRO", 48.86283906246517, 2.2875079644181953],
    ["SOUTH PARIS ARENA", 48.8318532213212, 2.2905045750681245], // P
    ["Parc des Princes", 48.84156270020192, 2.253032306745414],
    ["Roland Garros Stadium", 48.84593495802019, 2.2538414644181954] // P
    //["", ],
]
const paralympicVenues = [["Porte De La Chapelle Arena", 48.89932267430479, 2.3606702361224805],
    ["Bercy Arena", 48.83875912475979, 2.3785132131007227],
    ["Grand Palais", 48.86623610891032, 2.3125080419385124],
    ["Pont Alexandre III", 48.86404831646058, 2.313553593781455],
    ["INVALIDES", 48.861233148629125, 2.3132212022750034],
    ["Grand Palais Éphémère", 48.85332170826003, 2.3025434662729287],
    ["Émile Anthoine Stadium", 48.856770416810335, 2.2915689734850564],
    ["SOUTH PARIS ARENA", 48.8318532213212, 2.2905045750681245],
    ["Roland Garros Stadium", 48.84593495802019, 2.2538414644181954]
]

const VENUE_MAP_CENTER = { // A point in paris that has all venues within its zoom
    lat: 48.866854673819844,
    lng: 2.3267569838040787
}
const SEARCH_MAP_CENTER = { // as close to the center of Paris as possible
    lat:48.85917639134529,
    lng:2.342075268567509
}
const DEFAULT_MAP_ZOOM = 12




class ExploreMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showingParalympicLocations: false
        }
    }

    componentDidMount() {
        this.loadMap()
    }



    loadMap = () => {
        const { google } = this.props;
        let request = ""
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: DEFAULT_MAP_ZOOM,
            center: VENUE_MAP_CENTER,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        })

        const infoWindow = new google.maps.InfoWindow();
        const service = new google.maps.places.PlacesService(map);


        // Displays all venues and paralympic venues
        if(this.props.showAllVenues) {
            console.log("Displaying all venues to ExploreMap")
            console.log(this.props)
            allVenues.forEach(location => {
                const marker = new google.maps.Marker({
                    position: { lat: location[1], lng: location[2] },
                    map: map
                })
                map.setZoom(DEFAULT_MAP_ZOOM)

                google.maps.event.addListener(marker, "click", () => {
                    infoWindow.setContent(location[0]);
                    infoWindow.open(map, marker);
                })
            })

        } else if(this.props.showParalympicVenues) {
            console.log("Displaying paralympic venues to ExploreMap ")
            console.log(this.props)
            paralympicVenues.forEach(location => {
                const marker = new google.maps.Marker({
                    position: { lat: location[1], lng: location[2] },
                    map: map

                })
                map.setZoom(DEFAULT_MAP_ZOOM)

                google.maps.event.addListener(marker, "click", () => {
                    infoWindow.setContent(location[0]);
                    infoWindow.open(map, marker);
                })
            })



            /**
             *     The next statements use Places API to search within a certain radius using
             *     keywords and types to refine the search
             */
        } else if(this.props.showHotels) { // display hotels in the region
            console.log("Displaying hotels to ExploreMap")
            console.log(this.props)
            const request = {
                location: SEARCH_MAP_CENTER,
                radius: '7000',
                keyword: "hotel"
            };

            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map\
            // https://developers.google.com/maps/documentation/places/web-service/search-nearby
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });

        } else if(this.props.showBars) { // displays all bars in the area
            console.log("Displaying bars to ExploreMap")
            console.log(this.props)
            const request = {
                location: SEARCH_MAP_CENTER,
                radius: '6000',
                keyword: "bar"
            }

            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });

        } else if(this.props.showResturants) { // displays all restaurants in the area
            console.log("Displaying restaurants to ExploreMap")
            console.log(this.props)
            const request = {
                location: map.getCenter(),
                radius: '8000',
                type: "restaurant"
            }
            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });

        } else if(this.props.showPharmacies) { // displays all pharmacies in the area
            console.log("Displaying pharmacies to ExploreMap")
            console.log(this.props)
            const request = {
                location: map.getCenter(),
                radius: '8000',
                keyword: "chemist"
            }
            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });

        } else if(this.props.showTrains) { // displays all local train stations/stops
            console.log("Displaying train stations to ExploreMap")
            console.log(this.props)
            const request = {
                location: map.getCenter(),
                radius: '9000',
                keyword: "train station"
            }
            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });

        } else if(this.props.showCoffee) { // displays all coffee shops in the area
            console.log("Displaying coffee shops to ExploreMap")
            console.log(this.props)
            const request = {
                location: map.getCenter(),
                radius: '5000',
                keyword: "coffee shop"
            }
            // nearbySearch provided by Places API to get location of each result, use createMarker function to display on map
            service.nearbySearch(request, (results, status) => {
                if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                    map.setZoom(DEFAULT_MAP_ZOOM)
                    results.forEach((place) => {
                        this.createMarker(place, map, infoWindow);
                    });
                }
            });
        }


    }
    createMarker = (place, map, infoWindow) => {
        // if no geometry provided return nothing //TODO create a pop up message?
        if (!place.geometry || !place.geometry.location) return;

        const marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location,
        });

        google.maps.event.addListener(marker, "click", () => {
            infoWindow.setContent(place.name || "");
            infoWindow.open(map, marker);
        });
    }

    render() {

        return (
            <div className="map-container">
                <div id="map" className="explore-map"></div>
            </div>

        )
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
})(ExploreMap)



