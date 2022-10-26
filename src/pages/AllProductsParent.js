import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import { ProductElements } from "../components/ProductWrapper";

const AllProductsParent = (props) => {
    return (
        <div>
            <Header />
            <HeaderPhoto text={props.text} head={props.head} />
            <div className="frame-wrapper">
                {props.product.map((allproduct) => {
                    return <ProductElements  product={allproduct} length={allproduct.length}/>
                })}
            </div>
            <Footer />
        </div>
    );
}

export default AllProductsParent;
