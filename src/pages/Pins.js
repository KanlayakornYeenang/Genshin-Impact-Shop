import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {pins} from "../data/ProductList";

const Pins = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Pins" />
            <div className="frame-wrapper">
                <ProductElements  product={pins} length={pins.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Pins;