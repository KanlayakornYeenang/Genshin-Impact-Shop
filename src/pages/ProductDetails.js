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
import { MdVerified, MdOutlineClose } from "react-icons/md";
import Snackbar from "@mui/material/Snackbar";

const style = {
  position: "absolute",
  width: "20vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: "2%",
  border: "none",
};

const Details = (props) => {
  let isApparel = useLocation().pathname.split("/").slice(1)[0] == "apparel";
  const [cart, setCart] = useState([]);
  const didMount = useRef(false);
  let isProductsIn = false;
  // const [cartModal, setCartModal] = useState(null);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const addToCart = (size) => {
    handleOpen();
    if (JSON.parse(localStorage.getItem("cart")).length > 0) {
      JSON.parse(localStorage.getItem("cart")).map((inLocalStorage, index) => {
        let amounts = inLocalStorage.amount + 1;
        if (amounts > 5) {
          amounts = 5;
        }
        if (
          isApparel &&
          props.products.name == inLocalStorage.name &&
          size == inLocalStorage.size
        ) {
          let items = [...cart];
          let item = { ...cart[index] };
          item.amount = amounts;
          items[index] = item;
          setCart(items);
          isProductsIn = true;
        } else if (
          isApparel &&
          props.products.name == inLocalStorage.name &&
          size != inLocalStorage.size &&
          !isProductsIn
        ) {
          setCart([
            ...cart,
            {
              name: props.products.name,
              price: parseFloat(props.products.price),
              img: props.products.images[0],
              size: size,
              url: props.products.url,
              amount: 1,
            },
          ]);
        } else if (
          isApparel &&
          props.products.name != inLocalStorage.name &&
          size != inLocalStorage.size &&
          !isProductsIn
        ) {
          setCart([
            ...cart,
            {
              name: props.products.name,
              price: parseFloat(props.products.price),
              img: props.products.images[0],
              size: size,
              url: props.products.url,
              amount: 1,
            },
          ]);
        } else if (!isApparel && props.products.name == inLocalStorage.name) {
          let items = [...cart];
          let item = { ...cart[index] };
          item.amount = amounts;
          items[index] = item;
          setCart(items);
          isProductsIn = true;
        } else if (!isApparel && !isProductsIn) {
          setCart([
            ...cart,
            {
              name: props.products.name,
              price: parseFloat(props.products.price),
              img: props.products.images[0],
              size: size,
              url: props.products.url,
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
          name: props.products.name,
          price: parseFloat(props.products.price),
          img: props.products.images[0],
          size: size,
          url: props.products.url,
          amount: 1,
        },
      ]);
    }
    // setCartModal(props.products);
  };
  const [size, setSize] = useState("xs");
  const handleCurrentSize = (size) => {
    setSize(size);
  };

  useEffect(() => {
    if (cart == null) {
      setCart([]);
    }
    if (didMount.current) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      didMount.current = true;
      const saveCart = localStorage.getItem("cart");
      setCart(JSON.parse(saveCart));
    }
  }, [cart]);

  return (
    <div className="details">
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <div className="snackbar">
          <div className="snackbar-header">
            <div>
              <MdVerified style={{color:"#cc3a36", transform:"translateY(15%)"}} /> Added to Cart
            </div>
            <div>
              <MdOutlineClose style={{transform:"translateY(15%)", cursor:"pointer"}} onClick={handleClose} />
            </div>
          </div>
          <div className="snackbar-content">
            <img src={props.products.images[0]}/>
            <div style={{display:"flex", flexFlow:"column", justifyContent:"center", padding:"5%", rowGap:"10%"}}>
              <p>{props.products.name}</p>
              <p style={{fontWeight:"700"}}>${props.products.price}</p>
            </div>
          </div>
          <div>
            <Button string="Checkout"/>
            <Button string="View Cart" />
          </div>
        </div>
      </Snackbar>
      <div className="shape shapetop"></div>
      <div className="details-wrapper">
        <div className="details-header">
          <div className="details-name">{props.products.name}</div>
          <div className="details-price">${props.products.price}</div>
        </div>
        {isApparel ? (
          <div style={{ display: "flex", flexFlow: "column", rowGap: "1vw" }}>
            <SizeChartHeader />
            <SizeChart handleCurrentSize={handleCurrentSize} />
          </div>
        ) : null}
        <div onClick={() => addToCart(isApparel ? size : null)}>
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
