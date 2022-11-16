import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderPhoto from "../components/HeaderPhoto";
import ShowPath from "../components/ShowPath";
import { ProductElements } from "../components/ProductWrapper";

const AllProductsParent = (props) => {
    return (
        <div>
            <Header />
            <ShowPath />
            <HeaderPhoto text={props.text} img={props.img} />
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
