import React from 'react';
import { useSelector } from 'react-redux';

import InfoCard from './InfoCard/InfoCard';

import Styling from './styles';
    
const InfoCards = ({ setCurrentId }) => {
    const infoCards = useSelector((state) => state.infoCards);
    const classing = Styling();

    console.log(infoCards);
    return(
        <>
        <h1 className={classing.header}>InfoCards</h1>
        <InfoCard />
        <InfoCard />
        </>
    );
}

export default InfoCards;