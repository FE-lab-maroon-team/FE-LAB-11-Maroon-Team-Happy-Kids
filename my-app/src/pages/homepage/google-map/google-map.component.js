import React from 'react';
import classes from './google-map.module.scss';

export class GoogleMap extends React.Component{
    get googleMapDiv(){
        return document.getElementById('google-map');
    }

    googleMapRef = React.createRef();

    createGoogleMap = () =>{
        let map = new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 14,
            center: {
                lat: 49.8397,
                lng: 24.0297,
            },
            desabledDefaultUI: true,
        })
        console.log(map);
    }
    componentDidMount(){
        const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCXvpwhEPBX-i-r8KLMGgnlIxwDDaXmhFs&callback=initMap`;
            googleMapScript.type = 'text/javascript';
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap();
            this.marker = this.createMarker();
        })
    }
    createMarker = () => {
        new window.google.maps.Map({
            position: {
                lat: 49.8397,
                lng: 24.0297,
            },
            map: this.googleMap,
        })
        // console.log(markerMap);
    }
    render(){
        return(
            <>
                <div
                id="google-map"
                ref={this.googleMapRef}
                style={{width: '300px', height: '300px'}}
                />
            </>
        )
    }
}