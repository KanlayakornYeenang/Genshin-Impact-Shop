import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";

const CollectiblesProduct = (props) => {
    return (
        <div>
            <Header />
            <HeaderPhoto text={props.text} />
            <div className="frame-wrapper">
                <ProductElements  product={props.product} length={props.product.length}/>
            </div>
            <Footer />
        </div>
    );
}

export default CollectiblesProduct;
