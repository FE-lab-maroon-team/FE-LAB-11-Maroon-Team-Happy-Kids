import React from 'react';
import classes from './google-map.module.scss';

export class GoogleMap extends React.Component{
    get googleMapDiv(){
        return document.getElementById('google-map');
    }
    createGoogleMap = () =>{
        let map = new window.google.maps.Map(document.getElementById('google-map'), {
            zoom: 14,
            center: {
                lat: 49.8397,
                lng: 24.0297,
            },
            desabledDefaultUI: true,
        })
        new window.google.maps.Marker({
            position: {
                lat: 49.8397,
                lng: 24.0297,
            },
            map: map,
            title: 'Hello World'
        })
    }
    componentDidMount(){
        const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCXvpwhEPBX-i-r8KLMGgnlIxwDDaXmhFs&callback=initMap`;
            googleMapScript.type = 'text/javascript';
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap();
        })
    }
    render(){
        return(
            <>
                <div
                id="google-map"
                ref={this.googleMapRef}
                className={classes.google_map}
                />
            </>
        )
    }
}