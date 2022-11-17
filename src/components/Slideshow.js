import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { bottoms } from "../data/ProductList";

//รูปภาพหน้า Home ที่ Slide ไปเรื่อยๆ
class MyGallery extends React.Component {
  render() {
    return (
      <div class="image-gallery-wrapper">
        <ImageGallery
          items={this.props.images}
          showThumbnails={false}
          showPlayButton={false}
          autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
          slideInterval={4000}
          slideDuration={1000}
        />
      </div>
    );
  }
}

export class MyGalleryProducts extends React.Component {
  render() {
    return (
      <div class="image-gallery-wrapper">
        <ImageGallery
          items={this.props.images}
          showThumbnails={true}
          thumbnailPosition={"left"}
          showPlayButton={false}
          showFullscreenButton={false}
          showNav={false}
          disableThumbnailScroll={true}
          disableThumbnailSwipe={true}
          disableSwipe={true}
        />
      </div>
    );
  }
}

export class MyGalleryAds extends React.Component {
  render() {
    return (
      <div class="image-gallery-wrapper">
        <img style={{width:"76.4%", position:"absolute", zIndex:"2", transform:"scale(0.89, 1.1) translate(-4.5%, 1.5%)"}} src="./images/frameads.png"/>
        <ImageGallery
          items={this.props.images}
          showThumbnails={false}
          showPlayButton={false}
          autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
          slideInterval={4000}
          slideDuration={1000}
          showNav={false}
        />
      </div>
    );
  }
}

export default MyGallery;
