import Prising from "../../Prising";
import HeroSection from "../../HeroSection";
import {homeObjTwo} from "./Data";
import React from "react";

function Products() {
    return (
        <>
            <Prising />
            <HeroSection {...homeObjTwo} />
        </>
    )
}
export default Products;
