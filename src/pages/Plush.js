import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {plush} from "../data/ProductList";

const Plush = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Plush" />
            <div className="frame-wrapper">
                <ProductElements  product={plush} length={plush.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Plush;