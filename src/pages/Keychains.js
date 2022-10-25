import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {keychains} from "../data/ProductList";

const Keychains = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Keychains" />
            <div className="frame-wrapper">
                <ProductElements  product={keychains} length={keychains.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Keychains;