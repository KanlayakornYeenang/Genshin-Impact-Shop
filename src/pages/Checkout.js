import React from "react";
import "../components/Checkout.css";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import {
  FormControlLabel,
  FormGroup,
  Typography,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { TotalPrice } from "./Cart";
import { FaShippingFast } from "react-icons/fa";
import Button from "../components/Button";

const Checkout = () => {
  const confirmOrder = () => {
    localStorage.setItem('cart', JSON.stringify([]))
  }
  return (
    <div className="checkout-main">
      <div className="checkout-l">
        <div className="checkout-l-wrapper">
          <div className="checkout-l-content">
            <img src="./images/genshin-impact-store-logo-black.png" />
            <div className="expresscheckout">
              <p
                style={{
                  fontSize: "0.75vw",
                  fontWeight: "500",
                  position: "absolute",
                  background: "white",
                  transform: "translateY(-50%)",
                  padding: "0% 1%",
                }}
              >
                Express checkout
              </p>
              <ToggleButtonGroup
                exclusive
                sx={{
                  width: "93.5%",
                  height: "fit-content",
                  gap: "3%",
                  background: "white",
                  padding: "3%",
                  border: "0.1vw solid rgba(0, 0, 0, 0.2)",
                }}
              >
                <ToggleButton
                  className="shoppay"
                  sx={{
                    background: "#5a31f4",
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <img style={{ width: "40%" }} src="./images/shoppay.png" />
                </ToggleButton>
                <ToggleButton
                  className="paypal"
                  sx={{
                    background: "#ffc439",
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <img style={{ width: "40%" }} src="./images/paypal.png" />
                </ToggleButton>
                <ToggleButton
                  className="gpay"
                  sx={{
                    background: "#000000",
                    width: "100%",
                    height: "50%",
                  }}
                >
                  <img style={{ width: "22.5%" }} src="./images/gpay.png" />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
            <div
              style={{
                fontSize: "0.75vw",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              <div className="line">
                <p
                  style={{
                    position: "relative",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "white",
                    width: "fit-content",
                    padding: "0% 2%",
                  }}
                >
                  OR
                </p>
              </div>
            </div>
            <FormGroup>
              <p
                style={{
                  fontSize: "0.95vw",
                  textAlign: "left",
                  paddingBottom: "1vw",
                }}
              >
                Contact information
              </p>
              <TextField
                inputProps={{ style: { fontSize: "0.75vw" } }}
                InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                label="Email"
                variant="outlined"
                size="small"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: "1vw" } }}
                  />
                }
                label={
                  <Typography style={{ fontSize: "0.75vw" }}>
                    Keep me up to date on news and exclusive offers
                  </Typography>
                }
              />
            </FormGroup>
            <FormGroup sx={{ gap: "1vw" }}>
              <p
                style={{
                  fontSize: "0.95vw",
                  textAlign: "left",
                  paddingBottom: "1vw",
                }}
              >
                Shipping address
              </p>
              <FormControl fullWidth size="small">
                <InputLabel>
                  <p style={{ fontSize: "0.75vw" }}>Country/Region</p>
                </InputLabel>
                <Select label="Country/Region" defaultValue={10}>
                  <MenuItem value={10}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      Australia
                    </p>
                  </MenuItem>
                  <MenuItem value={20}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      Canada
                    </p>
                  </MenuItem>
                  <MenuItem value={30}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      New Zealand
                    </p>
                  </MenuItem>
                  <MenuItem value={40}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      Singapore
                    </p>
                  </MenuItem>
                  <MenuItem value={50}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      Taiwan
                    </p>
                  </MenuItem>
                  <MenuItem value={60}>
                    <p
                      style={{
                        fontSize: "0.75vw",
                        fontFamily: "'Roboto', sans-serif",
                        letterSpacing: "normal",
                        textAlign: "left",
                      }}
                    >
                      United States
                    </p>
                  </MenuItem>
                </Select>
              </FormControl>
              <div style={{ display: "flex", columnGap: "1vw" }}>
                <TextField
                  fullWidth
                  inputProps={{ style: { fontSize: "0.75vw" } }}
                  InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                  label="First Name"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  inputProps={{ style: { fontSize: "0.75vw" } }}
                  InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                  label="Last Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <TextField
                inputProps={{ style: { fontSize: "0.75vw" } }}
                InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                label="Address"
                variant="outlined"
                size="small"
              />
              <TextField
                inputProps={{ style: { fontSize: "0.75vw" } }}
                InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                label="Apartment, suite, etc. (optional)"
                variant="outlined"
                size="small"
              />
              <div style={{ display: "flex", columnGap: "1vw" }}>
                <TextField
                  fullWidth
                  inputProps={{ style: { fontSize: "0.75vw" } }}
                  InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                  label="City"
                  variant="outlined"
                  size="small"
                />
                <TextField
                  fullWidth
                  inputProps={{ style: { fontSize: "0.75vw" } }}
                  InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                  label="Postcode"
                  variant="outlined"
                  size="small"
                />
              </div>
              <TextField
                inputProps={{ style: { fontSize: "0.75vw" } }}
                InputLabelProps={{ style: { fontSize: "0.75vw" } }}
                label="Phone (optional)"
                variant="outlined"
                size="small"
              />
            </FormGroup>
          </div>
        </div>
      </div>
      <div className="checkout-r">
        <div className="checkout-r-content">
          {JSON.parse(localStorage.getItem("cart")).map((cart) => {
            return (
              <div className="checkout-r-product">
                <div>
                  <img src={cart.img} />
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.75vw",
                      fontWeight: "700",
                      color: "white",
                    }}
                  >
                    {cart.name}
                  </p>
                  {cart.size == null ? null : (
                    <p style={{ fontSize: "0.75vw", color: "#aaaaa9" }}>
                      {cart.size.toUpperCase()}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    fontSize: "0.75vw",
                    color: "white",
                    fontWeight: "700",
                    textAlign: "right",
                  }}
                >
                  ${(cart.price * cart.amount).toFixed(2)}
                  {cart.size == null ? null : (
                    <p style={{ color: "#2b2a29" }}>.</p>
                  )}
                </div>
              </div>
            );
          })}
          <div className="line" style={{ backgroundColor: "#aaaaa9" }}>
            <p
              style={{
                zIndex:"-10",
                position: "relative",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                width: "fit-content",
                padding: "0% 2%",
              }}
            >
              OR
            </p>
          </div>
          <div
            style={{
              fontSize: "0.75vw",
              color: "#aaaaa9",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>Subtotal</p>
            <TotalPrice style={{ color: "white", fontWeight: "700" }} />
          </div>
          <div
            style={{
              fontSize: "0.75vw",
              color: "#aaaaa9",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              Shipping&nbsp;
              <FaShippingFast style={{ transform: "translateY(20%)" }} />
            </div>
            <div style={{ color: "white", fontWeight: "700" }}>$7</div>
          </div>
          <div className="line" style={{ backgroundColor: "#aaaaa9" }}>
            <p
              style={{
                zIndex:"-10",
                position: "relative",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "white",
                width: "fit-content",
                padding: "0% 2%",
              }}
            >
              OR
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "1vw", color: "white" }}>Total</p>
            <div style={{ display: "flex" }}>
              <p style={{ fontSize: "1vw", color: "#aaaaa9" }}>USD</p>&nbsp;
              <TotalPrice
                style={{ fontSize: "1vw", color: "white", fontWeight: "700" }}
                shipping={7}
              />
            </div>
          </div>
          <div onClick={confirmOrder}>
            <Button
              url="/"
              string="Continue to confirm the order"
              style1={{
                borderRadius: "0.5vw",
                width: "70%",
                fontSize: "1vw",
                transform: "translateY(2vh)",
              }}
            />
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Checkout;