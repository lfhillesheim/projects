import React from 'react';


import HeroSection from '../../components/HeroSection/heroSection';
import CardPortifolio from '../../components/Portifolio/cards';
import ServiceContainer from '../../components/services/cards';
import StepContainer from '../../components/Steps/cards';


function Landing () {
    return (
        <React.Fragment>   
        
        <HeroSection ></HeroSection>
        <ServiceContainer></ServiceContainer>
        <StepContainer></StepContainer>
        <CardPortifolio></CardPortifolio>
        </React.Fragment>
    );
}

export default Landing;