import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {standees} from "../data/ProductList";

const Standees = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Standees" />
            <div className="frame-wrapper">
                <ProductElements  product={standees} length={standees.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Standees;