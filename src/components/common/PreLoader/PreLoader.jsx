import React from 'react';
import DoubleRing from '../../../assets/preloader/doubleRing1s200px.svg';

const PreLoader = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <img className="text-primary" src={DoubleRing} alt="preloader" />
        </div>
    )
};

export default PreLoader;