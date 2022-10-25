import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {tops} from "../data/ProductList";

const Tops = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Tops" />
            <div className="frame-wrapper">
                <ProductElements  product={tops} length={tops.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Tops;