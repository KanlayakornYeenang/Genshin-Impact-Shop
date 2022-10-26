import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";

const AllProducts = (props) => {
    return (
        <div>
            <Header />
            <HeaderPhoto text={props.text} head={props.head}/>
            <div className="frame-wrapper">
                <ProductElements  product={props.product} length={props.product.length}/>
            </div>
            <Footer />
        </div>
    );
}

export default AllProducts;
