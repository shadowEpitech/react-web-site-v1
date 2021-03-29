import React from 'react';
import HeroSection from "../../HeroSection";
import {homeObjFour, homeObjOne, homeObjThree, homeObjTwo} from './Data';
import Prising from "../../Prising";

function Home() {
    return (
        <>

            <HeroSection {...homeObjOne} />

            <Prising />
            <HeroSection {...homeObjTwo} />
            <HeroSection {...homeObjThree} />
            <HeroSection {...homeObjFour} />
        </>
    )
}
export default Home;
