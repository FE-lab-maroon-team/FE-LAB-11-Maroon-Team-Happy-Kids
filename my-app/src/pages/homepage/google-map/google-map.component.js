import React, { Component } from 'react';
import styles from './google-map.module.scss';

export class GoogleMap extends Component{
    componentDidMount(){
        const googleMapScript = document.createElement('script');
            googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCXvpwhEPBX-i-r8KLMGgnlIxwDDaXmhFs&callback=initMap`;
            googleMapScript.type = 'text/javascript';
        window.document.body.appendChild(googleMapScript);

        googleMapScript.addEventListener('load', () => {
            this.googleMap = this.createGoogleMap();
        })
    }

    googleMapRef = React.createRef();

    createGoogleMap = () =>{
        let map = new window.google.maps.Map(this.googleMapRef.current, {
            zoom: 14,
            center: {
                lat: 49.84366863,
                lng: 23.98048282,
            },
            desabledDefaultUI: true,
        })
        new window.google.maps.Marker({
            position: {
                lat: 49.84366863,
                lng: 23.98048282,
            },
            map: map,
            title: `Дитячий будинок "Надія" `
        })
    }
    render(){
        return(
            <div className={styles.container_google_maps}>
                <h1>Де ми знаходимось!</h1>
                <div
                ref={this.googleMapRef}
                className={styles.google_map}
                />
                
            </div>
        )
    }
}