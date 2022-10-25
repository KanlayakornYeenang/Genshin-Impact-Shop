import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {bottoms} from "../data/ProductList";

const Bottoms = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Bottoms" />
            <div className="frame-wrapper">
                <ProductElements  product={bottoms} length={bottoms.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Bottoms;