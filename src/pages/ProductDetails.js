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
  const [item, setItem] = useState([]);
  const didMount = useRef(false);

    //   JSON.parse(localStorage.getItem("cart")).map((products, index) => {
    //     if (name == products.name) {
    //       cart.splice(index, 1)
    //       setCart([
    //         ...cart,

    //         {
    //           name: name,
    //           price: parseFloat(price),
    //           images: images,
    //           amount: products.amount+1,
    //         },
    //       ]);
    //     } 
    //   });
    // } else {
    //   setCart([
    //     ...cart,
    //     {
    //       name: name,
    //       price: parseFloat(price),
    //       images: images,
    //       amount: 1,
    //     },
    //   ]);
    // }

  // const addToCart = (name, price, images) => {
  //   if (JSON.parse(localStorage.getItem("cart")).length > 0) {
  //     let i=0;
  //     while(true){
  //       // JSON.parse(localStorage.getItem("cart"))[i]
  //       if(name == JSON.parse(localStorage.getItem("cart"))[i].name){
  //         setCart([
  //           ...cart,
  //           {
  //             name: name,
  //             price: parseFloat(price),
  //             images: images,
  //             amount: JSON.parse(localStorage.getItem("cart"))[i].amount+1,
  //           }
  //           ])
  //           (JSON.parse(localStorage.getItem("cart"))).splice(i, 1)
  //           break;
  //         }
  //         else{
  //           setCart([
  //             ...cart,
  //             {
  //               name: name,
  //               price: parseFloat(price),
  //               images: images,
  //               amount: 1,
  //             },
  //           ]);
  //         }
  //       }
  //     // JSON.parse(localStorage.getItem("cart")).map((products, index) => {
  //     //   if (name == products.name) {
  //     //     cart.splice(index, 1)
  //     //     setCart([
  //     //       ...cart,
  //     //       {
  //     //         name: name,
  //     //         price: parseFloat(price),
  //     //         images: images,
  //     //         amount: products.amount+1,
  //     //       },
  //     //     ]);
  //     //     //break ตรงนี้
  //     //   }
  //     //   else {
  //     //     setCart([
  //     //       ...cart,
  //     //       {
  //     //         name: name,
  //     //         price: parseFloat(price),
  //     //         images: images,
  //     //         amount: 1,
  //     //       },
  //     //     ]);
  //     //   }
  //     // });
  //     } else {
  //     setCart([
  //       ...cart,
  //       {
  //         name: name,
  //         price: parseFloat(price),
  //         images: images,
  //         amount: 1,
  //       },
  //     ]);
  //   }
  // };

  // const addToCart = (name, price) => {
  //   setCart({
  //     name: name,
  //     price: parseFloat(price),
  //   });
  //   setItem((pre_item) => {
  //     console.log(pre_item)
  //     if (pre_item.find((item) => item.name === cart.name) == null) {
  //       return [...pre_item, cart];
  //     } else {
  //       return pre_item.map((item) => {
  //         if (item.name == cart.name) {
  //           return { ...item, price: item.price + cart.price };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  //   console.log(item)
  // };

  const addToCart = (name, price, img) => {
    setCart([
      ...cart,
      {
        name: name,
        price: parseFloat(price),
        img: img
      },
    ]);
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
            <SizeChart />
          </div>
        ) : null}
        <div
          onClick={() => addToCart(props.products.name, props.products.price, props.products.images[0])}
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
