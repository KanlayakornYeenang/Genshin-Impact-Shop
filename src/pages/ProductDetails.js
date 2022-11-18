import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import ShowPath from "../components/ShowPath";
import { MyGalleryProducts } from "../components/Slideshow";
import Footer from "../components/Footer";
import "../components/ProductDetails.css";
import Button from "../components/Button";
import SimpleAccordion from "../components/Accordion";
import SizeChart, { SizeChartHeader } from "../components/SizeChart";
import { useLocation } from "react-router-dom";

const Details = (props) => {
  let isApparel = useLocation().pathname.split("/").slice(1)[0] == "apparel";
  const [cart, setCart] = useState([]);
  const didMount = useRef(false);
  let isProductsIn = false

  const addToCart = (name, price, img, size, url) => {
    if (JSON.parse(localStorage.getItem("cart")).length > 0) {
      JSON.parse(localStorage.getItem("cart")).map((products, index) => {
        if (isApparel && name == products.name && size == products.size) {
          cart.splice(index, 1);
          let amounts = products.amount + 1
          if (amounts > 5) {amounts = 5}
          setCart([
            ...cart,
            {
              name: name,
              price: parseFloat(price),
              img: img,
              size: size,
              url: url,
              amount: amounts,
            },
          ]);
          isProductsIn = true;
        }
        else if (isApparel && name == products.name && size != products.size && !isProductsIn) {
          setCart([
            ...cart,
            {
              name: name,
              price: parseFloat(price),
              img: img,
              size: size,
              url, url,
              amount: 1,
            },
          ]);
        }
       else if (!isApparel && name == products.name) {
          cart.splice(index, 1);
          let amounts = products.amount + 1
          if (amounts > 5) {amounts = 5}
          setCart([
            ...cart,
            {
              name: name,
              price: parseFloat(price),
              img: img,
              size: size,
              url: url,
              amount: amounts,
            },
          ]);
          isProductsIn = true;
        } else if (!isApparel && !isProductsIn) {
          setCart([
            ...cart,
            {
              name: name,
              price: parseFloat(price),
              img: img,
              size: size,
              url, url,
              amount: 1,
            },
          ]);
        }
      });
      isProductsIn = true;
    } else {
      setCart([
        ...cart,
        {
          name: name,
          price: parseFloat(price),
          img: img,
          size: size,
          url, url,
          amount: 1,
        },
      ]);
    }
  };

  useEffect(() => {
    if (cart == null) {
      setCart([]);
    }
    if (didMount.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
      didMount.current = true;
      const saveCart = localStorage.getItem("cart");
      setCart(JSON.parse(saveCart));
    }
  }, [cart]);

  const [size, setSize] = useState('xs');

  const handleCurrentSize = (size) => {
    setSize(size)
  }

  return (
    <div className="details">
      <div className="shape shapetop"></div>
      <div className="details-wrapper">
        <div className="details-header">
          <div className="details-name">{props.products.name}</div>
          <div className="details-price">${props.products.price}</div>
        </div>
        {isApparel ? (
          <div style={{ display: "flex", flexFlow: "column", rowGap: "1vw" }}>
            <SizeChartHeader />
            <SizeChart handleCurrentSize={handleCurrentSize}/>
          </div>
        ) : null}
        <div
          onClick={() => addToCart(props.products.name, props.products.price, props.products.images[0], isApparel ? size : null, props.products.url)}
        >
          <Button string={"$" + props.products.price + " - Add to Cart"} />
        </div>
        <div className="details-description">
          <div style={{ whiteSpace: "pre-line" }}>
            <SimpleAccordion details={props.products.description} />
          </div>
        </div>
      </div>
      <div className="shape shapebottom"></div>
    </div>
  );
};

const ProductDetails = (props) => {
  let images = [];
  props.products.images.map((img) =>
    images.push({ original: img, thumbnail: img })
  );

  return (
    <div>
      <Header />
      <ShowPath />
      <div className="product-frame">
        <div className="product-details">
          <MyGalleryProducts images={images} />
          <Details products={props.products} />
        </div>
        <img
          style={{ width: "100vw", height: "2.75vw" }}
          src="/images/ShapeLine.png"
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
