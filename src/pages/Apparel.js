import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {tops, bottoms} from "../data/ProductList";

const Apparel = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Apparel" />
            <div className="frame-wrapper">
                <ProductElements  product={tops} length={tops.length}/>
                <ProductElements  product={bottoms} length={bottoms.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Apparel;