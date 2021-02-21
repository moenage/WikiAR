import React from 'react';
import InfoCard from './InfoCard/InfoCard';

import Styling from './styles';
    
const InfoCards = () => {
    const classing = Styling();
    return(
        <>
        <h1 classname={classing.header}>InfoCards</h1>
        <InfoCard />
        <InfoCard />
        </>
    );
}

export default InfoCards;