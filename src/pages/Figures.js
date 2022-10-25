import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {figures} from "../data/ProductList";

const Figures = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Figures" />
            <div className="frame-wrapper">
                <ProductElements  product={figures} length={figures.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Figures;