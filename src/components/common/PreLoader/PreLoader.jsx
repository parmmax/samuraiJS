import React from 'react';
import DoubleRing from '../../../assets/preloader/doubleRing1s200px.svg';

const PreLoader = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <img className="text-primary" src={DoubleRing} alt="preloader" />
        </div>
    )
};

export default PreLoader;