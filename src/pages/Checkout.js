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
  Button,
} from "@mui/material";

const Checkout = () => {
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
                  }}
                >
                  <img style={{ width: "40%" }} src="./images/shoppay.png" />
                </ToggleButton>
                <ToggleButton
                  className="paypal"
                  sx={{
                    background: "#ffc439",
                    width: "100%",
                  }}
                >
                  <img style={{ width: "40%" }} src="./images/paypal.png" />
                </ToggleButton>
                <ToggleButton
                  className="gpay"
                  sx={{
                    background: "#000000",
                    width: "100%",
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
      <div className="checkout-r"></div>
    </div>
  );
};

export default Checkout;
