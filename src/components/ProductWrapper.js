import Product from "./Product";
import ProductSale from "./ProductSale";
import {
  tops,
  bottoms,
  sales,
  badges,
  pins,
  standees,
  plush,
} from "../data/ProductList";
import "./ProductWrapper.css";

//รายการสินค้าทั้งหมดโดยนำข้อมูลใน JSON มา Map แล้วนำข้อมูลออกมาแสดง

export const ProductElements = (props) => {
  return props.product.slice(0, props.length).map((list, index) => {
    return <Product key={index} list={list} />;
  });
};

export const ProductElementsSales = (props) => {
  return props.product.slice(0, props.length).map((list, index) => {
    return <ProductSale key={index} list={list} />;
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
    </div>
  );
};

export const ProductWrapperSale = () => {
  return (
    <div style={{paddingTop:"5vw"}}>
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
