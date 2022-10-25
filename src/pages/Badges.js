import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";
import {badges} from "../data/ProductList";

const Badges = () => {
    return (
        <div>
            <Header />
            <HeaderPhoto text="Badges" />
            <div className="frame-wrapper">
                <ProductElements  product={badges} length={badges.length}/>
            </div>
            <Footer />
        </div>

    );
}

export default Badges;