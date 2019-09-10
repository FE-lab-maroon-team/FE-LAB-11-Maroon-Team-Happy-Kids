import React from 'react';
import styles from './google-map.module.scss';

export class GoogleMap extends React.Component{
    get googleMapDiv(){
        return document.getElementById('google-map');
    }

    googleMapRef = React.createRef();

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