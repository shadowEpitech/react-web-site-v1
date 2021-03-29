import React from 'react';
import HeroSection from "../../HeroSection";
import {homeObjOne} from './Data';
import Prising from "../../Prising";

function Services() {
    return (
        <>
            <Prising />
            <HeroSection {...homeObjOne} />
        </>
    )
}
export default Services;
