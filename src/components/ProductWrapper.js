import Product from "./Product";
import ProductSale from "./ProductSale";
import { tops, bottoms, sales } from "../data/ProductList";
import "./ProductWrapper.css";

const ProductWrapper = () => {
  const productElementsTops = tops.slice(0, 2).map((list, index) => {
    return <Product key={index} list={list} />;
  });
  const productElementsBottoms = bottoms.map((list, index) => {
    return <Product key={index} list={list} />;
  });
  const productElementsSales = sales.slice(0, 4).map((list, index) => {
    return <ProductSale key={index} list={list} />;
  });
  return (
    <div>
        <div className="frame-wrapper">
            {productElementsTops}
            {productElementsBottoms}
        </div>
        <div className="text">
        <h1>Sales</h1>
        </div>
        <div className="frame-wrapper">
            {productElementsSales}
        </div>
    </div>
    );
};

export default ProductWrapper;
