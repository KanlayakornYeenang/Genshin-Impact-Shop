import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:"/images/Slideshow/1.jpg"
  },
  {
    original:"/images/Slideshow/2.jpg"
  },
  {
    original:"/images/Slideshow/3.jpg"
  },
  {
    original:"/images/Slideshow/4.jpg"
  },
  {
    original:"/images/Slideshow/5.jpg"
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <div class="image-gallery-wrapper">
        <ImageGallery
          items={images}
          showThumbnails={false}
          showPlayButton={false}
          autoPlay={true}
          showFullscreenButton={false}
          showBullets={true}
          slideDuration={1000}
        />
      </div>
    );
  }
}

export default MyGallery;
