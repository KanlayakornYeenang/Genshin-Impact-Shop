import React from "react";
import Header from "../components/Header";
import MyGallery, { MyGalleryAds } from "../components/Slideshow";
import ProductWrapper, {
  ProductWrapperSale,
} from "../components/ProductWrapper";
import Footer from "../components/Footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Home = () => {
  console.log(localStorage.getItem("account"))
  const [open, setOpen] = React.useState(
    JSON.parse(localStorage.getItem("cart")).length == 0 &&
      JSON.parse(localStorage.getItem("cartlength")) != 0
  );
  if (open) {
    localStorage.setItem("cartlength", "0");
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="home">
      <Header />
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
            <p style={{fontSize:"1vw"}}>Your order has been confirmed.</p>
        </Alert>
      </Snackbar>
      <MyGallery
        images={[
          {
            original: "/images/Slideshow/1.jpg",
          },
          {
            original: "/images/Slideshow/2.jpg",
          },
          {
            original: "/images/Slideshow/3.jpg",
          },
        ]}
      />
      <ProductWrapper />
      <div className="ads-wrapper">
        <div className="ads">
          <MyGalleryAds
            images={[
              {
                original: "/images/Slideshow/ads1.png",
              },
              {
                original: "/images/Slideshow/ads2.png",
              },
              {
                original: "/images/Slideshow/ads3.png",
              },
            ]}
          />
        </div>
      </div>
      <ProductWrapperSale />
      <Footer />
    </div>
  );
};

export default Home;
