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
        />
      </div>
    );
  }
}

export default MyGallery;
