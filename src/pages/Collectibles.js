import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";

import {
    badges,
    figures,
    keychains,
    pins,
    plush,
    standees,
  } from "../data/ProductList";

const Collectibles = (props) => {
    return (
        <div>
            <Header />
            <HeaderPhoto text={"Collectibles"} />
            <div className="frame-wrapper">
                <ProductElements  product={badges} length={badges.length}/>
                <ProductElements  product={figures} length={figures.length}/>
                <ProductElements  product={keychains} length={keychains.length}/>
                <ProductElements  product={pins} length={pins.length}/>
                <ProductElements  product={plush} length={plush.length}/>
                <ProductElements  product={standees} length={standees.length}/>
            </div>
            <Footer />
        </div>
    );
}

export default Collectibles;
