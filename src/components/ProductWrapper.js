import Product from "./Product";
import ProductSale from "./ProductSale";
import { tops, bottoms, sales, badges, pins, standees, plush } from "../data/ProductList";
import "./ProductWrapper.css";

<<<<<<< HEAD
const ProductElements = (props) => {
  return props.product.slice(0, props.length).map((list) => {
    return <Product list={list} />;
=======
const ProductWrapper = () => {
  const productElementsTops = tops.map((list, index) => {
    return <Product key={index} list={list} />;
  });
  const productElementsBottoms = bottoms.map((list, index) => {
    return <Product key={index} list={list} />;
>>>>>>> 82b2f6e58f724018e554040d352c20285c579147
  });
};

const ProductElementsSales = (props) => {
  return props.product.slice(0, props.length).map((list) => {
    return <ProductSale list={list} />;
  });
};

const ProductWrapper = () => {
  return (
    <div>
      <div className="frame-wrapper">
        <ProductElements product={tops} length={2} />
        <ProductElements product={bottoms} length={2} />
        <ProductElements product={badges} length={2} />
        <ProductElements product={standees} length={2} />
        <ProductElements product={pins} length={2} />
        <ProductElements product={plush} length={2} />
      </div>
      <div className="text">
        <h1>Sales</h1>
      </div>
      <div className="frame-wrapper">
        {<ProductElementsSales product={sales} length={4} />}
      </div>
    </div>
  );
};

export default ProductWrapper;
