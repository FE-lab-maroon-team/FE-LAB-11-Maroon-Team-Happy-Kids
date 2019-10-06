import React from 'react';
import './spinner.css';

const Spinner = () => {
    return (
        <div className="spinner">
            <div className="animation">
                <div className="circle1"></div>
                <div className="circle2"></div>
            </div>
            <div></div>
            <p className="loading">Завантаження...</p>
        </div>
    )
};

export default Spinner;

