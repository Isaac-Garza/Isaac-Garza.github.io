import React from 'react';

import Hero from '../components/Hero'
import Carousel from '../components/Carousel';
import ShootingStar from '../components/stars';

function HomePage(props) {

    return(
        <>
            {/* <ShootingStar /> */}
            <Hero title={props.title} subTitle= {props.subTitle} text={props.text}/>
            <Carousel />
        </>
    );
}

export default HomePage;